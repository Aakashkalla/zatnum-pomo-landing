type TestimonialsDataType = {
    quote  : string
    role   : string
    name   : string
}
const TestimonialsDataArray : TestimonialsDataType[] = [
    {
        quote : "Finally, a timer that doesn't feel like a toy. It's an instrument for deep work",
        name : "Alex Chen",
        role : "Lead Developer"
    },{
        quote : "The reduction of features is the best feature. I enter flow almost instantly now.",
        name : "Sarah Miller",
        role : "Digital Artist"
    },{
        quote : "Precision meets aesthetics. It fits perfectly into my minimalist workspace setup.",
        name : "James K",
        role : "Designer"
    },{
        quote : "This app changed my daily routine. I get more done in 4 hours than I used to in 8.",
        name : "Emily R.",
        role : "Freelance Writer"
    },{
        quote : "A beautiful, distraction-free environment. Pomo is the only productivity tool I leave open.",
        name : "David L.",
        role : "Product Manager"
    },{
        quote : "My team adopted this for our focus sprints and the results have been incredible.",
        name : "Sophia T.",
        role : "Startup Founder"
    }
]


const TestimonialsSection = () => {
    const duplicatedTestimonials = [...TestimonialsDataArray, ...TestimonialsDataArray];

    return (
        <section id="testimonials" className="mt-40 py-20 overflow-hidden relative w-full border-y border-neutral-200 dark:border-neutral-800">
            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                        display: flex;
                        width: max-content;
                    }
                `}
            </style>
            
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none"></div>

            <div className="animate-scroll gap-6 px-4">
                {duplicatedTestimonials.map((testimonial, i)=>(
                    <div 
                        key={i} 
                        className="flex flex-col justify-between w-87.5 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm shrink-0 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 hover:shadow-lg dark:hover:shadow-white/5 cursor-default group"
                    >
                        <h2 className="text-lg text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed mb-8 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                            "{testimonial.quote}"
                        </h2>
                        
                        <div className="flex items-center gap-4 mt-auto">
                            <div className="w-12 h-12 rounded-full bg-neutral-900 dark:bg-neutral-700 shrink-0 flex items-center justify-center text-white/50 group-hover:scale-105 transition-transform duration-300">
                                {/* Simple avatar placeholder */}
                            </div>

                            <div className="flex flex-col">
                                <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">
                                    {testimonial.name}
                                </h3>
                                <h4 className="text-neutral-500 dark:text-neutral-400 text-xs">
                                    {testimonial.role}
                                </h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TestimonialsSection
