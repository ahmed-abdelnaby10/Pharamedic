'use client'

import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function Questions() {
    const [toggle, setToggle] = useState(0)
    const updateToggle = (id:number)=> {
        setToggle(id)
    }

    return (
        <ul className="flex flex-col items-start justify-center gap-5 moreThanLarge:pl-5 moreThanLarge:basis-3/5 list-none divide-y-2 divide-dashed divide-ddd large:w-5/6 meduim:w-11/12 small:w-full small:px-2.5">
            <li className="flex items-center justify-between w-full">
                <div>
                    <p className={`${toggle === 1 ? "text-hover-color" : ""} text-base capitalize cursor-pointer hover:text-hover-color duration-300 font-medium tracking-normal`} onClick={()=>{
                        if (toggle !== 1) {
                            updateToggle(1)
                        }else {
                            updateToggle(0)
                        }
                    }}>why choose us for your project</p>
                </div>
                <div className={`${toggle === 1 ? "rotate-45" : ""} flex items-center justify-center text-lg hover:text-hover-color cursor-pointer duration-300`} onClick={()=>{
                        if (toggle !== 1) {
                            updateToggle(1)
                        }else {
                            updateToggle(0)
                        }
                    }}><FaPlus/></div>
            </li>
            <li className={`${toggle === 1 ? "flex" : "hidden"} duration-300 items-center justify-start w-full pt-5`}>
                <p className="text-txt-color">Hendrerit auctor nulla cubilia non senectus curabitur. In libero fermentum nullam dictum eu inceptos donec congue ultrices hendrerit sapien.</p>
            </li>
            <li className="flex items-center justify-between w-full pt-5">
                <div>
                    <p className={`${toggle === 2 ? "text-hover-color" : ""} text-base capitalize cursor-pointer hover:text-hover-color duration-300 font-medium tracking-normal`} onClick={()=>{
                        if (toggle !== 2) {
                            updateToggle(2)
                        }else {
                            updateToggle(0)
                        }
                    }}>how we provide services for you</p>
                </div>
                <div className={`${toggle === 2 ? "rotate-45" : ""} flex items-center justify-center text-lg hover:text-hover-color cursor-pointer duration-300`} onClick={()=>{
                        if (toggle !== 2) {
                            updateToggle(2)
                        }else {
                            updateToggle(0)
                        }
                    }}><FaPlus/></div>
            </li>
            <li className={`${toggle === 2 ? "flex" : "hidden"} duration-300 items-center justify-start w-full pt-5`}>
                <p className="text-txt-color">Hendrerit auctor nulla cubilia non senectus curabitur. In libero fermentum nullam dictum eu inceptos donec congue ultrices hendrerit sapien.</p>
            </li>
            <li className="flex items-center justify-between w-full pt-5">
                <div>
                    <p className={`${toggle === 3 ? "text-hover-color" : ""} text-base capitalize cursor-pointer hover:text-hover-color duration-300 font-medium tracking-normal`} onClick={()=>{
                        if (toggle !== 3) {
                            updateToggle(3)
                        }else {
                            updateToggle(0)
                        }
                    }}>about content creation, can i participate in the idea</p>
                </div>
                <div className={`${toggle === 3 ? "rotate-45" : ""} flex items-center justify-center text-lg hover:text-hover-color cursor-pointer duration-300`} onClick={()=>{
                        if (toggle !== 3) {
                            updateToggle(3)
                        }else {
                            updateToggle(0)
                        }
                    }}><FaPlus/></div>
            </li>
            <li className={`${toggle === 3 ? "flex" : "hidden"} duration-300 items-center justify-start w-full pt-5`}>
                <p className="text-txt-color">Hendrerit auctor nulla cubilia non senectus curabitur. In libero fermentum nullam dictum eu inceptos donec congue ultrices hendrerit sapien.</p>
            </li>
            <li className="flex items-center justify-between w-full pt-5">
                <div>
                    <p className={`${toggle === 4 ? "text-hover-color" : ""} text-base capitalize cursor-pointer hover:text-hover-color duration-300 font-medium tracking-normal`} onClick={()=>{
                        if (toggle !== 4) {
                            updateToggle(4)
                        }else {
                            updateToggle(0)
                        }
                    }}>how we are affordable than others</p>
                </div>
                <div className={`${toggle === 4 ? "rotate-45" : ""} flex items-center justify-center text-lg hover:text-hover-color cursor-pointer duration-300`} onClick={()=>{
                        if (toggle !== 4) {
                            updateToggle(4)
                        }else {
                            updateToggle(0)
                        }
                    }}><FaPlus/></div>
            </li>
            <li className={`${toggle === 4 ? "flex" : "hidden"} duration-300 items-center justify-start w-full pt-5`}>
                <p className="text-txt-color">Hendrerit auctor nulla cubilia non senectus curabitur. In libero fermentum nullam dictum eu inceptos donec congue ultrices hendrerit sapien.</p>
            </li>
        </ul>
    )
}
