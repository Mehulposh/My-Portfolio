import { useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
    const [formData , setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const SERVICE_ID = "service_ou0lb4l";
    const TEMPLATE_ID = 'template_jaj7znc';
    const PUBLIC_KEY = 'BVdo8V9zbp6zWcfB0';
    
    const handleSubmit = (e) =>{
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY).then((result) => {
            alert('Message Sent');
            setFormData({name: '', email: '' , message: ''});
        }) .catch(() => alert('Something went wrong try again'));

    }
    return (
        <section 
            className="min-h-screen w-screen flex items-center justify-center py-20"
            id="contact"
        >
            <div className=" min-w-[500px] md:min-w-[500px] px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r 
                    from-blue-500 to-cyan-400 bg-clip-text text-transparent 
                    text-center"
                >
                    Contact Me
                </h2>

                <form
                    onSubmit={handleSubmit} 
                    className="space-y-6">
                    <div className="relative">
                        <input 
                            type="text"
                            placeholder="Name..."
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({
                                ...formData,
                                name: e.target.value,
                            })}
                            className="w-full bg-white/6 px-4 py-3 border border-white/10  
                                rounded text-wite transition focus:outline-none focus:border-blue-500 
                                focus:bg-blue500/5"
                        />
                    </div> 
                   <div className="relative">
                        <input 
                            type="mail"
                            placeholder="Email..."
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({
                                ...formData,
                                email: e.target.value,
                            })}
                            className="w-full bg-white/6 px-4 py-3 border border-white/10  
                                rounded text-wite transition focus:outline-none focus:border-blue-500 
                                focus:bg-blue500/5"
                        />
                    </div>        
                    <div className="relative">
                        <textarea
                            rows={5} 
                            type="text"
                            placeholder="Message..."
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({
                                ...formData,
                                message: e.target.value,
                            })}
                            className="w-full bg-white/6 px-4 py-3 border border-white/10  
                                rounded text-wite transition focus:outline-none focus:border-blue-500 
                                focus:bg-blue500/5"
                        />
                    </div> 

                    <button 
                        type="submit"
                        className="rounded w-full bg-blue-500 px-6 py-3 font-medium transition hover:-translate-y-0.5 cursor-pointer "
                    > 
                        Send
                    </button>
                </form>
                <p className="text-center text-gray-400 py-4"> OR </p>
                <div className="p-2 flex justify-center items-center gap-2">
                    <a href="#">
                        <img src='/instagram-line.svg' className="bg-white size-10 "/>
                    </a>
                    <a href="#">
                        <img src='/github-fill.svg' className="bg-white size-10 "/>
                    </a>
                    <a href="https://www.linkedin.com/in/mehul-poshattiwar-885a891aa" target="_blank">
                        <img src='/linkedin-box-line.svg' className="bg-white size-10  "/>
                    </a>
                </div>
            </div>
        </section>
    )
}