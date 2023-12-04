import { BsHouseAdd, } from "react-icons/bs";
import MenuItem from "./MenuItem";


const GuestMenu = () => {
    return<>
    <MenuItem
            icon={BsHouseAdd}
            label='My Bookings'
            address='/dashboard/my-bookings'
        />
       
    </>
};

export default GuestMenu;