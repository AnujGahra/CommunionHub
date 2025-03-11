import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully! 🚀");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-900 flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl w-full bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20"
            >
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl font-extrabold text-white text-center mb-6"
                >
                    Get in <span className="text-yellow-300">Touch</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg text-gray-200 text-center leading-relaxed"
                >
                    Have questions, suggestions, or feedback? Fill out the form below and our team will get back to you as soon as possible!
                </motion.p>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="relative"
                    >
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full bg-white/20 text-white px-4 py-3 rounded-xl shadow-md outline-none backdrop-blur-lg border border-white/30 placeholder-gray-300 focus:ring-2 focus:ring-yellow-300"
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="relative"
                    >
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full bg-white/20 text-white px-4 py-3 rounded-xl shadow-md outline-none backdrop-blur-lg border border-white/30 placeholder-gray-300 focus:ring-2 focus:ring-yellow-300"
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="relative"
                    >
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="4"
                            className="w-full bg-white/20 text-white px-4 py-3 rounded-xl shadow-md outline-none backdrop-blur-lg border border-white/30 placeholder-gray-300 focus:ring-2 focus:ring-yellow-300"
                            required
                        ></textarea>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="text-center"
                    >
                        <button
                            type="submit"
                            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300"
                        >
                            Send Message 🚀
                        </button>
                    </motion.div>
                </form>

                {/* Contact Info */}
                <div className="mt-8 text-center text-white text-sm opacity-80">
                    📍 CommunionHub Headquarters, Anywhere, Earth 🌍 <br />
                    📧 Email: <a href="mailto:support@communionhub.com" className="text-yellow-300">support@communionhub.com</a>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactPage;
