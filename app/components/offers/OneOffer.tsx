import Link from "next/link";

type Props = {
    props : {
        icon: React.ReactNode,
        title: string,
        paragraph: string,
        linkText: string,
        linkAddress: string
    }
}

export default function OneOffer({ props: { icon, title, paragraph, linkText, linkAddress} }: Props) { 
    return (
        <div className='relative shadow-3xl border-0 hover:border border-solid border-hover-color rounded-xl flex flex-col items-center justify-between duration-300 p-5 small:p-2'>
            <div className='absolute -top-6 left-1/2 -translate-x-1/2 text-white bg-hover-color text-4xl small:text-3xl w-16 h-16 small:w-14 small:h-14 flex justify-center items-center rounded-lg hover:rotate-12 hover:scale-125 duration-300'>{icon}</div>
            <h1 className="text-xl font-bold mt-10 mb-3">{title}</h1>
            <p className="text-txt-color text-sm mb-9 px-5 small:px-0">{paragraph}</p>
            <Link href={linkAddress} className="w-full h-fit py-2 bg-hover-color text-white rounded-lg hover:bg-bg-color duration-300">
                {linkText}
            </Link>
        </div>
    )
}
