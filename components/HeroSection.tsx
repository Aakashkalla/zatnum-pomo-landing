import Image from "next/image"
import Button from "./ui/Button"

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center mx-auto max-w-6xl px-4 py-24 gap-8">
            <h1 className="text-primary text-5xl md:text-6xl lg:text-6xl font-montserrat font-semibold leading-tight w-full whitespace-nowrap">
                Focus Deep. Break Smart. Repeat.
            </h1>

            <p className="font-light text-secondary text-lg md:text-xl max-w-4xl">
                A beautifully simple Pomodoro timer designed to help you enter flow and stay there. Absolute focus through reduction.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                <Button color="primary" href="home" text="Start Free" classname="px-6 py-2 font-semibold"></Button>
                <Button color="tertiary" href="home" text="View Demo" classname="px-6 py-2 font-semibold"></Button>
            </div>  

            <div className="mt-12 w-full flex justify-center">
                <Image src="/HeroImage.png" alt="Pomodoro Application Interface" width={900} height={600} className="rounded-xl shadow-2xl" priority></Image>
            </div>
        </section>
    )
}

export default HeroSection
