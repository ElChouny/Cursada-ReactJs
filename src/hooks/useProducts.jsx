import React, { useState } from 'react';
import { getAllProducts } from "../services/products.service";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        getAllProducts()
            .then((response) => {
                    setProducts(response.data.products);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { products, loading };
};