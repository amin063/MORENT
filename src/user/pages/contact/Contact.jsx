import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);
    const controls = useAnimation();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Buton animasyonu başlasın
        controls.start({
            x: [0, -10, 10, -10, 10, 0],
            rotate: [0, 5, -5, 5, -5, 0],
            transition: { duration: 0.6 },
        });

        try {
            await emailjs.sendForm(
                "service_l3rm2bl",
                "template_hnyazka",
                form.current,
                "J55e_nEUFAU2vcOYH"
            );
            setIsSent(true);
            setError(null);
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }

        e.target.reset();
    };

    return (
        <section className="bg-white min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-xl py-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 text-4xl font-extrabold text-center text-gray-800"
                >
                    Contact Us
                </motion.h2>

                <p className="mb-10 text-center text-gray-500">
                    Have a question? Send us a message below.
                </p>

                {isSent && <p className="text-green-500 text-center mb-4">✅ Message sent successfully!</p>}
                {error && <p className="text-red-500 text-center mb-4">❌ {error}</p>}

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="to_email" value="səninmailadresin@gmail.com" />

                    <div>
                        <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="from_name"
                            id="from_name"
                            required
                            placeholder="John Doe"
                            className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="from_email"
                            id="from_email"
                            required
                            placeholder="john@example.com"
                            className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            placeholder="Write your message..."
                            className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        ></textarea>
                    </div>

                    <motion.button
                        animate={controls}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(59,130,246,0.4)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-xl transition-all duration-300 shadow-md"
                    >
                        <Send className="w-5 h-5" />
                        Send Message
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
