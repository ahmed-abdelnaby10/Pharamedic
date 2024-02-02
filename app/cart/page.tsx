'use client'

import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { clearCart } from "@/lib/features/cart/CartSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import { CartProdCard } from "../components/CartProduct";
import Link from "next/link"
import Swal from "sweetalert2"

export default function Cart() {
    const cartProducts = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()
    return (
        <>
            <div className="flex items-center justify-start pl-10 py-32 small:py-20 overlay">
                <div className="land"></div>
                <h1 className="text-white text-5xl z-40 font-bold small:text-3xl">Your cart</h1>
            </div>
            <div className="flex flex-col mx-5 small:mx-1 my-10 small:my-5 gap-10 small:gap-5 extralarge:mx-28">
                <div className="grid xxxlarge:grid-cols-grid2 small:grid-cols-grid1 gap-5 small:gap-2.5">
                    {
                        cartProducts.length !== 0 ? 
                        (cartProducts.map((product)=> <CartProdCard key={product.id} {...product}/>))
                        : (
                            <div className="text-3xl flex gap-2 text-txt-color self-center h-full items-center">
                                <ShoppingCartIcon className="w-10 h-10" />
                                <span>Your Cart is Empty</span>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="flex w-fit mx-auto gap-10 mb-10 small:gap-5">
                <button className={`${cartProducts.length > 0 ? "flex" : "hidden"} items-center w-fit h-14 rounded-lg bg-red/60 text-white text-lg font-semibold hover:bg-red duration-300 cursor-pointer px-5 small:px-4 small:h-12`} onClick={()=>{
                    Swal.fire({
                        title: "Are you sure to clear your cart?",
                        showCancelButton: true,
                        confirmButtonText: "Sure",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            dispatch(clearCart())
                            Swal.fire("Your cart is cleared successfully!", "", "success");
                        }
                    });
                }}
                >Clear Cart</button>
                <Link href="/cart/checkout" className={`${cartProducts.length > 0 ? "flex" : "hidden"} items-center w-fit h-14 rounded-lg bg-hover-color text-white text-lg font-semibold hover:bg-bg-color duration-300 cursor-pointer px-5 small:px-4 small:h-12`}>Checkout</Link>
            </div>
        </>
    )
}