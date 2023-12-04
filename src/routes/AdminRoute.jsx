/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

import useRole from "../hooks/useRole";


const AdminRoute= ({children}) => {
    const [role,isloading]=useRole()
    
   console.log(role);
    
    if(isloading) return <p className="text-4xl my-20 text-center">loading.....</p>
   if(role == "admin")return children
   return <Navigate to='/dashboard'></Navigate>
};

export default AdminRoute;