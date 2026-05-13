import Button from "./ui/Button"


const CTASection = () => {
    return (
        <section className="text-center flex flex-col gap-6 md:gap-10 font-montserrat px-4 py-16 md:py-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Ready to reclaim your focus?</h1>
            <p className="font-light font-inter text-sm sm:text-base md:text-md max-w-2xl mx-auto">
                Join 10,000+ high-achievers using PomoPivot daily.
            </p>

            <div className="flex justify-center">
                <Button color="primary" href="" text="Start Focusing" classname="px-8 sm:px-10 py-3 sm:py-4 font-bold w-full sm:w-auto"></Button>
            </div>
        </section>
    )
}

export default CTASection
