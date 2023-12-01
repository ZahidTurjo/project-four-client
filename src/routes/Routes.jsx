import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import { getAllRooms, getSingleRoom } from '../components/api/room'
import DashBoard from '../layouts/DashBoard'
import AddRoom from '../components/DashBoard/Host/AddRoom'
import MyListings from '../components/DashBoard/Host/MyListings'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,

    children: [
      {
        path: '/',
        element: <Home />,
        loader:()=>getAllRooms()
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader:({params})=> getSingleRoom(params.id)
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path:'/dashboard',
    element:<DashBoard></DashBoard>,
    children:[
      {
      path:'add-room',
      element:<PrivateRoute><AddRoom></AddRoom></PrivateRoute>
    },
 {
  path:'my-listings',
  element:<PrivateRoute><MyListings></MyListings></PrivateRoute>
 }
   
  ]
   
  }

])