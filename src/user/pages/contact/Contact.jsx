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
                "service_l3rm2bl",
                "template_hnyazka",
                form.current,
                "J55e_nEUFAU2vcOYH"
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
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature?
                    Need details about our Business plan? Let us know.
                </p>
                {isSent && (
                    <p className="text-green-500 text-center">Message sent successfully!</p>
                )}
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-gray-900">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="from_name"
                            id="from_name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="to_name" className="block mb-2 text-sm font-medium text-gray-900">
                            Recipient Name
                        </label>
                        <input
                            type="text"
                            name="to_name"
                            id="to_name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="Recipient name"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                            Your message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={6}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Leave a message..."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;