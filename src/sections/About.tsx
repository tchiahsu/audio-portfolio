import profile from "../assets/profile.jpg";
import Skill from "../components/skill";

import Wwise from "../assets/logos/wwise.png";
import Unity from "../assets/logos/unity.png";
import Reaper from "../assets/logos/reaper.png";
import Live from "../assets/logos/ableton.png";
import ProTools from "../assets/logos/protools.png";


const introduction = `I'm Raimundo Almenara, a sound engineer and audio designer in training based in Tokyo, Japan.

My background is in media production and post-production. I’ve worked hands-on with recording equipment and editing tools in collaborative, fast-paced environments, building a strong foundation in technical precision and creative problem-solving. Today, I continue to hone my skills in recording, mixing, and sound design at [School Name].

I’m passionate about crafting immersive audio, whether through music, sound effects, or post-production polish. If you have a project that needs quality sound, feel free to reach out!`;

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
                    className="pb-8 md:pb-0 w-full max-w-[400px] aspect-square object-cover rounded-lg" />
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
                <div className="grid grid-cols-2 gap-y-10 gap-x-10 md:grid-cols-3 md:gap-y-20 md:gap-x-30 text-center pb-10">
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