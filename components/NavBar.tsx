import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-neutral-900 text-neutral-600 w-full font-inter p-4 px-10">
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
                <Link href='/' className="px-10 py-2 rounded-lg text-tertiary font-semibold bg-primary font-montserrat hover:bg-neutral-200 transition-colors">Start Focusing</Link>
            </div>
        </nav>
    )
}

export default NavBar
