'use client'

import { addToCart } from "@/lib/features/cart/CartSlice";
import { RootState } from "@/lib/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

type Params = {
    params : {
        productID : string
    }
}

export default function Product({params: {productID}}: Params) {
    const products = useSelector((state: RootState)=> state.product)
    const dispatch = useDispatch<any>()
    const product = products.filter((prod)=> prod.id === +productID)[0]
    return (
        <>
            <div className="flex items-center justify-start smallerThanLarge:justify-center smallerThanLarge:pl-0 py-32 pl-28 overlay">
                <div className="land"></div>
                <h1 className="text-white text-5xl font-bold z-50 large:text-3xl meduim:text-2xl small:text-xl smallerThanLarge:text-center">{product.title}</h1>
            </div>
            <div key={product.id} className="rounded-lg bg-f6 py-2.5 px-10 large:px-1 meduim:px-1 small:px-2.5 flex small:flex-col gap-5 justify-between items-center border border-solid border-ddd shadow-3xl mx-10 smallerThanLarge:mx-1 my-10 basis-2/5">
                <div className="w-fit h-fit rounded-xl shadow-3xl">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={100}
                        height={200}
                        style={{
                            height: "400px",
                            width: "350px"
                        }}
                        className="rounded-xl"
                    />
                </div>
                <div className="flex flex-col items-start justify-start gap-5 smallerThanLarge:gap-2.5 basis-3/5">
                    <p className="text-txt-color"><span className="text-xl font-semibold text-black">Category</span>: {`${product.category}`}</p>
                    <p className="text-txt-color"><span className="text-xl font-semibold text-black">Description</span>: {product.description}</p>
                    <p className="text-txt-color"><span className="text-xl font-semibold text-black">Quantity</span>: {`${product.rating.count}`}</p>
                    <p className="text-txt-color"><span className="text-xl font-semibold text-black">Rate</span>: {`${product.rating.rate}`}&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                    <p className="text-txt-color"><span className="text-xl font-semibold text-black">Price</span>: {`${product.price}$`}</p>
                    <div className="flex items-center gap-5">
                        <button className="w-fit h-fit px-3 py-1 bg-btn-color text-white text-lg font-semibold rounded-lg hover:bg-f6 hover:text-black border border-solid border-btn-color duration-300 small:self-center" onClick={()=>{
                            dispatch(addToCart(product))
                        }}>Add to Cart</button>
                        <button className="w-fit h-fit px-3 py-1 bg-btn-color text-white text-lg font-semibold rounded-lg hover:bg-f6 hover:text-black border border-solid border-btn-color duration-300 small:self-center">Buy Now</button>
                    </div>    
                </div>
            </div>
        </>
    )
}
