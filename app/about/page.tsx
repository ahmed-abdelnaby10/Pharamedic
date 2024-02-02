import AboutUs from "../components/aboutUS/AboutUs";

export default function About() {
    return (
        <>
            <div className="flex items-center justify-start pl-10 py-32 small:py-20 overlay">
                <div className="land"></div>
                <h1 className="text-white text-5xl z-40 font-bold small:text-3xl">About Pharamedic</h1>
            </div>
            <AboutUs />
            <div className="bg-overlay4 flex items-center justify-between rounded-xl mx-5 px-5 py-10 smallerThanLarge:py-5 smallerThanLarge:flex-col small:px-1 small:mx-1.5 small:-mt-4">
                <div className="flex flex-col items-start justify-start gap-5 basis-2/5 mr-5 smallerThanLarge:items-center smallerThanLarge:text-center smallerThanLarge:pb-5 small:m-0 small:gap-2.5">
                    <h1 className="text-4xl font-bold small:text-2xl">Your Health, Our Commitment</h1>
                    <p className="text-txt-color text-sm leading-6 pr-12 small:p-0">Consectetuer luctus ultricies cras cursus mi. Tempus dui cursus sollicitudin metus porta luctus.</p>
                </div>
                <div className="flex items start justify-center gap-5 basis-3/5 small:flex-col">
                    <div className="flex flex-col items-center justify-start bg-white rounded-lg shadow-3xl overflow-hidden">
                        <h2 className="text-white font-bold text-xl w-full h-fit text-center py-5 bg-hover-color">Vision</h2>
                        <p className="text-start p-5 text-sm text-txt-color leading-6">Fermentum lacinia dictumst a sed mattis tortor habitasse posuere convallis. Donec posuere sed sodales finibus orci fames urna elit mus class ultricies.</p>
                    </div>
                    <div className="flex flex-col items-center justify-start bg-white rounded-lg shadow-3xl overflow-hidden">
                        <h2 className="text-white font-bold text-xl w-full h-fit text-center py-5 bg-hover-color">Mision</h2>
                        <p className="text-start p-5 text-sm text-txt-color leading-6">Fermentum lacinia dictumst a sed mattis tortor habitasse posuere convallis. Donec posuere sed sodales finibus orci fames urna elit mus class ultricies.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
