import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const NavLink = ({ to, children, onClick }) => {
        return (
            <Link
                to={to}
                onClick={onClick}
                className="relative text-white text-lg font-medium transition-all duration-300 hover:text-yellow-300 before:content-[''] before:absolute before:w-0 before:h-1 before:bg-yellow-300 before:bottom-0 before:left-1/2 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0"
            >
                {children}
            </Link>
        );
    };

    return (
        <header className="w-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg py-4 px-6 flex justify-between items-center fixed top-0 z-50">
            <motion.h1 
                className="text-3xl font-extrabold text-yellow-400 tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Link to="/home">CommunionHub</Link>
            </motion.h1>

            <nav className="hidden md:flex space-x-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/events">Events</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>

            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoCloseSharp size={28} /> : <IoMenuSharp size={28} />}
            </button>

            {isOpen && (
                <motion.nav 
                    className="absolute top-16 left-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg border-t border-gray-200 py-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col items-center space-y-4">
                        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                        <NavLink to="/events" onClick={() => setIsOpen(false)}>Events</NavLink>
                        <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
                        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
                    </div>
                </motion.nav>
            )}
        </header>
    );
};

export default Header;
