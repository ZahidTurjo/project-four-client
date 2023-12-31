import { useEffect, useState } from "react"
import useAuth from "../../../hooks/useAuth"

import { getHostRoom } from "../../api/room"
import { data } from "autoprefixer"
import RoomDataRow from "../TableRow/RoomDataRow"
import useRole from "../../../hooks/useRole"



const MyListings = () => {
  const { user } = useAuth()
  const [rooms, setRooms] = useState([])
  const[loading,setLoading]=useState(false)
  const [role]=useRole()
console.log(role);
 
  useEffect(() => {
    if(!user?.email){
      setLoading(true)
     }
    getHostRoom(user?.email)
      .then(data => {
        setRooms(data)
        setLoading(false)
      })
  }, [user?.email])
  if(loading){
    return <h2>loading.....</h2>
  }

  return (
    <>


      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title 
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Location
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      From
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      To
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>{
                  rooms.map(room => <RoomDataRow key={room._id} room={room}></RoomDataRow>)
                }
              
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyListings