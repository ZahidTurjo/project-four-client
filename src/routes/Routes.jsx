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
import HostRoute from './HostRoute'
import ManageUsers from '../components/DashBoard/Admin/ManageUsers'
import AdminRoute from './AdminRoute'
import Profile from '../components/DashBoard/Common/Profile'
import MyBookings from '../components/DashBoard/Guest/MyBookings'
import ManageBookings from '../components/DashBoard/Host/ManageBookings'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,

    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => getAllRooms()
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader: ({ params }) => getSingleRoom(params.id)
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: 'add-room',
        element: <PrivateRoute><HostRoute><AddRoom></AddRoom></HostRoute></PrivateRoute>
      },
      {
        path: 'my-listings',
        element: <PrivateRoute>
          <HostRoute><MyListings></MyListings></HostRoute>
        </PrivateRoute>
      },
      // admin
      {
        path: 'manage-users',
        element:
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>

      },{
        path:'profile',
        element:<PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path:'my-bookings',
        element:<PrivateRoute>
          <MyBookings></MyBookings>
        </PrivateRoute>
      },
      {
        path:'manage-bookings',
        element:<PrivateRoute>
          <ManageBookings></ManageBookings>
        </PrivateRoute>
      }

    ]

  }

])