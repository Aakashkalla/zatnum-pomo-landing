import CTASection from "@/components/CTASection";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkFlow from "@/components/WorkFlow";

export default function Home() {
	return (
		<>
		<NavBar/>
		<HeroSection/>
		<FeatureSection/>
		<WorkFlow/>
		<TestimonialsSection/>
		<CTASection/>
		</>
	);
}
