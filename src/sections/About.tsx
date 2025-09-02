import profile from "../assets/profile.jpg";
import Skill from "../components/skill";

import Wwise from "../assets/logos/wwise.png";
import Unity from "../assets/logos/unity.png";
import Reaper from "../assets/logos/reaper.png";
import Live from "../assets/logos/ableton.png";
import ProTools from "../assets/logos/protools.png";




const introduction = `
Hello! I’m Raimundo Almenara, a sound designer based in Tokyo, Japan.

My love for sound started back when my dad brought home our first family computer. I was the kid who opened every program, clicked every button, and twisted every setting just to see what would happen. Looking back, that same spirit of experimentation has become the foundation of my approach to sound design.

Today, I bring that curiosity into every project I work on. For me, sound is storytelling. I believe the best results come from starting with the concept first, then shaping sound to bring a world to life. Whether it’s creating the weight of a giant monster, the subtle textures of an environment, or a stylized effect that pushes the imagination, I design with narrative in mind.

On the technical side, I have strong experience in recording, design, and audio implementation, with deep knowledge of Wwise, Unity, and Reaper. I’m passionate about making work that is both original and polished. I always want to leave a touch of unexpected details that surprise people whenever they look a little closer.

If you’re working on a project that needs high-quality, story-driven sound, feel free to get in touch!
`;


const About = () => {

    const handleContactClick = (e: React.MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault()
        const target = document.querySelector("#contact")
        target?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <section id="about" className="flex flex-col pt-17 gap-10 justify-center items-center scroll-mt-15 bg-[#FDFCF5] text-black">
            
            <h2 className="text-5xl font-bold">About Me</h2>
            
            {/* Main Section */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 max-w-6xl md:gap-2">
                <div className="flex justify-center items-center">
                    <img
                    src={profile}
                    alt="Unable to Load"
                    className="pb-8 md:pb-0 w-full aspect-square object-cover rounded-lg" />
                </div>
                <div className="flex flex-col text-left whitespace-pre-line p-6">
                    {introduction}
                    <button
                        onClick={handleContactClick}
                        className="mt-6 px-10 py-4 border-2 rounded-sm border-black tracking-widest
                                 hover:bg-black hover:text-white cursor-pointer w-fit">
                        Contact Me
                    </button>
                </div>
            </div>

            {/* Section Separator */}
            <div className="mx-auto h-px w-full max-w-6xl bg-gray-300" />

            {/* Skills Section */}
            <div className="w-screen h-auto bg-gray-200 flex flex-col justify-center items-center gap-8">
                {/* Skills Title */}
                <h2 className="text-4xl font-bold py-10 flex flex-col items-center justify-center gap-3">
                    Bag of Skills
                    <div className="mt-2 w-16 h-1 bg-black rounded"></div>
                </h2>

                {/* Skill List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-10 md:grid-cols-3 md:gap-y-20 md:gap-x-30 text-center pb-10">
                    <Skill label="WWISE" image={Wwise}/>
                    <Skill label="UNITY" image={Unity}/>
                    <Skill label="REAPER" image={Reaper}/>
                    <Skill label="ABLETON LIVE" image={Live}/>
                    <Skill label="PRO TOOLS" image={ProTools}/>
                </div>
            </div>
            
            {/* Section Separator */}
            <div className="mx-auto mb-12 h-px w-full max-w-6xl bg-gray-300" />
            
        </section>
    );
};

 export default About;