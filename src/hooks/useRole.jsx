

import { getRole } from "../components/api/auth";
import useAuth from "./useAuth";

import { useQuery } from "@tanstack/react-query";


const useRole = () => {
    const { user,loading} = useAuth()



    // const [role, setRole] = useState(null)
    // const[loading,setLoading]=useState(true)
    // useEffect(() => {

    //     getRole(user?.email)
    //     .then(data=>{
    //         setRole(data.role)
    //         setLoading(false)
    //     })
    // }, [user?.email])


    // return [role,loading]


    const { data: role, isLoading } = useQuery({

        enabled:!!user?.email,

        queryKey: ['role'],
        queryFn: async () => await getRole(user?.email)
    })
    console.log('tab ', user);
    return [role, isLoading]
};

export default useRole;