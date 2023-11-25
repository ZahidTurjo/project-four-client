import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "../../components/sheared/Heading";
import Header from "../../components/RoomDetail/Haeder";
import RoomInfo from "../../components/RoomDetail/RoomInfo";
import RoomReservation from "../../components/RoomDetail/RoomReservation";



const RoomDetails = () => {
    const {id}=useParams()
    console.log(id);
    const [rooms, setRooms]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch('/room.json')
        .then(res=> res.json())
        .then(data=>{
            const singleRoom=data.find(room=> room._id === id)
            setRooms(singleRoom)
            setLoading(false)
        })

    },[id])
    console.log(rooms);

    if(loading){
        return <h2 className="text-3xl mt-24 text-center">loading....</h2>
    }
    return (
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6">
            
            <Heading title={rooms.location} subtitle={rooms.category} center="start"></Heading>
            
            <Header rooms={rooms}></Header>
            </div>  
            <div className="grid grid-cols-1 mt-12 gap-9 md:grid-cols-7">
                <RoomInfo rooms={rooms}></RoomInfo>
               <div className="md:col-span-3 order-first md:order-last mb-10">
         <RoomReservation rooms={rooms}></RoomReservation>
               </div>
            </div>
        </div>
    );
};

export default RoomDetails;