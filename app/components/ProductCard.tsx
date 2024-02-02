'use client'

import { addToCart } from "@/lib/features/cart/CartSlice"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"

export default function ProductCard(props: Product) {
    const dispatch = useDispatch()
    return (
        <div key={props.id} className="rounded-lg bg-white p-2.5 flex flex-col gap-5 items-center border border-solid border-ddd shadow-3xl">
            <Image
                src={props.image}
                alt={props.title}
                width={100}
                height={200}
                style={{
                    height: "140px",
                    width: "100px"
                }}
            />
            <h1 className="text-2xl font-semibold">{`${props.title.slice(0, 17)}...`}</h1>
            <p className="text-txt-color text-base">{`Price ${props.price}$`}</p>
            <div className="flex items-center w-full justify-center gap-5">
                <Link href={`/products/${props.id}`} className="w-fit h-fit px-3 py-1 bg-hover-color text-white text-lg font-semibold rounded-lg hover:bg-bg-color duration-300 border border-solid border-hover-color hover:border-bg-color">Details</Link>
                <button className="w-fit h-fit px-3 py-1 bg-btn-color text-white text-lg font-semibold rounded-lg 
                hover:bg-f6 hover:text-black border border-solid border-btn-color duration-300" 
                onClick={()=>{dispatch(addToCart({...props}))}}>Add to Cart</button>
            </div>
        </div>
    )
}
