import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import CATEGORIESDATAFETCH from '../redux/categories/categoryActions'
import LoadingComponent from './LoadingComponent'
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
    <div>
      {!completed ? (
        <LoadingComponent type='bars' color='#03cf4e' />
      ) : (
        <div>
           {
             data && data.categories && data.categories.map(data => (
               <div>
                 <img key={Math.random() * 100} src={data.strCategoryThumb} />
               </div>
             ))
           }
        </div>
      )}
    </div>
  )
}

export default App
