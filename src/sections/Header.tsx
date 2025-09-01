import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

import Anchor from "../components/anchor";
import overlay from "../../public/media/overlay.mp4";

const Header = () => {
    // Keep Track of Current Page
    const [currentPage, setCurrentPage] = useState<string>("home")
    const [showSticky, setShowSticky] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowSticky(!entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    useEffect(() => {
    // IDs must match your section anchors (#home, #about, #work, #contact)
    const sectionIds = ["home", "about", "work", "contact"];
    const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => !!el);

    // Tune rootMargin to account for sticky nav height and to favor the viewport center
    const observer = new IntersectionObserver(
        (entries) => {
        // Pick the entry with the largest intersection ratio
        const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
            setCurrentPage(visible.target.id);
        }
        },
        {
        // Negative top margin “pushes down” the observation zone to avoid the sticky bar
        root: null,
        rootMargin: "-80px 0px -55% 0px",
        threshold: [0.25, 0.5, 0.75], // update as the section becomes meaningfully visible
        }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
    }, []);

    return (
        <section id="home" className="mb-17">
            {/* Initial Header */}
            <header ref={headerRef} className="relative w-screen h-[calc(200vh/3)] object-cover">

                {/* Video Overlay */}
                <video autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute w-full h-full object-cover"
                >
                    <source src={overlay} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gray-600 opacity-50 z-0"/>

                <div className="md:hidden sticky top-0 z-30 backdrop-blur-sm pt-[env(safe-area-inset-top)]">
                    <div className="mx-auto px-4 py-2 flex flex-col items-center">
                        {/* Bottom: Links */}
                        <ul className="mt-2 flex flex-wrap items-center justify-center gap-6 text-sm text-white">
                        <li><Anchor href="#home" label="HOME" onClick={setCurrentPage} currentPage={currentPage} /></li>
                        <li><Anchor href="#work" label="WORK" onClick={setCurrentPage} currentPage={currentPage} /></li>
                        <li><Anchor href="#about" label="ABOUT" onClick={setCurrentPage} currentPage={currentPage} /></li>
                        <li><Anchor href="#contact" label="CONTACT" onClick={setCurrentPage} currentPage={currentPage} /></li>
                        </ul>
                    </div>
                </div>

                {/* Navigation Bar */}
                <nav className="hidden md:flex relative flex-col justify-center items-center gap-5 z-20 p-6">
                    {/* Left Side of Header */}
                    <ul className="flex flex-row gap-12">
                        <li><Anchor href="#home" label="HOME" onClick={setCurrentPage} currentPage={currentPage} /></li>
                        <li><Anchor href="#work" label="WORK" onClick={setCurrentPage} currentPage={currentPage} /></li>
                        <li><Anchor href="#about" label="ABOUT" onClick={setCurrentPage} currentPage={currentPage} /></li>
                        <li><Anchor href="#contact" label="CONTACT" onClick={setCurrentPage} currentPage={currentPage} /></li>
                    </ul>

                    {/* Logo Location */}
                    <div className="flex flex-row font-extrabold text-white text-6xl">
                        <div className="text-gray-300">RAI</div>
                        <div>MUNDO</div>
                    </div>
                </nav>

                {/* Reel Button */}
                <div className="absolute inset-0 flex flex-col text-white justify-center items-center gap-12 pt-16 z-10">
                    <div className="flex flex-row gap-6 text-lg md:text-2xl px-4 md:px-0 justify-center items-center">
                        CREATIVE AUDIO
                        <FaCircle className="size-1.5" />
                        SOUND DESIGN
                        <FaCircle className="size-1.5" />
                        AUDIO SYSTEMS
                    </div>
                    <button className="bg-transparent border-2 border-white px-14 py-6 rounded-sm text-xl tracking-widest
                                    hover:bg-white hover:text-black duration-100 ease-in-out cursor-pointer"
                            onClick={() => navigate("/reel")}
                    >
                        PLAY REEL
                    </button>
                </div>

            </header>

            {/* Sticky Header */}
            {showSticky && (
                <div className={`fixed top-0 left-0 w-full bg-black shadow-md z-50 transform transition-transform duration-500 ease-in-out
                                ${showSticky ? "translate-y-0" : "-translate-y-full"}`}>
                    <nav className="flex justify-center items-center px-8 py-4">
                        <ul className="flex gap-6 md:gap-16">
                            <li><Anchor href="#home" label="HOME" onClick={setCurrentPage} currentPage={currentPage} /></li>
                            <li><Anchor href="#work" label="WORK" onClick={setCurrentPage} currentPage={currentPage} /></li>
                            <li><Anchor href="#about" label="ABOUT" onClick={setCurrentPage} currentPage={currentPage} /></li>
                            <li><Anchor href="#contact" label="CONTACT" onClick={setCurrentPage} currentPage={currentPage} /></li>
                        </ul>
                    </nav>
                </div>
            )}            
        </section>
    )
}

export default Header