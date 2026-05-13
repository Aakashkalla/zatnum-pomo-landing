"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Workflow", href: "#workflow" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "About", href: "#about" },
];

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";

        return () => {
        document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-10">
            {/* Logo */}
            <Link
                href="/"
                className="z-70 text-xl font-semibold tracking-tight text-white md:text-2xl"
            >
                PomoPivot
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
                {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-neutral-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                >
                    {link.label}
                </Link>
                ))}
            </div>

            {/* Desktop CTA + Mobile Toggle */}
            <div className="z-70 flex items-center gap-4">
                <Button
                color="primary"
                href="#"
                text="Start Focusing"
                classname="hidden md:block px-6 py-2.5 text-sm font-semibold"
                />

                <button
                type="button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsOpen((prev) => !prev)}
                className="rounded-md p-2 text-white transition-colors hover:bg-white/10 md:hidden"
                >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>
            </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
            id="mobile-menu"
            className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
            isOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
        >
            <div className="flex h-full flex-col items-center justify-center gap-8 px-6">
            {navLinks.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-2xl font-medium text-neutral-300 transition-colors hover:text-white"
                >
                {link.label}
                </Link>
            ))}

            <Button
                color="primary"
                href="#"
                text="Start Focusing"
                classname="mt-4 w-full max-w-xs px-8 py-4 text-center font-semibold"
            />
            </div>
        </div>
        </>
    );
};

export default NavBar;