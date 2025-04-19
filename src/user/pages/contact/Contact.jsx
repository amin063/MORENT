import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_l3rm2bl",    // öz service ID-n
                "template_hnyazka",   // öz template ID-n
                form.current,
                "J55e_nEUFAU2vcOYH"   // öz public key-in
            )
            .then(
                (result) => {
                    console.log("Message sent:", result.text);
                    setIsSent(true);
                    setError(null);
                },
                (error) => {
                    console.error("Error sending message:", error.text);
                    setError("Something went wrong. Please try again.");
                }
            );

        e.target.reset();
    };

    return (
        <section className="bg-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 text-center text-gray-500 sm:text-xl">
                    Got a question? Leave us a message.
                </p>

                {isSent && <p className="text-green-500 text-center">Message sent successfully!</p>}
                {error && <p className="text-red-500 text-center">{error}</p>}

                <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                    <input type="hidden" name="to_email" value="səninmailadresin@gmail.com" />

                    <div>
                        <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-gray-900">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="from_name"
                            id="from_name"
                            required
                            placeholder="Your Name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        />
                    </div>

                    <div>
                        <label htmlFor="from_email" className="block mb-2 text-sm font-medium text-gray-900">
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="from_email"
                            id="from_email"
                            required
                            placeholder="your@email.com"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={6}
                            required
                            placeholder="Write your message..."
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
