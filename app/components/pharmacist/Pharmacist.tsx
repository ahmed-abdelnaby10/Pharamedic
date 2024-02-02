import pharmacist1 from "@/public/doctor1.jpg";
import pharmacist2 from "@/public/doctor2.jpg";
import pharmacist3 from "@/public/doctor3.jpg";
import IdentifyCard from "./IdentifyCard";

export default function Pharmacist() {
    return (
        <div id="pharmacist" className="relative bg-plus bg-30 bg-center-center before:content-[''] before:bg-overlay2 before:bg-transparent before:absolute before:left-0 before:top-0 before:w-full before:h-full mt-20 small:mt-8 flex items-center justify-between px-5 pt-5 pb-28 gap-5 smallerThanLarge:flex-col meduim:pb-16 small:pb-10">
            <div className="relative flex flex-col items-start justify-start gap-5 z-30 smallerThanLarge:mb-5 moreThanLarge:pr-10 smallerThanLarge:text-center smallerThanLarge:items-center before:absolute before:-bottom-5 before:left-1/2 before:-translate-x-1/2 before:h-0.5 before:w-20 before:content-[''] smallerThanLarge:before:bg-btn-color">
                <p className="uppercase text-hover-color text-sm">meet our pharmacists</p>
                <h1 className="text-4xl font-bold smallerThanLarge:text-3xl">Your Partner in Health and Healing</h1>
                <p className="text-txt-color text-base smallerThanLarge:text-sm">Natoque fusce et orci molestie condimentum montes cras ex mauris finibus in. Odio iaculis sed nec maecenas lobortis arcu.</p>
            </div>
            {/* ------------------------------------------------------------------------- */}
            <div className="flex justify-between items-center gap-5 meduim:flex-col small:flex-col meduim:gap-10 small:gap-10">
                <IdentifyCard props={{sourc:pharmacist1, name:"Vivienne Lewis", job:"Founder", facebook:"/", twitter:"/", linkedin:"/", instagram:"/"}} />
                <IdentifyCard props={{sourc:pharmacist2, name:"William Painter", job:"Head Office Manager", facebook:"/", twitter:"/", linkedin:"/", instagram:"/"}} />
                <IdentifyCard props={{sourc:pharmacist3, name:"Sarah Barnes", job:"Warehouse Manager", facebook:"/", twitter:"/", linkedin:"/", instagram:"/"}} />
            </div>
        </div>
    )
}
