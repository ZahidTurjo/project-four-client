
import { useLoaderData } from "react-router-dom";
import Heading from "../../components/sheared/Heading";
import Header from "../../components/RoomDetail/Haeder";
import RoomInfo from "../../components/RoomDetail/RoomInfo";
import RoomReservation from "../../components/RoomDetail/RoomReservation";



const RoomDetails = () => {
  
    // console.log('rooms sndksajo', room);
    // const {id}=useParams()
    // console.log(id);
    // const [rooms, setRooms]=useState([])
    // const [loading,setLoading]=useState(false)
    // useEffect(()=>{
    //     setLoading(true)
    //     fetch('/room.json')
    //     .then(res=> res.json())
    //     .then(data=>{
    //         const singleRoom=data.find(room=> room._id === id)
    //         setRooms(singleRoom)
    //         setLoading(false)
    //     })

    // },[id])
    // console.log(rooms);
    const room= useLoaderData()

   
    return (
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6">
            
            <Heading title={room.location} subtitle={room.category} center="start"></Heading>
            
            <Header rooms={room}></Header>
            </div>  
            <div className="grid grid-cols-1 mt-12 gap-9 md:grid-cols-7">
                <RoomInfo rooms={room}></RoomInfo>
               <div className="md:col-span-3 order-first md:order-last mb-10">
         <RoomReservation room={room}></RoomReservation>
               </div>
            </div>
        </div>
    );
};

export default RoomDetails;