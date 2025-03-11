import { useState } from "react";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

const CreateEventModal = ({ isOpen, onClose, callbackFun }) => {
    const [eventData, setEventData] = useState({
        title: "",
        date: "",
        location: "",
        category: "",
        description: "",
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        callbackFun(eventData);
        onClose();
        setEventData({ title: "", date: "", location: "", category: "", description: "" });
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-white/10 backdrop-blur-lg border border-white/20 w-full max-w-lg p-6 rounded-2xl shadow-2xl relative text-white"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
                <button onClick={onClose} className="absolute top-3 right-3 text-white hover:text-red-400 transition-all">
                    <IoCloseSharp size={24} />
                </button>
                
                <h2 className="text-3xl font-bold text-center mb-6">Create New Event</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Event Title</label>
                        <input
                            type="text"
                            placeholder="Enter event title"
                            value={eventData.title}
                            onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
                            className="mt-1 p-3 w-full rounded-lg bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Event Date</label>
                        <input
                            type="date"
                            value={eventData.date}
                            onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
                            className="mt-1 p-3 w-full rounded-lg bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Location</label>
                        <input
                            type="text"
                            placeholder="Enter location"
                            value={eventData.location}
                            onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
                            className="mt-1 p-3 w-full rounded-lg bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Category</label>
                        <select
                            value={eventData.category}
                            onChange={(e) => setEventData({ ...eventData, category: e.target.value })}
                            className="mt-1 p-3 w-full rounded-lg bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-yellow-400 focus:outline-none cursor-pointer transition-all"
                        >
                            <option value="">Select Category</option>
                            <option value="Religious">🙏 Religious</option>
                            <option value="Social">🎉 Social</option>
                            <option value="Charity">❤️ Charity</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            placeholder="Enter event description"
                            value={eventData.description}
                            onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
                            className="mt-1 p-3 w-full rounded-lg bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all"
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="flex justify-between mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="cursor-pointer px-5 py-2 rounded-lg text-white bg-red-500 hover:bg-red-600 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={!eventData.title || !eventData.date || !eventData.location || !eventData.category || !eventData.description}
                            className="cursor-pointer px-6 py-2 rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Create Event
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
}

export default CreateEventModal;