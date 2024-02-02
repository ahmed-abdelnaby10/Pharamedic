import About from "./About";
import CopyRight from "./CopyRight";
import HelpCenter from "./HelpCenter";
import QuickLinks from "./QuickLinks";
import ReachUs from "./ReachUs";

export default function Footer() {
    return (
        <>
            <div className="flex items-start justify-center gap-20 smallerThanLarge:gap-10 py-20 small:py-8 extralarge:px-32 xxxlarge:px-20 xlarge:px-10 bg-f6 smallerThanLarge:flex-col smallerThanLarge:items-center small:px-2.5">
                <About />
                <div className="flex items-start justify-between gap-10 basis-5/6 large:gap-20 meduim:gap-8 small:flex-col small:items-center small:w-full">
                    <div className="flex items-start justify-center gap-10 large:gap-20 meduim:gap-8 grow small:justify-between small:gap-4 small:w-full">
                        <QuickLinks />
                        <HelpCenter />
                    </div>
                    <div className="small:self-start small:w-full">
                        <ReachUs />
                    </div>
                </div>
            </div>
            <CopyRight />
        </>
    )
}
