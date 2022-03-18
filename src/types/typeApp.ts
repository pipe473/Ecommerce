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