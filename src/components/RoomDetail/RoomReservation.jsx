/* eslint-disable react/prop-types */


import { useState } from "react";
import Button from "../Button/Button";
import Calen from "./Calen";
import { formatDistance } from "date-fns";
import BookingModal from "../Modal/BookingModal";
import useAuth from "../../hooks/useAuth";


const RoomReservation = ({ room }) => {
    const {user}=useAuth()
    let [isOpen, setIsOpen] = useState(false)
    console.log('modal', user?.displayName
    );
    

    const closeModal=()=>{
        setIsOpen(false)
    }

    const [value, setValue] = useState({
        startDate: new Date(room?.from),
        endDate: new Date(room?.to),
        key: 'selection'
    })
    // Price calculation
    const totaldays = parseInt(formatDistance(new Date(room?.from), new Date(room?.to)).split(' ')[0])

    const totalPrice = parseFloat(totaldays * room?.price)
    console.log(totalPrice);
    const [bookingInfo,setBookingInfo]=useState({
        guest:{
            name:user?.displayName,
            email:user?.email,
            image:user?.photoURL,
        },
        host:room?.host?.email,
        location:room?.location,
        price:totalPrice,
        to:value.endDate,
        from:value.startDate,
        title:room?.title,
        roomId:room?._id,
        image:room?.image

    })
console.log('modal-->,',bookingInfo.guest.name);
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

                <Button
                disabled={room.host.email ===user.email || room.booked}
                onClick={()=>setIsOpen(true)} label={'Reserve'}></Button>
            </div>
            <hr />
            <div className="p-4 flex items-center justify-between 
           font-semibold text-lg">
                <div>Total</div>
                <div> {totalPrice}$</div>
            </div>

            <BookingModal isOpen={isOpen}  closeModal={closeModal} bookingInfo={bookingInfo}></BookingModal>
        </div>
    );
};

export default RoomReservation;