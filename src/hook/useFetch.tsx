import { useState, useEffect } from "react";
import { ProductFetch } from "../types/typeApp";
import getProducts from "../components/helpers/getData";

const useFetch = () => {

    const [ data, setData ] = useState<ProductFetch>({
        products: [],
        isLoading: true,
        isError: false
    });

    useEffect(() => {
        getProducts()
         .then(data => {
            //  console.log(data);   
            setData({
                products: data,
                isLoading: false,
                isError: false
            })          
         })
         .catch(err => {
             setData({
                products: [],
                isLoading: false,
                isError: true
             })
         })
    },[]) 

    return data;
}

export default useFetch;