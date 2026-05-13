import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-black text-neutral-400 py-16 px-8 md:px-16 border-t border-neutral-900 mt-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
                
                {/* Left Side: Brand & Copyright */}
                <div className="flex flex-col max-w-sm w-full md:w-auto">
                    <h2 className="text-white text-xl font-bold mb-4 tracking-tight font-montserrat">PomoPivot</h2>
                    <p className="text-sm leading-relaxed max-w-62.5 md:max-w-none">
                        © 2026 PomoPivot. Absolute focus<br className="hidden md:block" /> through reduction.
                    </p>
                </div>

                {/* Right Side: Link Columns */}
                <div className="grid grid-cols-2 md:flex md:flex-nowrap gap-y-10 gap-x-8 md:gap-24 w-full md:w-auto">
                    
                    {/* PRODUCT Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-1">Product</h3>
                        <Link href="#workflow" className="text-sm hover:text-white transition-colors duration-200">Workflow</Link>
                        <Link href="#pricing" className="text-sm hover:text-white transition-colors duration-200">Pricing</Link>
                    </div>
                    
                    {/* SUPPORT Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-1">Support</h3>
                        <Link href="#" className="text-sm hover:text-white transition-colors duration-200">Contact</Link>
                        <Link href="#" className="text-sm hover:text-white transition-colors duration-200">Privacy Policy</Link>
                    </div>
                    
                    {/* COMMUNITY Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-1">Community</h3>
                        <Link href="#" className="text-sm hover:text-white transition-colors duration-200">Twitter</Link>
                        <Link href="#" className="text-sm hover:text-white transition-colors duration-200">GitHub</Link>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer
