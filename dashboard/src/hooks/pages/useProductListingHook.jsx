import { useEffect, useState } from "react"
import { doGetAllProducts } from "../../actions/productAction"

const useProductListingHook = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = async () => {
        const productsData = await doGetAllProducts();
        //console.log("products", productsData);
        if (productsData?.status === 200) {
            setAllProducts(productsData?.data)
        }
    }


    return {
        allProducts
    }
}

export default useProductListingHook
