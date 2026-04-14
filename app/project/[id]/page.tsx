import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import ImageGallery from './ImageGallery';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const bsaContent = (
        <div className="space-y-6 mt-10">
            <p className="text-gray-600 leading-relaxed text-[15px]">
                An all-in-one management system designed to streamline day-to-day operations, elevate customer service, and boost overall business productivity. From seamless course scheduling and point-of-sale to extensive client management, our platform provides a complete digital solution for modern businesses.
            </p>

            <div className="bg-emerald-50/30 p-6 md:p-8 rounded-2xl border border-emerald-100/50">
                <h3 className="text-lg md:text-xl font-extrabold text-emerald-900 mb-6">Key Features</h3>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-emerald-600 block text-[15px]">Multi-role User Management:</strong> 
                        <span className="text-gray-500 text-[13px] leading-relaxed">Dedicated dashboards and access controls for Admins, Staff, Members, and Guests, ensuring data security and functional workflows.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-emerald-600 block text-[15px]">Smart Booking System:</strong> 
                        <span className="text-gray-500 text-[13px] leading-relaxed">Efficiently manage reservations, allocate timeslots, and seamlessly handle scheduling for courses and services to prevent overbooking.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-emerald-600 block text-[15px]">Course & Product Management:</strong> 
                        <span className="text-gray-500 text-[13px] leading-relaxed">Easily organize training courses, service packages, and track retail product inventory.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-emerald-600 block text-[15px]">Point of Sale (POS) & Sales Tracking:</strong> 
                        <span className="text-gray-500 text-[13px] leading-relaxed">Integrated checkout processes to handle both service and product transactions along with robust sales history tracking.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-emerald-600 block text-[15px]">Promotions & Campaigns:</strong> 
                        <span className="text-gray-500 text-[13px] leading-relaxed">Flexible promotion management to create discounts, marketing campaigns, and boost customer retention.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-emerald-600 block text-[15px]">Customer Course Attendance:</strong> 
                        <span className="text-gray-500 text-[13px] leading-relaxed">Track the attendance of clients who have booked courses, easily monitor who attended specific classes, and maintain accurate records of their total attendance days.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-emerald-600 block text-[15px]">Customer Review Interface:</strong> 
                        <span className="text-gray-500 text-[13px] leading-relaxed">Allow clients to leave ratings and feedback to continuously improve service quality.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-emerald-600 block text-[15px]">Automated Email Notifications:</strong> 
                        <span className="text-gray-500 text-[13px] leading-relaxed">Integrated with PHPMailer to send instantaneous booking confirmations, reminders, and updates directly to the client&apos;s inbox.</span>
                    </li>
                </ul>
            </div>
        </div>
    );

    const kmutnbContent = (
        <div className="space-y-6 mt-10">
            <p className="text-gray-600 leading-relaxed text-[15px]">
                A real-time shuttle bus tracking application designed for King Mongkut&apos;s University of Technology North Bangkok (KMUTNB). It empowers students to plan their commutes effortlessly while providing drivers and administrators with an efficient fleet management system. The system consists of two main platforms:
            </p>

            {/* 1. Mobile App Section */}
            <div className="bg-[#ff4009]/5 p-6 md:p-8 rounded-2xl border border-[#ff4009]/20">
                <h3 className="text-lg md:text-xl font-extrabold text-[#ff4009] mb-6">Mobile Application (For Students & Drivers)</h3>

                <div className="mb-8">
                    <h4 className="font-bold text-[#ff4009] mb-4 bg-white inline-block px-4 py-1.5 rounded-full text-sm shadow-sm border border-[#ff4009]/20">For Students</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                            <strong className="text-[#ff4009] block text-[15px]">Real-time Map:</strong>
                            <span className="text-gray-500 text-[13px] leading-relaxed">Track the exact location of the university shuttle buses in real-time.</span>
                        </li>
                        <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                            <strong className="text-[#ff4009] block text-[15px]">ETA & Schedule:</strong>
                            <span className="text-gray-500 text-[13px] leading-relaxed">Check the estimated time of arrival (ETA) at each stop and view bus schedules.</span>
                        </li>
                        <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                            <strong className="text-[#ff4009] block text-[15px]">Driver Info:</strong>
                            <span className="text-gray-500 text-[13px] leading-relaxed">View the details of the driver on duty.</span>
                        </li>
                        <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                            <strong className="text-[#ff4009] block text-[15px]">Report System:</strong>
                            <span className="text-gray-500 text-[13px] leading-relaxed">Instantly report service issues (e.g., late arrivals).</span>
                        </li>
                        <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300 md:col-span-2">
                            <strong className="text-[#ff4009] block text-[15px]">Personalization:</strong>
                            <span className="text-gray-500 text-[13px] leading-relaxed">Supports multi-language and Light/Dark mode.</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-[#ff4009] mb-4 bg-white inline-block px-4 py-1.5 rounded-full text-sm shadow-sm border border-[#ff4009]/20">For Drivers</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                            <strong className="text-[#ff4009] block text-[15px]">Status Update:</strong>
                            <span className="text-gray-500 text-[13px] leading-relaxed">Easily set the current bus status (Ready, Out of Service, Maintenance, Refueling).</span>
                        </li>
                        <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                            <strong className="text-[#ff4009] block text-[15px]">Smart Alerts:</strong>
                            <span className="text-gray-500 text-[13px] leading-relaxed">Receive notifications 15 minutes before the next scheduled departure.</span>
                        </li>
                        <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                            <strong className="text-[#ff4009] block text-[15px]">Ticket Report:</strong>
                            <span className="text-gray-500 text-[13px] leading-relaxed">Conveniently report the number of collected paper tickets per round.</span>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    );

    const kmutnbWebContent = (
        <div className="space-y-6 mt-10">
            <p className="text-gray-600 leading-relaxed text-[15px]">
                A real-time shuttle bus tracking application designed for King Mongkut&apos;s University of Technology North Bangkok (KMUTNB). It empowers students to plan their commutes effortlessly while providing drivers and administrators with an efficient fleet management system.
            </p>

            {/* Web App Section */}
            <div className="bg-[#ff4009]/5 p-6 md:p-8 rounded-2xl border border-[#ff4009]/20">
                <h3 className="text-lg md:text-xl font-extrabold text-[#ff4009] mb-6">Web Application (For Administrators)</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-[#ff4009] block text-[15px]">User Management:</strong>
                        <span className="text-gray-500 text-[13px] leading-relaxed">Manage permissions and accounts for students and drivers.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-[#ff4009] block text-[15px]">Fleet Tracking:</strong>
                        <span className="text-gray-500 text-[13px] leading-relaxed">Monitor all buses simultaneously on a real-time tracking map.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-[#ff4009] block text-[15px]">Route Data & History:</strong>
                        <span className="text-gray-500 text-[13px] leading-relaxed">View past trip logs and compare actual travel times with schedules.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-[#ff4009] block text-[15px]">Ticket & Usage Reports:</strong>
                        <span className="text-gray-500 text-[13px] leading-relaxed">Review daily ticket reports and overall system usage statistics.</span>
                    </li>
                </ul>
            </div>
        </div>
    );

    const ecStudentContent = (
        <div className="space-y-6 mt-10">
            <p className="text-gray-600 leading-relaxed text-[15px]">
                EC Student is a comprehensive management application designed to streamline access to information, manuals, and borrowing services. Built with efficiency in mind, it provides a seamless user experience powered by integrated QR Code technology for quick interactions and organized data tracking.
            </p>

            <div className="bg-indigo-50/30 p-6 md:p-8 rounded-2xl border border-indigo-100/50">
                <h3 className="text-lg md:text-xl font-extrabold text-indigo-900 mb-6">Key Features</h3>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-indigo-600 block text-[15px]">Secure User Authentication:</strong> 
                        <span className="text-gray-500 text-[13px] leading-relaxed">Complete system for user registration (Sign Up), secure login (Sign In), and personalized profile management.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-indigo-600 block text-[15px]">Document & Manual Management:</strong> 
                        <span className="text-gray-500 text-[13px] leading-relaxed">Empower users to create, edit, and view detailed operations manuals and essential documents on the go.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-indigo-600 block text-[15px]">Smart Borrowing System:</strong> 
                        <span className="text-gray-500 text-[13px] leading-relaxed">Integrated service to manage borrowing/returning processes, complete with a detailed history log to track item status seamlessly.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-indigo-600 block text-[15px]">QR Code Integration:</strong> 
                        <span className="text-gray-500 text-[13px] leading-relaxed">Built-in QR Code Generator and Scanner for lightning-fast access to specific manuals, instant item identification, and rapid transactions.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-indigo-600 block text-[15px]">Powerful Search & Discovery:</strong> 
                        <span className="text-gray-500 text-[13px] leading-relaxed">Easily find what you need with an intuitive search system and comprehensive detail views.</span>
                    </li>
                    <li className="bg-white p-4 lg:p-5 rounded-xl shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-1 hover:shadow-md hover:-translate-y-1 transition duration-300">
                        <strong className="text-indigo-600 block text-[15px]">User List & Status Management:</strong> 
                        <span className="text-gray-500 text-[13px] leading-relaxed">Efficient tracking of users and their systematic statuses within the application.</span>
                    </li>
                </ul>
            </div>
        </div>
    );

    // Project details mapping
    const projectDetails: Record<string, { title: string, tags: string[], description?: string, banner: string, content?: React.ReactNode, githubLink?: string }> = {
        bsa: {
            title: "Massage course and spa product management system",
            tags: ["PHP", "MySQL", "JavaScript", "CSS"],
            banner: "/api/images/banner/1.png",
            content: bsaContent,
            githubLink: "https://github.com/Thanadol22/BkkSpa" // ใส่ลิงก์ GitHub ตรงนี้
        },
        web_kmutnb: {
            title: "University Shuttle Tracking (KMUTNB) - Web",
            tags: ["PHP", "Firebase", "Tailwind CSS"],
            banner: "/api/images/banner/2.png",
            content: kmutnbWebContent,
            githubLink: "https://github.com/Thanadol22/WEB_KMUTNB_BUS" // ใส่ลิงก์ GitHub ตรงนี้
        },
        kmutnb_bus: {
            title: "University Shuttle Tracking (KMUTNB) - Mobile",
            tags: ["Flutter (Dart)", "Firebase"],
            banner: "/api/images/banner/3.png",
            content: kmutnbContent,
            githubLink: "https://github.com/Thanadol22/KMUTNB_BUS" // ใส่ลิงก์ GitHub ตรงนี้
        },
        ec_student: {
            title: "Borrow & Return: Project Reports",
            tags: ["Flutter (Dart)", "Firebase"],
            banner: "/api/images/banner/4.png",
            content: ecStudentContent,
            githubLink: "https://github.com/Thanadol22/Ec_Students" // ใส่ลิงก์ GitHub ตรงนี้
        }
    };

    const currentProject = projectDetails[id];

    if (!currentProject) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center flex-col gap-6">
                <h1 className="text-3xl font-bold text-gray-800">Project Not Found</h1>
                <Link href="/" className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition">
                    Return to Portfolio
                </Link>
            </div>
        );
    }

    // Read images from the assets directory on the server
    const dirPath = path.join(process.cwd(), 'assets', id);
    let files: string[] = [];
    try {
        if (fs.existsSync(dirPath)) {
            files = fs.readdirSync(dirPath).filter(file => file.match(/\.(png|jpe?g|gif|webp)$/i));
        }
    } catch (e) {
        console.error("Error reading directory:", e);
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20 font-sans">
            {/* Navigation */}
            <nav className="flex items-center px-6 md:px-12 lg:px-24 py-6 bg-white w-full border-b border-gray-100 sticky top-0 z-50 shadow-sm">
                <Link href="/#project" className="text-gray-500 hover:text-sky-500 font-semibold flex items-center gap-2 transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Portfolio
                </Link>
            </nav>

            {/* Full Width Banner Image */}
            <div className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] bg-[#f4f6f8] relative z-0">
                <img
                    src={currentProject.banner}
                    alt={currentProject.title}
                    className="w-full h-full object-cover object-center"
                />
                {/* Gradient Overlay for a smoother transition to content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
            </div>

            <main className="max-w-6xl mx-auto px-6 md:px-12 relative -mt-16 md:-mt-24 z-10">
                {/* Project Header */}
                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
                    {/* Tags (moved up above title) */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {currentProject.tags.map(tag => (
                            <span key={tag} className="bg-sky-50 text-sky-600 px-4 py-2 rounded-lg text-xs font-bold border border-sky-100/50">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">{currentProject.title}</h1>
                    
                    {currentProject.description && (
                        <p className="text-gray-500 max-w-2xl leading-relaxed text-[15px] mb-6">{currentProject.description}</p>
                    )}

                    {/* Detailed Content */}
                    {currentProject.content && currentProject.content}
                </div>

                {/* Project Gallery */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-800 px-2">Project Gallery</h2>

                    {files.length > 0 ? (
                        <ImageGallery
                            images={files.map((file, index) => ({
                                src: `/api/images/${id}/${file}`,
                                alt: `${currentProject.title} screenshot ${index + 1}`
                            }))}
                        />
                    ) : (
                        <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
                            <p className="text-gray-500">No images available for this project yet.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}