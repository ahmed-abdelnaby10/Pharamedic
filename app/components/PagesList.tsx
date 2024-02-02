"use client"
import Link from "next/link"
import styles from "./combonents.module.css"

type Props = {
    props : {
        setRemove: Function,
        setIsClicked: Function
    }
}

export default function PagesList({props: {setRemove, setIsClicked}}: Props)  {
    const setState = ()=>{
        setIsClicked(false);
        setRemove(true);
    };
    return(
        <ul className={`${styles.pagesList} duration-300 list-none bg-white border-l-8 text-black border-solid border-l-bg-color`} >
            <li className="h-fit w-full py-4 px-5 hover:text-hover-color duration-300"><Link href="/#membership" onClick={setState}>Membership</Link></li>
            <li className="h-fit w-full py-4 px-5 hover:text-hover-color duration-300"><Link href="/#pharmacist" onClick={setState}>Pharmacist</Link></li>
            <li className="h-fit w-full py-4 px-5 hover:text-hover-color duration-300"><Link href="/#testimonials" onClick={setState}>Testimonials</Link></li>
            <li className="h-fit w-full py-4 px-5 hover:text-hover-color duration-300"><Link href="/contact-us/#news" onClick={setState}>News & Articles</Link></li>
        </ul>
    )
}
