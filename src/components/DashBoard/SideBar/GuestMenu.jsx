import { BsHouseAdd, } from "react-icons/bs";
import MenuItem from "./MenuItem";
import useRole from "../../../hooks/useRole";
import { GrUserAdmin } from "react-icons/gr";
import { useState } from "react";
import HostModal from "../../Modal/HostRequestModal";
import { requestedRole } from "../../api/auth";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";


const GuestMenu = () => {
    const [role]=useRole()
    const {user}=useAuth()
    const [isOpen,setIsOpen]=useState(true)
    const closeModal=()=>{
      setIsOpen(false)
    }
    const modalHandler=async()=>{
      // request to be host
      try {

      const data= await requestedRole(user?.email)
      console.log(data);
      toast.success('request sent succesfully')
      } catch (error) {
        console.log(error);
      }finally{
        setIsOpen(false)
      }
    }
    return<>
    <MenuItem
            icon={BsHouseAdd}
            label='My Bookings'
            address='/dashboard/my-bookings'
        />
   
   {role === 'guest' && (
        <div
        onClick={()=>setIsOpen(true)}
        className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>Become A Host</span>

        </div>
      )}
      <HostModal closeModal={closeModal} isOpen={isOpen} modalHandler={modalHandler} ></HostModal>
    </>
};

export default GuestMenu;