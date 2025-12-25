"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Globe, Code2, GraduationCap, Briefcase, User, ChevronDown, ChevronUp, X, ZoomIn } from "lucide-react";

export default function Home() {
  // State สำหรับจัดการการแสดงจำนวนรูปภาพ
  const [showAll, setShowAll] = useState(false);
  // State สำหรับเก็บ URL รูปภาพที่กำลังเปิดดูแบบเต็มหน้าจอ
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const allProjects = [
    { src: "/8.png" },
    { src: "/9.png" },
    { src: "/10.png" },
    { src: "/4.png" },
    { src: "/5.png" },
    { src: "/6.png" },
    { src: "/11.png" },
    { src: "/12.png" },
    { src: "/2.1.png" },
    { src: "/2.2.png" },
    { src: "/2.3.png" },
    { src: "/2.4.png" },
    { src: "/2.5.png" },
    { src: "/3.8.jpg" },
    { src: "/3.1.png" },
    { src: "/3.2.png" },
    { src: "/3.3.png" },
    { src: "/3.4.png" },
    { src: "/3.5.png" },
    { src: "/3.6.png" },
    { src: "/3.7.png" },
  ];

  // เลือกแสดงผล 3 รูปแรกถ้า showAll เป็น false
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative">

      {/* --- Lightbox Modal (แสดงเมื่อมีการคลิกที่รูปภาพ) --- */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          {/* ปุ่มปิด */}
          <button
            className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors z-[110]"
            onClick={() => setSelectedImg(null)}
          >
            <X size={40} />
          </button>

          {/* รูปภาพเต็มหน้าจอ */}
          <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center">
            <Image
              src={selectedImg}
              alt="Full view"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        {/* --- Sidebar - Left Section --- */}
        <aside className="w-full md:w-[320px] lg:w-[380px] bg-slate-900 text-white p-6 md:p-10 flex flex-col shrink-0">
          <div className="text-center md:text-left mb-8 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-400">
              THANADOL <br className="hidden md:block" />
              <span className="text-white"> JAMPATEM</span>
            </h1>
            <div className="h-1 w-20 bg-blue-500 mt-4 mb-2 mx-auto md:mx-0"></div>
            <p className="text-xs md:text-sm font-medium tracking-[0.2em] text-slate-400 uppercase">
              Frontend Developer
            </p>
          </div>

          <div className="flex justify-center mb-10 md:mb-12">
            <div className="relative w-40 h-48 md:w-48 md:h-56 group">
              <div className="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-6 group-hover:rotate-3 transition-transform"></div>
              <div className="relative w-full h-full border-2 border-slate-700 rounded-[2rem] overflow-hidden bg-slate-800 shadow-2xl">
                <Image src="/me.jpg" alt="Profile" fill className="object-cover" priority />
              </div>
            </div>
          </div>

          <div className="mb-8 md:mb-10">
            <h2 className="text-base md:text-lg font-bold flex items-center gap-2 mb-4 md:mb-6 border-b border-slate-700 pb-2 uppercase tracking-wider">
              <Mail size={18} className="text-blue-400" /> Contacts
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 md:gap-4 text-xs md:text-sm text-slate-300">
              <li className="flex items-start gap-3 col-span-full">
                <Mail size={16} className="mt-1 text-blue-400 shrink-0" />
                <span className="break-all">Thanadolpetch22@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400 shrink-0" />
                <span>+66 61 912 6201</span>
              </li>
              <li className="flex items-center gap-3">
                <Facebook size={16} className="text-blue-400 shrink-0" />
                <span className="truncate">Thanadol Jampatem</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="text-blue-400 shrink-0" />
                <span>thanadol_jpt</span>
              </li>
              <li className="flex items-start gap-3 col-span-full">
                <MapPin size={16} className="mt-1 text-blue-400 shrink-0" />
                <span>Samutsongkharm, Thailand</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base md:text-lg font-bold flex items-center gap-2 mb-4 md:mb-6 border-b border-slate-700 pb-2 uppercase tracking-wider text-blue-400">
              <Code2 size={18} /> Skills
            </h2>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {[
                { name: "Dart", level: "Junior" },
                { name: "PHP", level: "Junior" },
                { name: "HTML / CSS", level: "Junior" },
                { name: "TypeScript", level: "Junior" },
                { name: "Python", level: "Junior" },
                { name: "Java", level: "Junior" },
                { name: "SQL", level: "Junior" },
                { name: "UX/UI Design", level: "Junior" },
              ].map((skill) => (
                <div key={skill.name} className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg flex flex-col items-start transition-all hover:border-blue-500 hover:bg-slate-700 group">
                  <span className="text-xs md:text-sm font-semibold text-white group-hover:text-blue-400">{skill.name}</span>
                  <span className="text-[10px] text-slate-500 uppercase font-medium tracking-tighter">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* --- Main Content --- */}
        <main className="flex-1 p-6 sm:p-10 md:p-16 max-w-5xl mx-auto w-full">

          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-slate-900 mb-6 uppercase tracking-tight">
              <User className="text-blue-600" /> About Me
            </h2>
            <div className="text-base md:text-lg leading-relaxed text-slate-600 text-justify tracking-tighter md:tracking-normal">
              <p>I am a passionate developer with a deep interest in building modern websites and applications. I thrive on the challenges of software development and am constantly exploring new technologies to enhance my technical skills.</p>
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-slate-900 mb-8 uppercase tracking-tight text-justify">
              <GraduationCap className="text-blue-600" /> Education
            </h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-200">
              <div className="relative pl-10">
                <div className="absolute left-0 top-1.5 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-md"></div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800">University (Present)</h3>
                <p className="text-blue-600 font-medium">Rajamangala University of Technology Thanyaburi</p>
                <p className="text-sm text-slate-500 mt-1">Major in Computer Engineering</p>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-0 top-1.5 w-6 h-6 bg-white border-4 border-slate-300 rounded-full shadow-md"></div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800">High Vocational Certificate (Associate Degree)</h3>
                <p className="text-blue-600 font-medium">Samutsongkharm Technical College</p>
                <p className="text-sm text-slate-500 mt-1">Major in Software Developers</p>
              </div>
              <div className="relative pl-10">
                <div className="absolute left-0 top-1.5 w-6 h-6 bg-white border-4 border-slate-300 rounded-full shadow-md"></div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800">Vocational Certificate</h3>
                <p className="text-blue-600 font-medium">Samutsongkharm Technical College</p>
                <p className="text-sm text-slate-500 mt-1">Major in Information Technology</p>
              </div>

            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-slate-900 mb-8 uppercase tracking-tight">
              <Briefcase className="text-blue-600" /> Internship
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { company: "Bangkok Web Solution", role: "Frontend Developer & Design UX/UI" },
                { company: "Muang Thai Capital", role: "Customer data recording" },
                { company: "Office of Natural Resources", role: "Manage submitted document data" },
              ].map((item, idx) => (
                <div key={idx} className="p-5 md:p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all">
                  <h3 className="font-bold text-base md:text-lg text-slate-800 underline decoration-blue-500/30 underline-offset-4">{item.company}</h3>
                  <p className="text-blue-600 text-sm mt-2 font-medium">{item.role}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-slate-900 mb-8 uppercase tracking-tight">
              <Globe className="text-blue-600" /> Projects
            </h2>
            <div className="space-y-6 md:space-y-8 text-justify">

              <div className="group p-6 md:p-8 bg-white border border-slate-200 rounded-[1.5rem] md:rounded-[2rem] shadow-sm hover:border-blue-200 hover:shadow-lg transition-all">
                <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-3 flex flex-wrap items-center gap-2">
                  BangkokSpaAcademy <span className="text-[10px] font-normal text-slate-500 bg-slate-100 px-3 py-1 rounded-full italic uppercase tracking-wider">Web App</span>
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed  tracking-tighter md:tracking-normal">
                  Developed a comprehensive platform for a spa academy. Features an online course catalog and a professional storefront with a clean, calming aesthetic to enhance user experience.
                </p>
              </div>
              <div className="group p-6 md:p-8 bg-white border border-slate-200 rounded-[1.5rem] md:rounded-[2rem] shadow-sm hover:border-blue-200 hover:shadow-lg transition-all">
                <h3 className="text-lg md:text-xl font-bold text-blue-800 mb-3 flex flex-wrap items-center gap-2">
                  Ec Students Projects <span className="text-[10px] font-normal text-slate-500 bg-slate-100 px-3 py-1 rounded-full italic uppercase tracking-wider">Mobile App</span>
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed  tracking-tighter md:tracking-normal">
                  Developed a centralized application to digitize and manage the department&apos;s historical project archives. QR code scanning for seamless borrowing/returning and an automated faculty approval workflow.                </p>
              </div>
            </div>
          </section>

          {/* --- Portfolio Gallery Section --- */}
          <section className="mt-12">
            <div className="flex flex-col gap-6 p-6 md:p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 uppercase tracking-tight text-center md:text-left">Portfolio Showcase</h2>
                  <p className="text-sm md:text-base text-slate-500 font-medium text-center md:text-left italic">Click on image to view full size</p>
                </div>
                <div className="text-blue-600 font-semibold text-sm flex items-center gap-2 justify-center md:justify-start">
                  <ZoomIn size={16} /> Showcase Gallery
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {displayedProjects.map((item, index) => (
                  <div
                    key={index}
                    className="group relative animate-in fade-in zoom-in duration-500 cursor-zoom-in"
                    onClick={() => setSelectedImg(item.src)}
                  >
                    <div className="relative aspect-video md:aspect-square overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 transition-all duration-300 group-hover:shadow-xl group-hover:ring-4 group-hover:ring-blue-500/20 group-hover:-translate-y-1">
                      <Image src={item.src} alt={`Work ${index + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/40 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <ZoomIn size={24} className="text-white" />
                        </div>
                      </div>


                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-6 border-t border-slate-100 flex justify-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-slate-200 active:scale-95 flex items-center gap-2 group"
                >
                  {showAll ? (
                    <>Show Less <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" /></>
                  ) : (
                    <>View All Projects <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" /></>
                  )}
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}