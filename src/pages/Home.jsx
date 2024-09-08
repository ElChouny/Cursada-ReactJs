import { Flex, Spinner } from "@chakra-ui/react";
import { useProducts } from "../hooks/useProducts";
import { ItemListContainer } from "../components";

export const Home = () => {
    const { products, loading } = useProducts();
    return <ItemListContainer products={products} />;
};