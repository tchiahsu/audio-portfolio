import { useEffect } from "react";
import { Link } from "react-router-dom";
import Tile from "../components/tile";
import { projects } from "../data/project";

const Work = () => {
  useEffect(() => {
    // dynamic import avoids SSR issues and keeps bundle lean
    import("fadin").then((mod) => {
      const fadin = (mod as any).default ?? (mod as any);
      // Fade in .fade elements in DOM order with a slight stagger
      fadin(".fade", { delay: 140 }); // adjust delay to taste
    });
  }, []);

  return (
    <section id="work" className="flex flex-col pt-16 px-7 justify-center items-center scroll-mt-15 bg-[#FDFCF5]">
      <h2 className="text-5xl font-bold pb-10">Work Section</h2>

      <div className="flex flex-row items-center w-full max-w-6xl gap-5">
        <div className="flex-1 h-px bg-gray-300" />
        <Link
          to="/reel"
          className="mx-6 px-12 py-4 border-2 rounded-sm border-black tracking-widest hover:bg-black hover:text-white cursor-pointer inline-block"
        >
          PLAY REEL
        </Link>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 max-w-6xl w-full">
        {projects.map((p, i) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="fade block">
            <Tile src={p.thumb} alt={p.title} index={i} staggerMs={120} />
          </Link>
        ))}
      </div>

      <div className="w-full bg-gray-300 h-px max-w-6xl mt-12" />
    </section>
  );
};

export default Work;