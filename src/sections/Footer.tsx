const Footer = () => {

    return (
        <section id="footer" className="flex flex-col justify-center items-center">


            {/* Footer */}
            <footer className="w-screen bg-black text-white border-t border-gray-800">
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

export default Footer;