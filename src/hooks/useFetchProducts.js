import { useEffect, useState } from 'react';
import axiosUrl from '../axios/axiosInstance';

const usefetchProducts = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        const result = await axiosUrl.get('/products');
        setProducts(result.data);
    }

    useEffect(() => {
        fetchData()
    }, []);
};

export default usefetchProducts;