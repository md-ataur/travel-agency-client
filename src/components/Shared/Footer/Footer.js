import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer pt-10 md:pt-20 mt-10 md:mt-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-4 mb-6 md:mb-10 text-center md:text-left">
                <div className="footer-nav">
                    <h4>Travel Agency</h4>
                    <div className="mb-2">
                        <p>Call Us</p>
                        <p className="text-lg">+ 00 222 44 5678</p>
                    </div>
                    <div>
                        <p>Email Us</p>
                        <p className="text-lg">travelagency@gmail.com</p>
                    </div>
                </div>
                <div className="footer-nav">
                    <h4>Company Policy</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Tour Planing</a></li>
                        <li><a href="#">Payment Options</a></li>
                        <li><a href="#">Terms &amp; Condition</a></li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h4>Your Account</h4>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">My Events</a></li>
                        <li><a href="#">Your History</a></li>
                        <li><a href="#">Create Account</a></li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h4>Our Support</h4>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Tour Topic</a></li>
                        <li><a href="#">Support Team</a></li>
                        <li><a href="#">Donor Resources</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 py-6 px-4 text-center">
                <p className="text-gray-300">Copyright &copy; 2021 All Rights Reserved by Travel Agency.</p>
            </div>
        </div>

    );
};

export default Footer;