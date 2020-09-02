import { useState, useEffect } from "react"
import {getGifs}from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [estado, setEstado] = useState({
    data:[] ,
    loading:true
});

      

    useEffect(()=>{
        getGifs(category)
        .then(imgs=>{
            setTimeout(() => {
            setEstado({
                data : imgs,
                loading: false
            });
          
        }  , 3000);

    },[category])
    
    })
    return estado;

}