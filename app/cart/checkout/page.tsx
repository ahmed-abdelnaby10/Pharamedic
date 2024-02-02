'use client'

import { RootState } from "@/lib/store"
import Link from "next/link"
import  {useSelector}  from "react-redux"

export default function Checkout() {

    const shipping = 20;

    const cartProds = useSelector((state:RootState)=> state.cart)
    
    const prices = cartProds.reduce((prev:number, cur:Product):any=>{
        return prev += cur.price
    }, 0)
    return (
        <>
            <div className="flex items-center justify-start pl-10 py-32 small:py-20 overlay">
                <div className="land"></div>
                <h1 className="text-white text-5xl z-40 font-bold small:text-3xl" onClick={()=>{console.log(prices);
                }}>Checkout</h1>
            </div>
            <div className="rounded-xl bg-f6 shadow-3xl border-solid border-2 border-ddd flex flex-col grow h-fit py-3.5 px-2.5 w-60 mx-5 small:mx-1 my-10 small:my-5 extralarge:mx-28">
                <h1 className="text-xl font-bold w-full border-b border-solid border-ddd pb-5">Order Summary</h1>
                <div className="flex justify-between items-center text-lg text-txt-color mt-5">
                    <p>Subtotal</p>
                    <p>{+prices}$</p>
                </div>
                <div className="flex justify-between items-center text-lg text-txt-color w-full border-b border-solid border-ddd pb-5">
                    <p>Shipping</p>
                    <p><span id="shipping">{shipping}</span>$</p>
                </div>
                <div className="flex justify-between items-center text-xl font-bold my-5">
                    <p>Total</p>
                    <p>{+prices + shipping}$</p>
                </div>
            </div>
            <Link href="/cart">Back TO cart</Link>
        </>
    )
}
