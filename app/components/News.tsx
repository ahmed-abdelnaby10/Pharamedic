'use client'

export default function News() {
    return (
        <div id="news" className="relative flex items-center justify-between bg-pharma-shop bg-center-center bg-cover bg-no-repeat before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-hover-color/70 py-10 px-32 gap-5 smallerThanLarge:flex-col smallerThanLarge:text-center large:px-12 meduim:px-5 small:px-2.5">
            <div className="flex flex-col items-start justify-center gap-5 z-20 smallerThanLarge:items-center">
                <h1 className="text-white text-4xl font-bold">Sign Up For Latest News</h1>
                <p className="text-white font-semibold text-lg">Join 60,000+ Subscribers and get a new discount coupon every saturday</p>
            </div>
            <form className="flex items-center justify-between bg-white p-0.5 xxxlarge:h-12 large:h-12 meduim:h-12 xxxlarge:w-2/5 rounded-lg z-20 large:w-5/6 meduim:w-full small:w-full small:flex-col small:gap-2.5 small:bg-transparent" onSubmit={(e)=>e.preventDefault()}>
                <input type="text" placeholder="Enter Your E-mail" className="h-full border-none focus:outline-none bg-white placeholder:text-sm placeholder:text-txt-color p-2.5 caret-txt-color small:w-full small:h-12 small:rounded-lg" />
                <input type="submit" value="Sign Up" className="w-fit h-full rounded-lg px-5 bg-btn-color text-lg font-semibold hover:bg-bg-color hover:text-white duration-300 cursor-pointer small:h-12 small:w-full xlarge:py-2" />
            </form>
        </div>
    )
}
