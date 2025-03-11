import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
            {/* Hero Section */}
            <div className="text-center max-w-3xl z-10">
                <h2 className="text-2xl font-semibold uppercase tracking-wider">Experience the Power of Unity</h2>
                <h1 className="text-6xl md:text-7xl font-extrabold mt-4 leading-tight">
                    Bringing <span className="text-yellow-300">People</span> Together with <span className="text-yellow-300">Faith</span>
                </h1>
                <p className="mt-4 text-lg opacity-90">
                    Discover events that unite diverse cultures and faiths. Strengthen your community through spiritual and social gatherings.
                </p>

                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <Link to="/events" className="mt-6 inline-block px-10 py-4 bg-yellow-400 text-gray-900 font-bold text-lg rounded-full shadow-2xl hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110">
                        Explore Events
                    </Link>
                </motion.div>
            </div>

            {/* Images with 50% Top Border - Hut Shape Effect */}
            <motion.img 
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Community Gathering" 
                className="absolute top-20 left-10 w-72 h-72 object-cover border-t-[50%] border-t-white rounded-t-full shadow-lg"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                whileHover={{ rotateY: 10, scale: 1.05 }}
            />

            <motion.img 
                src="https://plus.unsplash.com/premium_photo-1682126154930-cd952a02581d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Faith Gathering" 
                className="absolute bottom-20 right-10 w-72 h-72 object-cover border-t-[50%] border-t-white rounded-t-full shadow-lg"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                whileHover={{ rotateY: -10, scale: 1.05 }}
            />
        </div>
    );
};

export default Home;
