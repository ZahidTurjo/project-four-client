/* eslint-disable react/prop-types */


import Button from "../Button/Button";
import Calen from "./Calen";


const RoomReservation = ({ rooms }) => {
    // Price calculation
//   const totaldays=parseInt(formatDistance(new Date(rooms?.from), new Date(rooms?.to)).split(' ')[0])
  
//     const totalPrice= parseFloat(totaldays*rooms?.price)
//     console.log(totalPrice);
//     const [value,setValue]=useState({
//         startDate:new Date(rooms?.from),
//         endDate: new Date(rooms?.to),
//         key:'selection'
//     })
    return (
        <div className="rounded-xl border-[1px] overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold">
                    {rooms.price}$
                </div>
                <div className="font-light">Night</div>


            </div>
            <hr />
           <div className="flex justify-center">
           <Calen ></Calen>
           </div>
           <hr />
           <div className="p-4">

            <Button label={'Reserve'}></Button>
           </div>
           <hr />
           <div className="p-4 flex items-center justify-between 
           font-semibold text-lg">
<div>Total</div>
<div>   {rooms.price}$</div>
           </div>
        </div>
    );
};

export default RoomReservation;