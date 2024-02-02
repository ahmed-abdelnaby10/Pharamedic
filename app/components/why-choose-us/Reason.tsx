import { FaCheck } from "react-icons/fa";

type Props = {
    props: {
        header:string,
        paragraph:string
    }
}

export default function Reason({props: {header, paragraph}}: Props) {
    return (
        <li className="flex justify-between items-start py-5 gap-5 small:gap-3 small:py-3">
            <div className="text-white bg-hover-color text-4xl px-3.5 h-16 flex justify-center items-center rounded-lg hover:rotate-12 hover:scale-125 duration-300 small:text-xl small:px-2 small:h-9"><FaCheck/></div>
            <div>
                <h1 className="text-xl font-bold mb-5 small:text-lg small:mb-1">{header}</h1>
                <p className="text-txt-color text-sm">{paragraph}</p>
            </div>
        </li>
    )
}