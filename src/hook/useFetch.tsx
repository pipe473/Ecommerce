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
             console.log(data);             
         })
    },[]) 

    return data;
}

export default useFetch;