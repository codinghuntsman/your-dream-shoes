import { useEffect, useState } from "react"

//-----------This is custom hooks---------------
const UseProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts];
}
//---Has exported UseProduct function from here----
export default UseProduct;