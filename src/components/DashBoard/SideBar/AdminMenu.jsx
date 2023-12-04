import { AiOutlineUser } from "react-icons/ai";
import MenuItem from "./MenuItem";


const AdminMenu = () => {
    return <>
    <MenuItem
            icon={AiOutlineUser}
            label='Manage Users'
            address='/dashboard/manage-users'
        />
       
    </>
};

export default AdminMenu;