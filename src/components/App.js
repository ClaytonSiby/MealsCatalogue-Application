import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import CATEGORIESDATAFETCH from '../redux/categories/categoryActions'
import LoadingComponent from './LoadingComponent'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { truncate } from '../helpers/truncate'
import '../assets/App.css'

function App () {
  const dispatch = useDispatch()
  const data = useSelector(state => state.categoriesData.categories)
  const [completed, setCompleted] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      ;(async () => {
        await dispatch(CATEGORIESDATAFETCH.fetchCategories())
        setCompleted(true)
      })()
    }, 3000)
  }, [])

  return (
    <Container>
      {!completed ? (
        <div>
          <LoadingComponent type='bars' color='#03cf4e' />
        </div>
      ) : (
        <Row>
          {data &&
            data.categories &&
            data.categories.map(data => (
              <Col xs={12} sm={6} md={3} className="my-3">
                <Card key={Math.random() * 100}>
                  <Card.Img
                    variant='top'
                    alt={`${data.strCategory} thumbnail`}
                    src={data.strCategoryThumb}
                  />
                  <Card.Body className='bg-info'>
                    <Card.Title>{data.strCategory}</Card.Title>
                    <Card.Text>
                      {truncate(data.strCategoryDescription, 73)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      )}
    </Container>
  )
}

export default App
