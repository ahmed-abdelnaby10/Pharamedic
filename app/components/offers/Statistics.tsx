export default function Statistics() {
    return (
        <ul className="bg-white rounded-xl absolute shadow-3xl left-1/2 -translate-x-1/2 grid grid-cols-grid4 large:grid-cols-grid2 meduim:grid-cols-grid2 small:grid-cols-grid2sm moreThanLarge:divide-x divide-solid divide-eee z-30 px-3 py-6 small:py-3 small:px-0.5 moreThanLarge:-bottom-16 large:-bottom-32 meduim:-bottom-28 small:-bottom-28">
            <li className="flex flex-col items-center text-center justify-between gap-3 small:gap-1 border-solid border-eee smallerThanLarge:border-r smallerThanLarge:border-b large:pb-4 meduim:pb-4 small:pb-2 large:pr-4 meduim:pr-4 small:pr-0">
                <span className="block text-5xl font-bold text-hover-color meduim:text-3xl small:text-xl">123+</span>
                <span className="block text-lg meduim:text-base small:text-xs">Professional Staff</span>
            </li>
            <li className="flex flex-col items-center text-center justify-between gap-3 small:gap-1 border-solid border-eee smallerThanLarge:border-b large:pb-4 meduim:pb-4 small:pb-2 large:pl-4 meduim:pl-4 small:pl-0">
                <span className="block text-5xl font-bold text-hover-color meduim:text-3xl small:text-xl">587+</span>
                <span className="block text-lg meduim:text-base small:text-xs">Kind Of Madicine</span>
            </li>
            <li className="flex flex-col items-center text-center justify-between gap-3 small:gap-1 border-solid border-eee smallerThanLarge:border-r large:pt-4 meduim:pt-4 small:pt-2 large:pr-4 meduim:pr-4 small:pr-0">
                <span className="block text-5xl font-bold text-hover-color meduim:text-3xl small:text-xl">40+</span>
                <span className="block text-lg meduim:text-base small:text-xs">Doctor Specialist</span>
            </li>
            <li className="flex flex-col items-center text-center justify-between gap-3 small:gap-1 large:pt-4 meduim:pt-4 small:pt-2 large:pl-4 meduim:pl-4 small:pl-0">
                <span className="block text-5xl font-bold text-hover-color meduim:text-3xl small:text-xl">269+</span>
                <span className="block text-lg meduim:text-base small:text-xs">Active Member</span>
            </li>
        </ul>
    )
}
