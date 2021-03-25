import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import CATEGORIESDATAFETCH from '../redux/categories/categoryActions';
import LoadingComponent from './LoadingComponent'
import truncate from '../helpers/truncate'
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
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', flexDirection: 'column'}}>
            <h4>...loading</h4>
            <LoadingComponent type='balls' color='#03cf4e' />
          </div>
        ) : (
          <Row>
            {data &&
              data.categories &&
              data.categories.map(data => (
                <Col
                  xs={12}
                  sm={6}
                  md={3}
                  key={Math.random() * 100}
                  className='my-3'
                >
                  <Card className='m-0 p-0'>
                    <Card.Img
                      variant='top'
                      alt={`${data.strCategory} thumbnail`}
                      src={data.strCategoryThumb}
                    />
                    <Card.Body className=''>
                      <Card.Title>{data.strCategory}</Card.Title>
                      <Card.Text>
                        {truncate(data.strCategoryDescription, 73)}
                        <button
                          type='button'
                          className='btn btn-block btn-info mt-2'
                        >
                          <a href={`\\categories\\${data.strCategory}`}>View Details</a>
                        </button>
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
