import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import Categories from "./Categories/Categories";
import { useSearchParams } from "react-router-dom";
import Heading from "../sheared/Heading";



const Room = () => {
    const [rooms, setRooms]=useState([])
    const [loading,setLoading]=useState(false)
    const [params,setParams]=useSearchParams()
    const category=params.get('category')

    useEffect(()=>{
        setLoading(true)
        fetch('./room.json')
        .then(res=> res.json())
        .then(data=> {
            if(category){
             const result=   data.filter( item=>item.category === category)
             setRooms(result)
          
            }else{
                setRooms(data)
               
                
            
            }
            setLoading(false)
        })

    },[category])
    if(loading){
        return <h2 className="text-3xl mt-24 text-center">loading....</h2>
    }
   
    return (
       
            <div>
         <Categories></Categories>
           {rooms && rooms.length>0? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
rooms.map(room => <Card key={room._id} room={room}></Card>)
            }
           </div>
           ) : <>
           <div className="flex items-center justify-center h-[400px]">
           <Heading title="No room avalaible" center='center' subtitle="No room avalaible in this category"></Heading>

           </div>
           </>}
        </div>
      
    );
};

export default Room;