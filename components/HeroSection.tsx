import Image from "next/image"
import Button from "./ui/Button"

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-24 gap-8">
            <h1 className="animate-fade-in-up text-primary text-3xl sm:text-4xl md:text-6xl font-montserrat font-semibold leading-tight w-full hover:scale-105 transition-transform duration-500">
                Focus Deep. Break Smart. Repeat.
            </h1>

            <p className="animate-fade-in-up-delay-1 font-light text-secondary text-base sm:text-lg md:text-xl max-w-4xl hover:text-white transition-colors duration-300">
                A beautifully simple Pomodoro timer designed to help you enter flow and stay there. Absolute focus through reduction.
            </p>

            <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row  items-center justify-center gap-8 mt-4 w-full sm:w-auto ">
                <Button color="primary" href="home" text="Start Free" classname="px-6 py-3 md:py-2 font-semibold w-full sm:w-auto hover:bg-neutral-200 transition-colors duration-300"></Button>
                <Button color="tertiary" href="home" text="View Demo" classname="px-6 py-3 md:py-2 font-semibold w-full sm:w-auto hover:bg-neutral-800 transition-colors duration-300"></Button>
            </div>  

            <div className="animate-fade-in-up-delay-2 mt-10 md:mt-12 w-full flex justify-center group perspective">
                <Image 
                    src="/HeroImage.png" 
                    alt="Pomodoro Application Interface" 
                    width={900} 
                    height={600} 
                    className="rounded-xl shadow-2xl transition-all duration-700 hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:-translate-y-2 hover:scale-[1.02] max-w-full h-auto" 
                    priority
                />
            </div>
        </section>
    )
}

export default HeroSection
