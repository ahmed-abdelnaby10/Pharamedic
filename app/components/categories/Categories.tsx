import Link from "next/link";
import { FaArrowAltCircleRight, FaCaretRight } from "react-icons/fa";
import OneCategory from "./OneCategory";

export default function Categories() {
    return (
        <div className="mt-5 rounded-xl bg-f6 grid items-start moreThanLarge:grid-cols-grid4 meduim:grid-cols-grid2 large:grid-cols-grid2 small:grid-cols-grid1 p-5 mx-5 smallerThanLarge:mx-3 gap-5">
            <OneCategory props={{linkAddress:"/", linkText:"Medicines", paragraph:"Massa maecenas mauris nam pharetra risus natoque etiam laoreet.", icon:<FaCaretRight/>, classes:"moreThanLarge:border-r border-eee border-solid smallerThanLarge:border-b smallerThanLarge:pb-5"}}/>
            <OneCategory props={{linkAddress:"/", linkText:"Beauty Care", paragraph:"Maximus curae cubilia purus neque dictum amet vivamus.", icon:<FaCaretRight/>, classes:"moreThanLarge:border-r border-eee border-solid smallerThanLarge:border-b smallerThanLarge:pb-5"}}/>
            <OneCategory props={{linkAddress:"/", linkText:"Health Products", paragraph:"Class morbi donec ac letius orci non interdum dapibus parturient.", icon:<FaCaretRight/>, classes:"moreThanLarge:border-r border-eee border-solid small700:pb-5 small700:border-b"}}/>
            <OneCategory props={{linkAddress:"/", linkText:"Cardio Care", paragraph:"Sociosqu non nostra aliquet ante fusce mattis eleifend cursus.", icon:<FaCaretRight/>, classes:""}}/>
        </div>
    )
}
