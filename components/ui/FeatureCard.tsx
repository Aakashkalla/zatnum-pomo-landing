
type FeatureCardProps = {
    icon : React.ReactNode
    heading : string
    description : string
}

const FeatureCard = ({icon, heading, description} : FeatureCardProps) => {
    return (
        <div className="bg-neutral-900  p-6 rounded-xl flex flex-col gap-4 text-primary hover:scale-98 duration-300  transitionn-transform">
            <div className="text-primary">{icon}</div>
            <h2 className="text-xl font-montserrat font-semibold">{heading}</h2>
            <p className="text-secondary font-inter font-light">{description}</p>
        </div>
    )
}

export default FeatureCard
