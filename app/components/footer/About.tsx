import { FaCalendarAlt } from "react-icons/fa";

export default function About() {
    return (
        <div className="flex flex-col justify-between gap-5 basis-1/4 grow smallerThanLarge:items-center smallerThanLarge:text-center 
        large:w-3/5 meduim:w-3/5 small:w-full">
            <h2 className="text-lg font-semibold">About Pharamedic</h2>
            <p className="text-sm text-txt-color">Sagittis ligula fermentum et orci suscipit class letius massa. Lorem ornare massa phasellus cubilia consectetur integer volutpat.</p>
            <div className="flex items-center justify-start gap-3 mt-2">
                <div className="text-bg-color text-4xl small:text-3xl"><FaCalendarAlt/></div>
                <div>
                    <p className="text-base font-medium">Monday-Saturday</p>
                    <p className="text-txt-color text-sm">08.00am - 09.00pm</p>
                </div>
            </div>
        </div>
    )
}
