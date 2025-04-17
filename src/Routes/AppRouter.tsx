import {Routes,Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Header from '../components/Header/Header'
const AppRouter = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
          
        </Routes>
      
    </div>
  )
}

export default AppRouter
