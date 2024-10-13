import React, { useEffect, useState } from 'react'
import { ProductContext } from './ProductsContext'
import Swal from 'sweetalert2'



export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {

            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            Swal.fire(
                {
                    icon: "error",
                    title: '¡Error!',
                    text: "Hubo un problema al cargar los productos"
                }
            )

        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}
