import React from "react"

export type ProductFetch = {
    products: Productitem[],
    isLoading: boolean,
    isError: boolean
}

export type Productitem = {
    id: number;
    category: string;
    title: string;
    image: string;
    description: string;
    price: number;
}

export type CartItem = {
    id?: number;
    title: string;
    image?: string;
    price: number;
    amount: number;
}

export type cartActionReducer = {
    payload: any;
    type: 'ADD' | 'REMOVE' | 'REMOVE-ALL' | 'CLEAR';
}

export type CartContextType = {
    cartItems: CartItem[],
    dispatch: React.Dispatch<cartActionReducer>
}