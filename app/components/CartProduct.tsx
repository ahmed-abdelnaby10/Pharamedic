'use client'
import { removeFromCart } from "@/lib/features/cart/CartSlice";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from 'react-redux';

export const CartProdCard = (props: Product) => {
    const dispatch =  useDispatch()
    const {title, image, price } = props
    const [quantity, setQuantity] = useState<number>(1);
    return (
        <div className="rounded-xl bg-f6 shadow-3xl border-solid border-2 border-ddd flex items-center justify-between gap-5 py-1 pl-1 pr-5 select-none small:flex-col small:items-center small:pr-1 small:gap-2 small:pb-2.5">
            <div className="flex gap-5 items-center small:flex-col">
                <Image
                    src={image}
                    alt={title}
                    width={100}
                    height={200}
                    className="rounded-xl"
                />
                <div className="h-full small:w-fit flex items-center w-1/2 small:grow">
                    <h1 className="text-xl font-medium w-fit">{title}</h1>
                </div>
            </div>
            <div className="flex gap-5 small:items-end small:justify-between my-2.5 items-center small:w-full">
                <div className="border-2 border-solid border-ddd rounded-lg w-24 h-16 small:w-20 small:h-12 flex justify-between items-center px-2.5 small:ml-2.5">
                    <div className="text-xl font-semibold">{quantity}</div>
                    <div className="flex flex-col h-full w-5">
                        <ChevronUpIcon className="w-full h-1/2 cursor-pointer" onClick={()=>setQuantity(quantity + 1)}/>
                        <ChevronDownIcon className="w-full h-1/2 cursor-pointer" onClick={()=>setQuantity(quantity - 1)}/>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-5 small:mr-2.5">
                    <p className="font-bold text-2xl"><span id="price">{price * quantity}</span>$</p>
                    <button className="cursor-pointer w-fit h-fit py-2 px-3 bg-red/60 text-white text-xl font-bold rounded-lg 
                        hover:bg-red duration-300" onClick={()=>dispatch(removeFromCart({...props}))}>Remove</button>
                </div>
            </div>
        </div>
    );
};