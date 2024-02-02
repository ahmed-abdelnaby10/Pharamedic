'use client'

import { addToCart } from "@/lib/features/cart/CartSlice";
import { getData } from "@/lib/features/products/ProductsSlice";
import { RootState } from "@/lib/store";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
    const productsData = useSelector((state: RootState)=> state.product)
    const cartProducts = useSelector((state:RootState)=> state.cart)
    const dispatch = useDispatch<any>()
    const [products, setProducts] = useState<Product[]>(productsData)
    const [active, setActive] = useState("") 
    const cates = Array.from(new Set(productsData.map((product)=>{
        return product.category
    })))

    useEffect(()=>{
        dispatch(getData())
    },[])

    return (
        <>
            <div className="flex items-center justify-between small:justify-center small:px-5 px-28 overlay small:gap-10">
                <div className="land"></div>
                <h1 className="text-white text-5xl font-bold z-50 small:text-3xl py-32">Our Products</h1>
                <Link href="/cart" className="text-white z-50 relative"><span className="absolute w-7 h-7 rounded-full bg-red text-white text-sm -top-2 -right-2 flex items-center justify-center">{cartProducts.length}</span><ShoppingCartIcon className="w-14 hover:text-ddd duration-300"/></Link>
            </div>
            <div className="mx-auto w-fit my-10 small:my-5 flex gap-5 items-center justify-center meduim:w-3/5 meduim:flex-wrap small:flex-col small:gap-2">
                <button id="All" className={`w-fit h-fit px-3 py-1 bg-hover-color text-white text-lg font-semibold rounded-lg border border-solid border-hover-color ${active == "All" ? "activ-category" : ""}`} onClick={(e)=>{
                    setActive(e.currentTarget.id)
                    setProducts(productsData)
                }}>
                                All</button>
                {
                    cates.map((cate)=>{
                        return (
                            <button key={cate} id={cate} className={`w-fit h-fit px-3 py-1 bg-hover-color text-white text-lg font-semibold 
                            rounded-lg border border-solid border-hover-color ${active == cate? "activ-category" : ""}`} onClick={(e)=>{
                                setActive(e.currentTarget.id)
                                const filterdProducts = productsData.filter((product)=>{
                                    if (product.category === cate) {
                                        return product
                                    }
                                })
                                setProducts(filterdProducts)
                                
                            }}>
                                {cate}</button>
                        )
                    })
                }
            </div>
            <div className="grid grid-cols-grid4 gap-5 my-10 small:my-5 mx-5 small:mx-1 extralarge:mx-20 xlarge:grid-cols-grid3 large:grid-cols-grid2 meduim:grid-cols-grid2 small:grid-cols-grid1">
                {products.map((product) => {
                    return (
                        <div key={product.id} className="rounded-lg bg-white p-2.5 flex flex-col gap-5 items-center border border-solid border-ddd shadow-3xl">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={100}
                                height={200}
                                style={{
                                    height: "140px",
                                    width: "100px"
                                }}
                            />
                            <h1 className="text-2xl font-semibold">{`${product.title.slice(0, 17)}...`}</h1>
                            <p className="text-txt-color text-base">{`Price ${product.price}$`}</p>
                            <div className="flex items-center w-full justify-center gap-5">
                                <Link href={`/products/${product.id}`} className="w-fit h-fit px-3 py-1 bg-hover-color text-white text-lg font-semibold rounded-lg hover:bg-bg-color duration-300 border border-solid border-hover-color hover:border-bg-color">Details</Link>
                                <button className="w-fit h-fit px-3 py-1 bg-btn-color text-white text-lg font-semibold rounded-lg 
                                hover:bg-f6 hover:text-black border border-solid border-btn-color duration-300" 
                                onClick={()=>{dispatch(addToCart(product))}}>Add to Cart</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}