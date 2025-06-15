export default function Home(){
    return (
        <section
            id="home"
            className="min-h-screen pt-20  flex items-center justify-center relative"
        >
            <div className="text-center z-10 px-4">
                <div className="flex justify-center mb-3  ">
                    <img src="/myprofileimage.jpg" alt="Mehul" className="h-50 border-5 border-white/11 p-1  rounded-[100%]"/>

                </div>
                <h1 className="text-5xl  md:text-7xl font-bold mb-6 bg-gradient-to-r 
                    from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right" 
                >
                    Hi I'am Mehul Poshattiwar
                </h1>

                <p className="text-gray-400 text-justify text-lg mb-8 max-w-lg mx-auto">
                    Passionate Frontend Developer with 6+ months of hands-on experience 
                    building responsive web applications using React.js and modern JavaScript
                    frameworks. Proven track record of optimizing application performance, 
                    and creating intuitive user interfaces. Seeking to leverage expertise in
                    React ecosystem and Agile methodologies to contribute to innovative web 
                    development projects.
                </p>

                <div className='flex justify-center space-x-4 '>
                    <a 
                        href='#projects'
                        className='bg-blue-500 text-white py-3 px-6 rounded font-medium 
                            transition relative overflow-hidden hover:-translate-y-0.5 
                            hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                    >
                        View Projects
                    </a>

                    <a 
                        href='#contact'
                        className='text-blue-500 py-3 px-6 rounded font-medium border border-blue-500
                            transition relative overflow-hidden hover:-translate-y-0.5 
                            hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    )
};

