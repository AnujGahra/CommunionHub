import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-900 flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl w-full bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20"
            >
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl font-extrabold text-white text-center mb-6"
                >
                    Welcome to <span className="text-yellow-300">CommunionHub</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg text-gray-200 text-center leading-relaxed"
                >
                    CommunionHub is a community-driven platform designed to connect people across different faiths, interests, and communities. Whether you're looking for social gatherings, religious events, or charity initiatives, CommunionHub makes it easy to discover and participate in events that matter to you.
                </motion.p>

                {/* Features Section */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Discover Events", icon: "📅", desc: "Find events that align with your faith and interests." },
                        { title: "Join the Community", icon: "🤝", desc: "Engage with like-minded individuals and build connections." },
                        { title: "Create & Share", icon: "🌍", desc: "Host and promote your own events effortlessly." },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10, scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="p-6 bg-white/20 rounded-xl shadow-lg text-center text-white border border-white/30 backdrop-blur-md"
                        >
                            <div className="text-3xl">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mt-3">{feature.title}</h3>
                            <p className="text-sm text-gray-300 mt-2">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-10 text-center"
                >
                    <a
                        href="/events"
                        className="inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300"
                    >
                        Explore Events 🚀
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutPage;
