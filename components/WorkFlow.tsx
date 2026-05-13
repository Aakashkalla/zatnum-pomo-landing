type WorkflowStageProps = {
    number : number
    heading : string
    description : string
}

const WorkFlowStageCard = ({number, heading, description} : WorkflowStageProps) => {
    return(
        <div className="flex flex-col items-center text-center group max-w-sm md:max-w-[220px] hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 flex items-center justify-center border-2 rounded-full border-neutral-600 group-hover:border-primary group-hover:scale-110 group-hover:bg-white/5 transition-all duration-300 text-2xl font-bold mb-4 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        {number}
                    </div>
                    <h3 className="text-xl mb-2 group-hover:text-white transition-colors">{heading}</h3>
                    <p className="text-sm font-inter text-secondary font-light group-hover:text-neutral-300 transition-colors">{description}</p>
        </div>
    )
}

const WorkFlow = () => {
    return (
        <section id="workflow" className="bg-neutral-900 text-primary font-montserrat font-semibold pt-20 mt-20 relative overflow-hidden">
            <h1 className="font-bold text-center text-3xl md:text-4xl hover:scale-105 transition-transform duration-500">The Workflow</h1>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center pt-16 pb-20 gap-12 md:gap-8 lg:gap-12 px-4 max-w-6xl mx-auto">
                <WorkFlowStageCard number={1} heading="Add task" description="Define what requires your absolute focus." />
                
                {/* Visual Connector for Desktop */}
                <div className="hidden md:block w-16 lg:w-24 h-0.5 bg-neutral-700 mt-8 group-hover:bg-primary transition-colors" />

                <WorkFlowStageCard number={2} heading="Start session" description="The clock starts. Noise fades. Deep work begins." />
                
                <div className="hidden md:block w-16 lg:w-24 h-0.5 bg-neutral-700 mt-8 group-hover:bg-primary transition-colors" />

                <WorkFlowStageCard number={3} heading="Take breaks" description="Disconnect completely. Recharge your mental fuel." />
                
                <div className="hidden md:block w-16 lg:w-24 h-0.5 bg-neutral-700 mt-8 group-hover:bg-primary transition-colors" />

                <WorkFlowStageCard number={4} heading="Repeat" description="Stack your sessions for legendary productivity." />
            </div>
        </section>
    )
}

export default WorkFlow
