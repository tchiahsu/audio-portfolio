import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Anchor from "../components/anchor";
import video1 from "../assets/videos/video1.mp4";

const Reel = () => {
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  return (
    // Make the whole page fill the viewport and stack vertically
    <section id="Reel" className="min-h-dvh flex flex-col bg-[#FDFCF5] text-black">
      {/* Header */}
      <header className="relative flex w-full bg-black justify-between">
        <div className="hidden md:flex items-center font-extrabold text-white px-12 text-[clamp(1.5rem,5vw,3rem)]">
          <span className="text-gray-300">RAI</span>
          <span>MUNDO</span>
        </div>
        <nav className="flex z-20 py-6 px-12">
          <ul className="flex gap-12">
            <li><Anchor href="/#home" label="HOME" onClick={setCurrentPage} currentPage={currentPage} /></li>
            <li><Anchor href="/#work" label="WORK" onClick={setCurrentPage} currentPage={currentPage} /></li>
            <li><Anchor href="/#about" label="ABOUT" onClick={setCurrentPage} currentPage={currentPage} /></li>
            <li><Anchor href="/#contact" label="CONTACT" onClick={setCurrentPage} currentPage={currentPage} /></li>
          </ul>
        </nav>
      </header>

      {/* Main grows to take remaining space */}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          {/* Title */}
          <h1 className="text-center text-3xl md:text-5xl font-extrabold tracking-wide my-12 md:mt-20">
            SOUND SHOWREELS
          </h1>

          {/* Thin separator */}
          <div className="mx-auto mt-8 mb-10 h-px w-full max-w-5xl bg-gray-300" />

          {/* Videos grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 place-items-center">
            <div className="w-full max-w-[720px]">
              <div className="aspect-video w-full overflow-hidden rounded-md bg-black shadow-sm">
                <video src={video1} controls className="h-full w-full object-cover" />
              </div>
              <p className="mt-2 text-center text-sm tracking-wide">CINEMATIC REEL</p>
            </div>

            <div className="w-full max-w-[720px]">
              <div className="aspect-video w-full overflow-hidden rounded-md bg-black shadow-sm">
                <video src={video1} controls className="h-full w-full object-cover" />
              </div>
              <p className="mt-2 text-center text-sm tracking-wide">GAMEPLAY REEL</p>
            </div>
          </div>

          {/* Message + CTA */}
          <p className="text-center text-sm md:text-base text-gray-700 mt-16">
            Thanks for listening, and feel free to get in touch!
          </p>
          <div className="flex justify-center mt-6">
            <HashLink
              to="/#contact"
              smooth
              className="inline-block border border-black px-6 py-3 text-sm rounded-sm tracking-wider hover:bg-black hover:text-white transition"
            >
              CONTACT ME
            </HashLink>
          </div>

          <div className="mx-auto mt-8 mb-10 h-px w-full max-w-5xl bg-gray-300" />

          <div className="flex justify-center mb-16">
            <HashLink
              to="/#work"
              smooth
              className="inline-block border border-black px-6 py-3 text-sm rounded-sm tracking-wider hover:bg-black hover:text-white transition"
            >
              SEE MORE WORK
            </HashLink>
          </div>
        </div>
      </main>

      {/* Footer gets pushed to bottom by mt-auto */}
      <footer className="mt-auto w-screen bg-black text-white border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-extrabold text-lg tracking-wide">
            <span className="text-gray-300">RAI</span>MUNDO
          </div>
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} Tokyo, Japan
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Reel;