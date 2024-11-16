import React from "react";
import photo from "../assets/header-photo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
                {/* Left Section */}
                <div className="flex flex-col sm:items-start items-center text-center sm:text-left">
                    <div className="flex items-center space-x-2">
                        {/* Logo */}
                        <img src={photo} className="rounded-md" alt="In-shorts"/>
                    </div>
                    <p className="text-sm mt-2">Inshorts Pvt. Ltd.</p>
                    <p className="text-sm">© COPYRIGHT 2024</p>
                </div>

                {/* Center Section */}
                <div className="flex flex-col sm:flex-row sm:space-x-6 mt-4 sm:mt-0 text-center sm:text-left">
                    <a href="#contact" className="hover:underline text-sm">
                        Contact Us
                    </a>
                    <a href="#terms" className="hover:underline text-sm">
                        Terms & Conditions
                    </a>
                    <a href="#privacy" className="hover:underline text-sm">
                        Privacy Policies
                    </a>
                </div>

                {/* Right Section */}
                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <a href="#facebook" className="text-gray-400 hover:text-white">
                        <FaFacebookF />
                    </a>
                    <a href="#twitter" className="text-gray-400 hover:text-white">
                        <FaTwitter />
                    </a>
                    <a href="#linkedin" className="text-gray-400 hover:text-white">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
