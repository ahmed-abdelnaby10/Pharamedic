import Link from 'next/link'
import React, { CSSProperties, HTMLAttributes } from 'react'

type Props = {
    props : {
        classes: string,
        icon: React.ReactNode,
        paragraph: string,
        linkText: string,
        linkAddress: string
    }
}

export default function OneCategory({ props: { classes, icon, paragraph, linkText, linkAddress} }: Props) {
    return (
        <div className={`${classes} flex justify-between items-center large:basis-5/10 grow self-start h-full`}>
            <div className="self-start">
                <Link href={linkAddress} className="text-bg-color hover:text-hover-color text-xl font-semibold duration-300">{linkText}</Link>
                <p className="text-txt-color text-sm mt-2">{paragraph}</p>
            </div>
            <div className="text-bg-color text-3xl self-center">
                <Link href={linkAddress}>
                    {icon}
                </Link>
            </div>
        </div>
    )
}
