/* eslint-disable react/prop-types */


import { useState } from "react";
import Button from "../Button/Button";
import Calen from "./Calen";
import { formatDistance } from "date-fns";


const RoomReservation = ({ room }) => {
    const [value,setValue]=useState({
        startDate:new Date(room?.from),
        endDate: new Date(room?.to),
        key:'selection'
    })
    // Price calculation
  const totaldays=parseInt(formatDistance(new Date(room?.from), new Date(room?.to)).split(' ')[0])
  
    const totalPrice= parseFloat(totaldays*room?.price)
    console.log(totalPrice);
 
    return (
        <div className="rounded-xl border-[1px] overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold">
                    {room.price}$
                </div>
                <div className="font-light">Night</div>


            </div>
            <hr />
           <div className="flex justify-center">
           <Calen value={value} ></Calen>
           </div>
           <hr />
           <div className="p-4">

            <Button label={'Reserve'}></Button>
           </div>
           <hr />
           <div className="p-4 flex items-center justify-between 
           font-semibold text-lg">
<div>Total</div>
<div> {totalPrice}$</div>
           </div>
        </div>
    );
};

export default RoomReservation;