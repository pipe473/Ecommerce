import { useState, useEffect } from "react";
import { ProductFetch, Productitem } from "../types/typeApp";
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

            const customData = data.map((product: Productitem) => ({ ...product, description: product.description.substring(0,55) })); 

            //  console.log(data);   
            setData({
                products: customData,
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