

import MenuItem from './MenuItem';
import { BsBookmarksFill, BsHouseAdd, BsListCheck } from 'react-icons/bs';

const HostMenu = () => {
    return <>




        <MenuItem
            icon={BsHouseAdd}
            label='Add Rooms'
            address='/dashboard/add-room'
        />
        <MenuItem
            icon={BsListCheck}
            label='My Listing'
            address='/dashboard/my-listings'
        />
        <MenuItem
            icon={BsBookmarksFill}
            label='Manage Bookings'
            address='/dashboard/manage-bookings'
        />
    </>
};

export default HostMenu;