export default function Projects() {
    return (
        <section 
            className="min-h-screen flex items-center justify-center py-20"
            id="projects"
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r 
                    from-blue-500 to-cyan-400 bg-clip-text text-transparent 
                    text-center"
                >
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 
                        hover:-translate-y-1 hover:border-blue-500/10 
                        hover:shadow-[0_2px_8px_rgbs(59,130,246,0.2)] 
                        transition"
                    >
                        <h3 className="text-xl font-bold mb-2">
                            BOTAi
                        </h3>
                        <p className="text-gray-400 mb-4">
                            A clone of Chat-gpt with possibilities of connecting LLM model
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['React','Material Ui','Axios','Vercel'].map((tech,idx) => (
                                <span 
                                    key={idx}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                        rounded-full text-sm hover:bg-bllue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                        transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="https://botai-alpha-ten.vercel.app/"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 transition-colors my-4"
                            >
                                View Project 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 
                        hover:-translate-y-1 hover:border-blue-500/10 
                        hover:shadow-[0_2px_8px_rgbs(59,130,246,0.2)] 
                        transition"
                    >
                        <h3 className="text-xl font-bold mb-2">
                            MEDIFY
                        </h3>
                        <p className="text-gray-400 mb-4">
                            A appointment booking site for hospitals in U.S 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['React','Material Ui','Axios','Vercel','Router','Swiper JS','Date Fns'].map((tech,idx) => (
                                <span 
                                    key={idx}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                        rounded-full text-sm hover:bg-bllue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                        transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="https://x-medify-sigma.vercel.app/"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 transition-colors my-4"
                            >
                                View Project 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 
                        hover:-translate-y-1 hover:border-blue-500/10 
                        hover:shadow-[0_2px_8px_rgbs(59,130,246,0.2)] 
                        transition"
                    >
                        <h3 className="text-xl font-bold mb-2">
                            QKART
                        </h3>
                        <p className="text-gray-400 mb-4">
                            An E-commerce site with complete sign-up, login, cart and check-out functionality.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['React','Material Ui','Axios','Vercel','Render'].map((tech,idx) => (
                                <span 
                                    key={idx}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                        rounded-full text-sm hover:bg-bllue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                        transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="#"
                                className="text-blue-500 hover:text-blue-300 transition-colors my-4"
                            >
                                View Project 
                            </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 
                        hover:-translate-y-1 hover:border-blue-500/10 
                        hover:shadow-[0_2px_8px_rgbs(59,130,246,0.2)] 
                        transition"
                    >
                        <h3 className="text-xl font-bold mb-2">
                            EXPENSE TRACKER
                        </h3>
                        <p className="text-gray-400 mb-4">
                            An Expense tracker to track the expenses done day to day.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {['React','Recharts','React Modal','React Icons','UUID','Vercel'].map((tech,idx) => (
                                <span 
                                    key={idx}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                        rounded-full text-sm hover:bg-bllue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] 
                                        transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a 
                                href="https://expense-tracker-beryl-phi-69.vercel.app/"
                                target="_blank"
                                className="text-blue-500 hover:text-blue-300 transition-colors my-4"
                            >
                                View Project 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}