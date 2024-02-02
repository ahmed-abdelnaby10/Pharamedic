'use client'

type Props = {
    props: {
        header: string,
        paragraph: string,
        labelOne: string,
        labelTwo: string,
        labelThree: string,
        labelFour: string,
        labelFive: string,
        buttonName: string
    }
}

export default function FormData({props:{header, paragraph, labelOne, labelTwo, labelThree, labelFour, labelFive, buttonName}}: Props) {
    return (
        <div className="bg-white p-10 small:py-5 small:px-2.5 shadow-3xl rounded-xl flex flex-col items-start gap-7 small:gap-3.5 h-fit z-50 self-center large:self-center meduim:ml-0 small:mx-1 large:w-3/4 meduim:w-3/4">
            <h1 className="text-3xl small:text-2xl font-bold small:text-center">{header}</h1>
            <p className="text-base small:text-sm text-txt-color small:text-center">{paragraph}</p>
            <form className="flex flex-col items-start justify-between gap-2.5 w-full" onSubmit={(e)=>e.preventDefault()}>
                <div className="flex gap-5 small:gap-2.5 items-center justify-between grow smallerThanLarge:flex-wrap w-full">
                    <div className="relative large:w-5/12 meduim:w-2/5 small:w-full">
                        <label htmlFor="fname" className="block">{labelOne}</label>
                        <input type="text" id="fname" name="fname" placeholder={`Your ${labelOne}`} className="block rounded-lg bg-eee focus:outline-none border-2 border-solid border-eee focus:bg-white duration-300 placeholder:text-txt-color placeholder:text-sm px-3 py-2 w-full" required/>
                    </div>
                    <div className="large:w-5/12 meduim:w-2/5 small:w-full">
                        <label htmlFor="lname" className="block">{labelTwo}</label>
                        <input type="text" id="lname" name="lname" placeholder={`Your ${labelTwo}`}className="block rounded-lg bg-eee 
                        focus:outline-none border-2 border-solid border-eee focus:bg-white duration-300 placeholder:text-txt-color placeholder:text-sm px-3 py-2 w-full" required/>
                    </div>
                </div>
                <div className="flex gap-5 small:gap-2.5 items-center justify-between smallerThanLarge:flex-wrap w-full">
                    <div className="large:w-5/12 meduim:w-2/5 small:w-full">
                        <label htmlFor="phone" className="block">{labelThree}</label>
                        <input type="text" id="phone" name="phone" placeholder={`Your ${labelThree}`} className="block rounded-lg bg-eee focus:outline-none border-2 border-solid border-eee focus:bg-white duration-300 placeholder:text-txt-color placeholder:text-sm px-3 py-2 w-full" required/>
                    </div>
                    <div className="large:w-5/12 meduim:w-2/5 small:w-full">
                        <label htmlFor="email" className="block">{labelFour}</label>
                        <input type="email" id="email" name="email" placeholder={`Your ${labelFour}`} className="block rounded-lg bg-eee 
                        focus:outline-none border-2 border-solid border-eee focus:bg-white duration-300 placeholder:text-txt-color placeholder:text-sm px-3 py-2 w-full" required/>
                    </div>
                </div>
                <div className="w-full h-44">
                    <label htmlFor="address" className="block">{labelFive}</label>
                    <textarea name="address" id="address" placeholder={`Your ${labelFive}`} className="w-full h-5/6 block rounded-lg bg-eee
                    focus:outline-none border-2 resize-none border-solid border-eee focus:bg-white duration-300 placeholder:text-txt-color placeholder:text-sm px-3 py-2" required></textarea>
                </div>
                <input type="submit" value={buttonName} className="w-full h-fit bg-hover-color py-3 rounded-lg cursor-pointer text-white text-lg font-semibold hover:bg-bg-color duration-300" />
            </form>
        </div>
    )
}
