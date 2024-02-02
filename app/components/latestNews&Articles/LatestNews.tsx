import article1 from "@/public/article1.jpg"
import article2 from "@/public/article2.jpg"
import article3 from "@/public/article3.jpg"
import article4 from "@/public/article4.jpg"
import Article from "./Article"
import Link from "next/link"

export default function LatestNews() {
    return (
        <div className="bg-ddd/40 extralarge:p-28 py-16 px-16 xlarge:px-5 large:px-8 meduim:px-4 small:px-1 small:py-8">
            <div className="flex items-center mb-10 small:mb-5 justify-center gap-5 small:flex-col">
                <h1 className="text-4xl font-bold meduim:text-3xl small:text-xl">Latest News & Articls</h1>
                <Link href="/" className="w-fit px-3 py-1.5 bg-transparent text-black rounded-lg border-2 border-solid border-hover-color hover:text-white hover:bg-hover-color duration-300 text-center font-semibold">All Articles</Link>
            </div>
            <div id="news" className="grid grid-cols-grid2 gap-5 smallerThanLarge:grid-cols-grid1">
                <Article props={{source:article1, head:"Pharmacy", paragraph:"Exploring the Pros and Cons of Online Pharmacy Services Today", author:"bobbie navarro", date:"October 15, 2023", abbreviation:"Lobortis garnished with ligula from the powerful earth is a good time to drink"}} />
                <Article props={{source:article2, head:"Medicine", paragraph:"How to Pick the Right Medication Cart for Your Post-Acute Facility", author:"erine kopper", date:"January 30, 2023", abbreviation:"Lobortis garnished with ligula from the powerful earth is a good time to drink"}} />
                <Article props={{source:article3, head:"Insight", paragraph:"The Role of Telemedicine in Revolutionizing Pharmacy Services", author:"raychel ray", date:"March 14, 2023", abbreviation:"Lobortis garnished with ligula from the powerful earth is a good time to drink"}} />
                <Article props={{source:article4, head:"Pharmacy", paragraph:"Is Your Retail Pharmacy Ready for Automation?", author:"emma watson", date:"November 02, 2023", abbreviation:"Lobortis garnished with ligula from the powerful earth is a good time to drink"}} />
            </div>
        </div>
    )
}
