
import axiosSecure from "."


export const saveUser = async (user)=>{
    const currentUser={
        email:user.email,
        role:'guest',
        status:'verified'
    }
    const {data}= await axiosSecure.put(`/users/${user?.email}`,currentUser)
    return data
}

export const getToken=async(email)=>{
   
    
    const {data}= await axiosSecure.post(`/jwt`,{email:email})
    console.log('token recieved from server --->', data);
    return data
}

// clear token from browser

export const clearCookie = async()=>{
    const {data}= await axiosSecure.get('/logout')
    
    return data
}