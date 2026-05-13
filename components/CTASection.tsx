import Button from "./ui/Button"


const CTASection = () => {
    return (
        <section className="text-center  flex flex-col gap-10 font-montserrat p-30">
            <h1 className="text-5xl font-semibold">Ready to reclaim your focus?</h1>
            <p className="font-light font-inter text-md">Join 10,000+ high-achievers using PomoPivot daily.</p>

            <Button color="primary" href="" text="Start Focusing" classname="px-10 py-4 font-bold"></Button>
        </section>
    )
}

export default CTASection
