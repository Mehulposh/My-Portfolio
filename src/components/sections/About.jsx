export default function About() {

    const frontendSkills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Material Ui',
        'TailwindCSS',
        'BootStrap',
        'Redux Toolkit',    
    ];

    const backendSkills = [
        'MYSQL',
        'Python',
        
    ];


    return (
        <section 
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r 
                    from-blue-500 to-cyan-400 bg-clip-text text-transparent 
                    text-center"
                >
                    About Me
                </h2>    

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y01 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate developer with expertise in building scalable web
                        applications and creating innovative solutions.
                    </p>

                    <div className="grid grid-cols-2 md:gird-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                FrontEnd
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech,idx) => (
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
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                BackEnd
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech,idx) => (
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
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1  md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                           🏫 Education
                        </h3>
                        <ul className="list-disc  text-gray-400 space-y-4">
                            <li>
                                <strong>BTech in Computer Science and Business System</strong> - 
                                Bharati Vidyapeeth (Deemed To Be University) Pune , Maharashtra , India
                            </li>
                            <li>
                                <strong>Diploma in Computer Engineering</strong> - 
                                Government Polytechnique ,Gadchiroli, Maharashtra , India
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 
                            💼 Work Experience 
                        </h3>
                        <div className="space-y-4 text-gray-400 ">
                            <div>
                                <h4 className="font-semibold">
                                    Fellowship at Crio.do (2024 - Present){' '}
                                </h4>
                                <p>
                                    Learned and Developed React , Material Ui , and other Frontend Skills based applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>                
             </div>
        </section>
    )
}