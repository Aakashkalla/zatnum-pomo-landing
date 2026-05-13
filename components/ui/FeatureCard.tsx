
type FeatureCardProps = {
    icon : React.ReactNode
    heading : string
    description : string
}

const FeatureCard = ({icon, heading, description} : FeatureCardProps) => {
    return (
        <div className="bg-neutral-900 overflow-hidden relative group p-6 rounded-xl flex flex-col gap-4 text-primary hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5 duration-300 transition-all cursor-default">
            {/* Subtle highlight gradient on hover */}
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="text-primary group-hover:scale-110 duration-300 transition-transform">{icon}</div>
            <h2 className="text-xl font-montserrat font-semibold z-10">{heading}</h2>
            <p className="text-secondary font-inter font-light z-10">{description}</p>
        </div>
    )
}

export default FeatureCard
