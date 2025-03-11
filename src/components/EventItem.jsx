import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeEvent } from "../store/slices/eventSlice";
import { motion } from "framer-motion";

const EventItem = ({ id, title, date, location, description }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeEvent(id));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -60, // Moves up only (no side movement)
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)", // Adds shadow for depth
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white p-6 rounded-xl shadow-md transition-all duration-300 
                       border border-gray-200 hover:shadow-xl cursor-pointer"
        >
            <div className="text-xl font-bold text-blue-700 flex items-center justify-between">
                <div className="text-wrap break-words w-full">{title}</div>
                <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer"
                >
                    <MdDeleteSweep size={28} color="red" onClick={() => handleDelete(id)} />
                </motion.div>
            </div>
            <p className="text-gray-500 mt-2 text-sm">📅 {date}</p>
            <p className="text-gray-500 mt-1 text-sm">📍 {location}</p>
            <p className="text-gray-600 mt-3 text-base">{description}</p>
        </motion.div>
    );
};

export default EventItem;
