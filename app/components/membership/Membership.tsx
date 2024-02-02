import { FaCheck, FaClock, FaPhone } from "react-icons/fa";
import FormData from "./Form";

export default function Membership(){
    return(
        <div id="membership" className="flex flex-row-reverse justify-center pl-16 smallerThanLarge:flex-col smallerThanLarge:p-0">
            <div className="bg-land-3 bg-center-center bg-cover flex flex-col gap-10 small:gap-5 items-start relative before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-hover-color/80 before:z-10 py-20 pl-64 pr-5 -ml-52 smallerThanLarge:pb-24 small:py-5 small:px-2.5 small:ml-0 smallerThanLarge:-mb-14 extralarge:w-full">
                <p className="text-white uppercase text-base z-20 small:self-center small:text-center">become a member</p>
                <h1 className="text-4xl text-white z-20 small:text-2xl small:self-center small:text-center">We assure customer satisfaction with personal care</h1>
                <p className="text-f6 text-sm z-20 small:self-center small:text-center">Enim scelerisque ut in vestibulum elit ridiculus laoreet torquent. Sodales euismod porta finibus phasellus justo inceptos nisi erat.</p>
                <h2 className="text-2xl text-white z-20 small:text-xl">Benefits of our membership program:</h2>
                <ul className="list-none flex flex-col items-start justify-between gap-3 z-20">
                    <li className="flex items-center justify-start gap-2">
                        <div className="text-base text-btn-color"><FaCheck/></div>
                        <p className="text-f6 text-sm">Suscipit sagittis enim inceptos non feugiat rhoncus</p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                        <div className="text-base text-btn-color"><FaCheck/></div>
                        <p className="text-f6 text-sm">Suscipit sagittis enim inceptos non feugiat rhoncus</p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                        <div className="text-base text-btn-color"><FaCheck/></div>
                        <p className="text-f6 text-sm">Suscipit sagittis enim inceptos non feugiat rhoncus</p>
                    </li>
                    <li className="flex items-center justify-start gap-2">
                        <div className="text-base text-btn-color"><FaCheck/></div>
                        <p className="text-f6 text-sm">Suscipit sagittis enim inceptos non feugiat rhoncus</p>
                    </li>
                </ul>
                <div className="flex justify-between items-center gap-5 small:gap-2.5 pt-5 border-solid border-eee border-t z-20 small:self-start small:flex-col">
                    <div className="flex items-center justify-between gap-5 small:gap-2.5 small:justify-start bg-white rounded-lg p-4 small:p-1.5 small:w-full">
                        <div className="h-16 w-16 rounded-lg bg-hover-color text-white text-4xl hover:rotate-12 hover:scale-125 duration-300 flex justify-center items-center"><FaPhone/></div>
                        <div className="flex flex-col items-start gap-2">
                            <p className="text-hover-color text-lg">Contact Us</p>
                            <p className="font-semibold text-xl">(555) 987-6543</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-5 small:gap-2.5 small:justify-start bg-white rounded-lg p-4 small:p-1.5 small:w-full">
                        <div className="h-16 w-16 rounded-lg bg-hover-color text-white text-4xl hover:rotate-12 hover:scale-125 duration-300 flex justify-center items-center"><FaClock/></div>
                        <div className="flex flex-col items-start gap-2">
                            <p className="text-hover-color text-lg">Office Hours</p>
                            <p className="font-semibold text-xl">8.00am - 9.00pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <FormData props={{header:"Complete the form below :", paragraph:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime Lorem ipsum dolor sit amet.", labelOne:"First Name", labelTwo:"Last Name", labelThree:"Phone", labelFour:"E-mail", labelFive:"Address", buttonName:"Confirm"}} />
        </div>
    )
}