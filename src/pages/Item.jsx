import React from "react";
import { useParams } from "react-router";
import { useProductsById } from "../hooks";
import {ItemDetailContainer} from "../components";

export const Item = () => {
    // useParams: hook que permite acceder a los parametros de la URL
    const { id } = useParams();
    const { product, loading } = useProductsById(id);

    return  <ItemDetailContainer product={product}/>;
};