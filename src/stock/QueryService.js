import axios from "axios"
import { useQuery } from "react-query"

export function use52WeekHigh(a) {
    const url = {
        method: 'GET',
        url: 'https://nse-data1.p.rapidapi.com/near_fifty_two_week_low',
        headers: {
            'X-RapidAPI-Host': 'nse-data1.p.rapidapi.com',
            'X-RapidAPI-Key': '59308a7a72msh4db3279ac3413a0p130cd1jsn4116260a5abb'
        }
    }
    return useQuery(["demo1", a], async () => {
        return await axios(url).then(res => {
        })
    }, {
        enabled: false
    })
}

export function useGetWeather(b) {
    const url = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: 'Ahmedabad' },
        headers: {
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            'X-RapidAPI-Key': '0a1e1ac9b1mshcf7a1d186f7ed16p147334jsn2690c7e057a2'
        }
    }
    return useQuery(["demo2",b], async () =>{
        return await axios(url).then(res=>{
            console.log(res);
        })
    },{
        enabled:false
    })
}