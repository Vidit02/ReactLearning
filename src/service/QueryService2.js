import axios from "axios"
import { useQuery } from "react-query"

export const fetchUserData = async () => {
    return await axios.get("https://reqres.in/api/users?delay=3")
}

export const useFetchUserData = () => {
    return useQuery('fetchResult',fetchUserData,{
        retry:10,
        retryDelay:10,
        enabled:false,
        refetchOnMount:false    
        
    })
}