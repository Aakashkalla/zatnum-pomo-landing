import FeatureCard from './ui/FeatureCard'
import ClockIcon from './ui/icons/ClockIcon'
import ListIcon from './ui/icons/ListIcon'
import SliderVerticalIcon from './ui/icons/SliderVerticalIcon'
import WavesIcon from './ui/icons/WavesIcon'
import ChartIcon from './ui/icons/ChartIcon'
import KeyboardIcon from './ui/icons/KeyboardIcon'

const FeatureSection = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-between h-auto bg-neutral-900 p-6 md:px-12 font-montserrat font-semibold gap-6 md:gap-0 animate-fade-in-up'>
                <div className='text-primary font-inter text-xs md:text-sm text-center md:text-left'>
                    TRUSTED BY STUDENTS, DEVELOPERS, AND CREATORS.
                </div>

                <div className='flex items-center gap-8 md:gap-12'>
                    <div className='flex flex-col gap-1 items-center md:items-start group'>
                        <h2 className='text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300'>10000+</h2>
                        <p className='text-xs md:text-sm font-light text-secondary'>Focus Sessions</p>
                    </div>

                    <div className='flex flex-col gap-1 items-center md:items-start group'>
                        <h2 className='text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300'>4.9/5</h2>
                        <p className='text-xs md:text-sm font-light text-secondary'>User Rating</p>
                    </div>
                </div>
            </div>
            <section id="features" className="max-w-6xl mx-auto px-4 py-16 md:py-24 mt-10 md:mt-20">
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <FeatureCard 
                    icon={<ClockIcon/>}
                    description='Zero distraction environment. Only the time and your task, rendered in high-contrast elegance.'
                    heading='Minimal Interface'
                    />

                    <FeatureCard 
                    icon={<ListIcon/>}
                    description='Queue your deep work tasks. One focus at a time, keeping your mental stack light and clear.'
                    heading='Task Tracking'
                    />

                    <FeatureCard 
                    icon={<SliderVerticalIcon/>}
                    description='Adapt the rhythm to your bio-clock. Customize work blocks and rest intervals to your needs.'
                    heading='Custom Durations'
                    />

                    <FeatureCard 
                    icon={<WavesIcon/>}
                    description='Curated soundscapes from rain to white noise to drown out external interference.'
                    heading='Ambient Sounds'
                    />

                    <FeatureCard 
                    icon={<ChartIcon/>}
                    description='Beautiful visualizations of your daily flow state. Identify patterns of peak performance.'
                    heading='Session Analytics'
                    />

                    <FeatureCard 
                    icon={<KeyboardIcon/>}
                    description='Stay in the zone. Control your entire session without ever touching your mouse.'
                    heading='Keyboard Shortcuts'
                    />
                </div>
            </section>
        </>
        
    )
}

export default FeatureSection
