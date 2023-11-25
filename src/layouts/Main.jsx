import { Outlet } from 'react-router-dom'
import Navbar from '../components/sheared/Navbar/Navbar'
import Container from '../components/sheared/Container'

const Main = () => {
  return (

     <div>
    <Navbar></Navbar>
    <Container>
      <div className='pt-24 min-h-[calc(100vh-68px)]'>
       
        <Outlet />
      </div>
      </Container>
    </div>

  )
}

export default Main