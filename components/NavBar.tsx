import Link from "next/link"
import Button from "./ui/Button"

const NavBar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-neutral-900/70 backdrop-blur-md text-neutral-600 w-full font-inter p-4 px-10">
            <div className="flex items-center justify-between">
                {/* Heading */}
                <h1 className="text-2xl text-primary font-montserrat font-semibold">PomoPivot</h1>

                <div>
                    <div className="flex items-center gap-6">
                        <Link href='#features' className="hover:text-primary transition-colors duration-300">Features</Link>
                        <Link href='#workflow' className="hover:text-primary transition-colors duration-300">Workflow</Link>
                        <Link href='#testimonials' className="hover:text-primary transition-colors duration-300">Testimonials</Link>
                        <Link href='#about' className="hover:text-primary transition-colors duration-300">About</Link>
                    </div>
                </div>

                {/* CTA */}
                <Button color="primary" href="" text="Start Focusing" classname="px-8 py-2 font-semibold"></Button>
            </div>
        </nav>
    )
}

export default NavBar
