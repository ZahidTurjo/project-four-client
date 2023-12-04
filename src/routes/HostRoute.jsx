/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

import useRole from "../hooks/useRole";


const HostRoute = ({children}) => {
    const [role,isloading]=useRole()
    
   
    
    if(isloading) return <p className="text-4xl my-20 text-center">loading.....</p>
   if(role == "host")return children
   return <Navigate to='/dashboard'></Navigate>
};

export default HostRoute;