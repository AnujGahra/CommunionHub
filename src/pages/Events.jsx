import { useState } from "react";
import EventItem from "../components/EventItem";
import CreateEventModal from "../components/CreateEventModal";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../store/slices/eventSlice";
import { motion } from "framer-motion";

const Events = () => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state?.event?.events);
    const [category, setCategory] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredEvents = category ? events.filter(event => event.category === category) : events;

    const handleAddEvent = (newEvent) => {
        const id = events[events.length - 1]?.id + 1 || 0;
        dispatch(addEvent({ ...newEvent, id: id }));
    }

    return (
        <div className="min-h-screen p-6 bg-gradient-to-r from-blue-700 to-purple-800 text-white">
            <motion.h2 
                className="text-4xl font-extrabold mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Event Listings
            </motion.h2>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <select
                    disabled={events?.length === 0}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-3 border bg-yellow-400 font-bold text-gray-800 rounded-lg cursor-pointer w-full md:w-auto disabled:opacity-50"
                >
                    <option value="">All Categories</option>
                    <option value="Religious">Religious</option>
                    <option value="Social">Social</option>
                    <option value="Charity">Charity</option>
                </select>

                <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-md hover:bg-yellow-500 transition-all transform hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    Add New Event
                </motion.button>
            </div>

            {events?.length === 0 && (
                <motion.div 
                    className="text-center text-lg font-semibold pt-4 text-yellow-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    No events available
                </motion.div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event, index) => (
                    <motion.div 
                        key={index} 
                        className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                    >
                        <EventItem {...event} />
                    </motion.div>
                ))}
            </div>

            <CreateEventModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                callbackFun={handleAddEvent}
            />
        </div>
    );
}

export default Events;
