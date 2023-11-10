import React from 'react';

export default function About() {
    return (
        <div className=' bg-slate-800 p-5'>
            <h1 className="text-3xl font-bold mb-4 text-center text-white">About Wolf Bank</h1>
            <p className="text-lg mb-6">Welcome to Wolf Bank!</p>
            <p className="mb-6 text-justify">At Wolf Bank, we are dedicated to providing you with the best banking experience possible. Established in 2000, we have been serving our customers with integrity, security, and innovation for over three decades. With our strong commitment to excellence, we strive to offer cutting-edge financial solutions tailored to meet the diverse needs of our clients.</p>

            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="mb-6 text-justify">Our mission is to empower our customers to achieve their financial goals by delivering secure, efficient, and innovative banking services. We aim to build long-term relationships with our clients by offering personalized solutions and excellent customer service, while ensuring the utmost security and transparency in all our operations.</p>

            

            <h2 className="text-2xl font-bold mb-3">Our Services</h2>
            <p className="mb-6">Wolf Bank offers a wide range of financial services tailored to meet the needs of individuals, businesses, and organizations. From basic banking solutions to advanced investment options, we provide:</p>
            <ul className="list-disc list-inside mb-6 text-white">
                <li>Personal Banking: Checking and savings accounts, loans, credit cards, and personalized financial planning services.</li>
                <li>Business Banking: Corporate accounts, business loans, payment solutions, and cash management services to support the growth and success of businesses.</li>
                <li>Investment Management: Customized investment solutions, portfolio management, and financial advisory services to help you build and secure your financial future.</li>
                <li>Digital Banking: Convenient and secure online and mobile banking services, enabling you to manage your finances anytime, anywhere.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
            <p className="mb-6 text-justify">We would love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to get in touch with our dedicated customer support team. You can reach us through our customer service hotline, email, or by visiting one of our branch locations.</p>

            <p className="mb-6">Thank you for choosing Wolf Bank for your banking needs. We look forward to serving you and being your trusted financial partner.</p>
        </div>
    );
};
