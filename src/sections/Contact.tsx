import contact from "../assets/contact.jpg";

const Contact = () => {
    const onSubmit = async (event: any) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "3cd71913-147d-4a88-b6bf-8a0228282490");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            event.target.reset();
        } else {
            console.log("Error", data);
        }
    };

    return (
        <section id="contact">
            <div className="relative h-[calc(250vh/3) md:h-[70vh] min-h-[60vh]">
                {/* Background Image */}
                <img
                    src={contact}
                    alt="Unable to Load"
                    className="absolute inset-0 w-full h-full object-cover"/>

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 justify-center items-center flex flex-col gap-10 px-4 z-20">
                    <h2 className="text-5xl font-bold text-white tracking-wider text-center">GET IN TOUCH!</h2>
                    <div className="text-xl font-bold text-white text-center">Start a project, schedule a talk, or just say hello!</div>
                    <form
                        onSubmit={onSubmit}
                        className="flex flex-col max-w-2xl mx-auto gap-6 w-full"
                    >
                        {/* Name Input */}
                        <div className="flex flex-row gap-5 w-full justify-center items-center">
                            <input
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                required 
                                className="bg-white rounded-sm px-2 py-1 w-full text-base
                                            sm:text-lg md:py-4 md:px-5
                                            focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                required 
                                className="bg-white rounded-sm px-2 py-1 w-full text-base
                                            sm:text-lg md:py-4 md:px-5
                                            focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                                className="bg-white rounded-sm px-2 py-1 w-full text-base
                                            sm:text-lg md:py-4 md:px-5
                                            focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        
                        {/* Message Text Box */}
                        <div>
                            <textarea
                                name="message"
                                placeholder="Add your message here..."
                                required
                                className="bg-white rounded-sm px-2 py-1 w-full text-base
                                            sm:text-lg md:py-4 md:px-5 resize-y
                                            focus:outline-none focus:ring-2 focus:ring-blue-500">    
                            </textarea>
                        </div>

                        {/* Standard Subject Line */}
                        <input
                            type="hidden" 
                            name="subject" 
                            value="[Portfolio] New Inquiry" />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-transparent mt-6 px-10 py-4 border-2 font-bold rounded-sm border-white text-white tracking-widest
                                        hover:bg-white hover:text-black hover:scale-105 duration-100 cursor-pointer w-fit mx-auto"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;