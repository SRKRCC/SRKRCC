import React, { useState, useEffect } from "react";
import { Image } from "antd";

const Popup = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative w-full max-w-md p-5 bg-white rounded-lg shadow-lg transition-transform transform scale-100 hover:scale-105">

                {/* X Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl font-bold"
                >
                    ✕
                </button>

                <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">Upcoming Event</h2>

                {/* Image Section */}
                <div className="relative mb-4 flex justify-center items-center w-full h-56 sm:h-72 max-h-80 overflow-hidden rounded-lg shadow-md">
                    <Image
                        src="/iconcoderz2k26.webp"
                        className={`w-full h-full object-contain transition-all duration-500 ${imageLoaded ? 'filter-none' : 'filter blur'}`}
                        onLoad={handleImageLoad}
                        style={{ transition: "filter 0.5s" }}
                    />
                </div>

                <ul className="space-y-2 text-gray-700 list-disc px-4 text-left">
                    <li>
                        Participants are required to solve Data Structures and Algorithms (DSA) problems that test logical thinking, problem-solving skills, and coding efficiency.
                    </li>
                </ul>

                {/* Register Button */}
                <div className="mt-6 text-center">
                    <a
                        href="https://iconcoderz.srkrcodingclub.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-white px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Register Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Popup;
