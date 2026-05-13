type WorkflowStageProps = {
    number : number
    heading : string
    description : string
}

const WorkFlowStageCard = ({number, heading, description} : WorkflowStageProps) => {
    return(
        <div className="flex flex-col items-center text-center group max-w-55">
                    <div className="w-16 h-16 flex items-center justify-center border-2 rounded-full border-neutral-600 group-hover:border-primary transition-colors text-2xl font-bold mb-4">
                        {number}
                    </div>
                    <h3 className="text-xl mb-2">{heading}</h3>
                    <p className="text-sm font-inter text-secondary font-light">{description}</p>
        </div>
    )
}

const WorkFlow = () => {
    return (
        <section id="workflow" className="bg-neutral-900 text-primary font-montserrat font-semibold pt-20 mt-20">
            <h1 className="font-bold text-center text-4xl">The Workflow</h1>

            <div className="flex flex-col md:flex-row items-start justify-center pt-16 pb-20 gap-12 px-4">
                <WorkFlowStageCard number={1} heading="Add task" description="Define what requires your absolute focus." />
                <WorkFlowStageCard number={2} heading="Start session" description="The clock starts. Noise fades. Deep work begins." />
                <WorkFlowStageCard number={3} heading="Take breaks" description="Disconnect completely. Recharge your mental fuel." />
                <WorkFlowStageCard number={4} heading="Repeat" description="Stack your sessions for legendary productivity." />
            </div>
        </section>
    )
}

export default WorkFlow
