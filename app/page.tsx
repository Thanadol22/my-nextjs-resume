import { Code2, MonitorPlay, Smartphone, Briefcase, Award, GraduationCap, Mail, Phone, MapPin, Instagram, Linkedin, Github, Coffee, MessageCircle, Edit3, Facebook, LineChart } from "lucide-react";
import banner1 from "../assets/banner/1.png";
import banner2 from "../assets/banner/2.png";
import banner3 from "../assets/banner/3.png";
import banner4 from "../assets/banner/4.png";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white font-sans pb-20">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-12 lg:px-24 py-6 bg-sky-50 w-full border-b border-gray-50 sticky top-0 z-50">
        <div className="font-bold text-xl text-sky-500 flex gap-2">
          <span className=" text-sky-500 px-2 py-1 rounded">THANA<span className="px-1 py-1 text-gray-800 tracking-widest">DOL</span></span>

        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
          <a href="#intro" className="text-sky-500 border-b-2 border-sky-500 pb-1">Intro</a>
          <a href="#about" className="hover:text-sky-500 transition">About</a>
          <a href="#project" className="hover:text-sky-500 transition">Project</a>
          <a href="#contact" className="hover:text-sky-500 transition">Contact</a>
        </div>
        <a href="#contact" className="bg-sky-500 text-white px-6 py-2 border-none rounded-full text-sm font-semibold hover:bg-sky-600 transition inline-flex items-center justify-center cursor-pointer">
          Hire Me
        </a>
      </nav>

      {/* Hero Section */}
      <section id="intro" className="relative bg-sky-50 text-center w-full pt-16 pb-24 md:pb-24 overflow-hidden md:overflow-visible">
        <div className="max-w-6xl mx-auto relative">



          {/* Floating Tags Placeholders */}
          <div className="hidden md:flex absolute top-8 md:-top-4 left-16 md:left-[25%] w-16 h-16 rounded-full bg-white shadow-xl shadow-sky-100/50 items-center justify-center text-xs font-bold text-sky-500 z-0 animate-bounce" style={{ animationDuration: '3s' }}>HTML</div>
          <div className="hidden md:flex absolute top-32 md:top-36 left-4 md:left-[5%] w-16 h-16 rounded-full bg-white shadow-xl shadow-sky-100/50 items-center justify-center text-[10px] font-bold text-sky-500 text-center leading-tight z-0 animate-bounce" style={{ animationDuration: '4s' }}>Tailwind<br />CSS</div>
          <div className="hidden md:flex absolute top-[16rem] md:top-[18rem] left-24 md:left-[18%] w-12 h-12 rounded-full bg-white shadow-xl shadow-sky-100/50 items-center justify-center text-[10px] font-bold text-sky-500 z-0 animate-bounce" style={{ animationDuration: '3.5s' }}>CSS</div>
          <div className="hidden md:flex absolute top-[22rem] md:top-[28rem] left-8 md:left-[8%] w-14 h-14 rounded-full bg-white shadow-xl shadow-sky-100/50 items-center justify-center text-xs font-bold text-sky-500 z-0 animate-bounce" style={{ animationDuration: '4.5s' }}>JS</div>

          <div className="hidden md:flex absolute top-10 md:-top-2 right-16 md:right-[22%] w-14 h-14 rounded-full bg-white shadow-xl shadow-sky-100/50 items-center justify-center text-[10px] font-bold text-sky-500 z-0 animate-bounce" style={{ animationDuration: '3.2s' }}>Flutter</div>
          <div className="hidden md:flex absolute top-28 md:top-32 right-4 md:right-[6%] w-14 h-14 rounded-full bg-white shadow-xl shadow-sky-100/50 items-center justify-center text-[11px] font-bold text-sky-500 z-0 animate-bounce" style={{ animationDuration: '4.2s' }}>PHP</div>
          <div className="hidden md:flex absolute top-[14rem] md:top-[17rem] right-24 md:right-[18%] w-12 h-12 rounded-full bg-white shadow-xl shadow-sky-100/50 items-center justify-center text-[10px] font-bold text-sky-500 z-0 animate-bounce" style={{ animationDuration: '3.8s' }}>Python</div>
          <div className="hidden md:flex absolute top-[21rem] md:top-[26rem] right-40 md:right-[5%] w-14 h-14 rounded-full bg-white shadow-xl shadow-sky-100/50 items-center justify-center text-[10px] font-bold text-sky-500 z-0 animate-bounce" style={{ animationDuration: '4.1s' }}>MySQL</div>
          <div className="hidden md:flex absolute -top-6 md:-top-10 right-1/3 md:right-[40%] w-12 h-12 rounded-full bg-white shadow-xl shadow-sky-100/50 items-center justify-center text-[9px] font-bold text-sky-500 z-0 animate-bounce" style={{ animationDuration: '3.6s' }}>Firebase</div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight relative z-10 pt-4">
            Make Your Application Design<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 animate-pulse">Come True</span>
          </h1>

          <p className="mt-6 text-gray-500 text-sm md:text-base max-w-xl mx-auto relative z-10 px-4">
            Turn your business concepts into powerful digital assets. We don't just build websites and applications; we create strategic tools designed to drive growth, enhance user engagement, and streamline your operations. Let us handle the technical complexity so you can focus on leading your industry.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 px-6 md:px-0 justify-center relative z-10">
            <a href="#project" className="bg-sky-500 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-sky-600 shadow-xl shadow-sky-500/30 transition inline-flex items-center justify-center cursor-pointer w-full md:w-auto">
              Explore My Project
            </a>
            <a href="#contact" className="bg-sky-100 text-sky-600 px-8 py-3 rounded-full text-sm font-semibold hover:bg-sky-200 transition inline-flex items-center justify-center cursor-pointer w-full md:w-auto">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="-mt-[52px] md:-mt-[60px] mx-auto max-w-4xl bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(14,165,233,0.2)] hover:-translate-y-1 transition-all duration-300 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row justify-around items-center border border-gray-50 relative z-20 w-[90%] lg:w-full group">
        <div className="flex items-center gap-4 w-full md:w-1/3 justify-center md:justify-start md:pl-6 group-hover:scale-105 transition-transform duration-300">
          <div className="bg-sky-50 p-4 rounded-2xl"><MonitorPlay className="w-6 h-6 text-sky-500" /></div>
          <div className="text-left">
            <p className="text-xs text-gray-400 font-semibold mb-1">Web Developing</p>
            <p className="text-2xl font-bold text-gray-800 tracking-tight">2</p>
          </div>
        </div>
        <div className="h-12 w-px bg-gray-100 hidden md:block"></div>
        <div className="flex items-center gap-4 mt-6 md:mt-0 w-full md:w-1/3 justify-center group-hover:scale-105 transition-transform duration-300 xl:delay-75">
          <div className="bg-sky-50 p-4 rounded-2xl"><Smartphone className="w-6 h-6 text-sky-500" /></div>
          <div className="text-left">
            <p className="text-xs text-gray-400 font-semibold mb-1">Mobile Developing</p>
            <p className="text-2xl font-bold text-gray-800 tracking-tight">2</p>
          </div>
        </div>
        <div className="h-12 w-px bg-gray-100 hidden md:block"></div>
        <div className="flex items-center gap-4 mt-6 md:mt-0 w-full md:w-1/3 justify-center md:justify-end md:pr-6 group-hover:scale-105 transition-transform duration-300 xl:delay-150">
          <div className="bg-sky-50 p-4 rounded-2xl"><Code2 className="w-6 h-6 text-sky-500" /></div>
          <div className="text-left">
            <p className="text-xs text-gray-400 font-semibold mb-1">Backend Developing</p>
            <p className="text-2xl font-bold text-gray-800 tracking-tight">2</p>
          </div>
        </div>
      </div>

      {/* About / Skills Section */}
      <section id="about" className="pt-24 md:pt-28 pb-20 px-6 md:px-12 lg:px-24 bg-white w-full flex flex-col gap-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
            {/* Left: Profile Image */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
              {/* Background circles effect */}
              <div className="absolute inset-0 flex items-center justify-center -z-10 group">
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-sky-50 rounded-full animate-pulse opacity-70"></div>
                <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border border-sky-300 border-dashed animate-[spin_10s_linear_infinite]"></div>
              </div>

              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-white border-[6px] md:border-[8px] border-white shadow-2xl flex flex-col items-center justify-center relative overflow-visible group hover:-translate-y-2 hover:shadow-sky-500/20 transition-all duration-500">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img src="/me.jpg" alt="Profile" className="w-full h-full object-cover object-top scale-100 group-hover:scale-110 transition-transform duration-700" />
                </div>

                {/* Floating Developer Badge */}
                <div className="absolute -right-2 sm:-right-6 top-12 sm:top-24 bg-sky-500 p-3 sm:p-4 rounded-xl shadow-xl shadow-sky-500/40 border-4 border-white animate-bounce" style={{ animationDuration: '3s' }}>
                  <Code2 className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Profile Info Card */}
                <div className="absolute -bottom-6 bg-white px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-50 text-center w-max group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="font-bold text-gray-800 text-sm sm:text-lg">Thanadol Jampatem</h3>
                  <p className="text-[10px] sm:text-xs text-sky-500 font-semibold mt-1">Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Right: Bio */}
            <div className="w-full md:w-1/2 md:pt-14 text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 leading-tight">
                Hello,<br className="hidden md:block" /> <span className="text-sky-500 whitespace-normal md:whitespace-nowrap">I&apos;m Thanadol Jampatem</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base mt-6 leading-relaxed max-w-lg mx-auto md:mx-0">
                I am a passionate developer with a deep interest in building modern websites and applications.
                I thrive on the challenges of software development and am constantly exploring new technologies to enhance my technical skills.
              </p>
            </div>
          </div></div>

        {/* Bottom: Skills */}
        <div className="w-full bg-white rounded-[2rem] shadow-xl shadow-gray-100/50 p-8 md:p-12 border border-gray-100">
          <h4 className="font-extrabold text-gray-800 text-2xl mb-10 text-center">Technical Skills</h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div className="flex flex-col">
              <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
                <MonitorPlay className="w-4 h-4 text-sky-500" />
                Frontend
              </h5>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "Tailwind CSS", "JavaScript"].map((skill) => (
                  <span key={skill} className="bg-sky-50 text-sky-600 border border-sky-100/50 px-3 py-1.5 rounded-lg text-xs font-bold transition hover:bg-sky-100">{skill}</span>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
                <Smartphone className="w-4 h-4 text-sky-500" />
                Mobile
              </h5>
              <div className="flex flex-wrap gap-2">
                {["Flutter (Dart)"].map((skill) => (
                  <span key={skill} className="bg-sky-50 text-sky-600 border border-sky-100/50 px-3 py-1.5 rounded-lg text-xs font-bold transition hover:bg-sky-100">{skill}</span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="flex flex-col">
              <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
                <Code2 className="w-4 h-4 text-sky-500" />
                Backend
              </h5>
              <div className="flex flex-wrap gap-2">
                {["PHP", "MySQL", "Firebase", "Python"].map((skill) => (
                  <span key={skill} className="bg-sky-50 text-sky-600 border border-sky-100/50 px-3 py-1.5 rounded-lg text-xs font-bold transition hover:bg-sky-100">{skill}</span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-col">
              <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
                <Briefcase className="w-4 h-4 text-sky-500" />
                Tools
              </h5>
              <div className="flex flex-wrap gap-2">
                {["Visual Studio Code", "Antigravity", "Github", "Figma", "Photoshop", "Canva"].map((skill) => (
                  <span key={skill} className="bg-sky-50 text-sky-600 border border-sky-100/50 px-3 py-1.5 rounded-lg text-xs font-bold transition hover:bg-sky-100">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="bg-sky-50/50 py-20 px-6 md:px-12 lg:px-24 w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-extrabold text-gray-800 mb-10">Internship</h3>
            <div className="flex flex-col gap-6">
              {/* Card 1 */}
              <div className="bg-white px-6 py-5 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex gap-6 items-center hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition duration-300">
                <div className="bg-sky-50 p-4 rounded-2xl shrink-0 text-sky-500">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sky-500 text-sm">Bangkok Web Solution</h4>
                  <ul className="text-gray-600 text-xs mt-2 list-disc pl-4 space-y-1">
                    <li>Designed user-centric UI/UX layouts using Figma to enhance digital experiences.</li>
                    <li>Developed responsive web interfaces with HTML, CSS, Tailwind CSS, and PHP.</li>
                    <li>Collaborated with mentors to deliver high-quality tasks within project deadlines.</li>
                  </ul>
                  <p className="text-gray-400 text-[11px] mt-2">April 2025 - June 2025</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white px-6 py-5 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex gap-6 items-center hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition duration-300">
                <div className="bg-sky-50 p-4 rounded-2xl shrink-0 text-sky-500">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sky-500 text-sm">Muang Thai Capital</h4>
                  <ul className="text-gray-600 text-xs mt-2 list-disc pl-4 space-y-1">
                    <li>Processed customer payments and financial transactions via SAP with high accuracy.</li>
                    <li>Collaborated with Accounting and Finance teams to ensure precise financial data reconciliation.</li>                  </ul>
                  <p className="text-gray-400 text-[11px] mt-2">March 2022 - May 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-extrabold text-gray-800 mb-10">Education</h3>
            <div className="flex flex-col gap-6">
              {/* Card 1 */}
              <div className="bg-white px-6 py-5 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex gap-6 items-center hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition duration-300">
                <div className="bg-sky-50 p-4 rounded-2xl shrink-0 text-sky-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sky-500 text-sm">Bachelor of Engineering (Computer Engineering)</h4>
                  <p className="text-gray-500 text-[11px] mt-1 line-clamp-1">Rajamangala University of Technology Thanyaburi</p>
                  <p className="text-gray-400 text-[11px] mt-1">2023 - 2026</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white px-6 py-5 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex gap-6 items-center hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition duration-300">
                <div className="bg-sky-50 p-4 rounded-2xl shrink-0 text-sky-500">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sky-500 text-sm">High Vocational Certificate (Software Developers)</h4>
                  <p className="text-gray-500 text-[11px] mt-1 line-clamp-1">Samutsongkharm Technical College</p>
                  <p className="text-gray-400 text-[11px] mt-1">2021 - 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="bg-white py-20 px-6 md:px-12 lg:px-24 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-2xl font-extrabold text-gray-800">Project Experience</h3>

          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_-5px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition duration-300 flex flex-col h-full">
              <div className="h-64 w-full bg-[#f4f6f8] flex items-center justify-center text-[#8eb0c8] relative overflow-hidden shrink-0">
                <span className="absolute top-4 right-4 bg-sky-500 text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-lg shadow-sky-500/20 z-10">Web Application</span>
                <img src={banner1.src} alt="Project 1" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h4 className="font-bold text-gray-800 text-lg md:text-[20px] leading-snug mb-3">Massage course and spa product management system</h4>
                <span className="text-sky-500 text-[15px] font-bold block mb-4">(Excellent Project Award)</span>
                <ul className="text-[13px] text-gray-500 mb-8 leading-relaxed flex-1 list-disc pl-4 space-y-1.5">
                  <li>Developed a Full-stack Spa System (PHP/MySQL) integrating booking, inventory, and POS.</li>
                  <li>Automated Email Notifications to streamline booking confirmations and user communication.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="bg-gray-50 text-gray-500 px-3.5 py-1.5 rounded-lg text-[11px] font-bold border border-gray-100">PHP</span>
                  <span className="bg-gray-50 text-gray-500 px-3.5 py-1.5 rounded-lg text-[11px] font-bold border border-gray-100">MySQL</span>
                  <span className="bg-gray-50 text-gray-500 px-3.5 py-1.5 rounded-lg text-[11px] font-bold border border-gray-100">JavaScript</span>
                  <span className="bg-gray-50 text-gray-500 px-3.5 py-1.5 rounded-lg text-[11px] font-bold border border-gray-100">CSS</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_-5px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition duration-300 flex flex-col h-full">
              <div className="h-64 w-full bg-[#f4f6f8] flex items-center justify-center text-[#8eb0c8] relative overflow-hidden shrink-0">
                <span className="absolute top-4 right-4 bg-sky-500 text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-lg shadow-sky-500/20 z-10">Web Application</span>
                <img src={banner2.src} alt="Project 2" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h4 className="font-bold text-gray-800 text-lg md:text-[20px] leading-snug mb-3">University Shuttle Tracking (KMUTNB)</h4>
                <ul className="text-[13px] text-gray-500 mb-8 leading-relaxed flex-1 list-disc pl-4 space-y-1.5">
                  <li>Developed a Multi-platform Tracking System (Web & Mobile) for university shuttles, featuring dedicated interfaces for admins, students, and drivers.
                  </li>
                  <li>Integrated ESP32 and GT-U7 GPS Modules to stream real-time vehicle locations and live updates via Firebase.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="bg-gray-50 text-gray-500 px-3.5 py-1.5 rounded-lg text-[11px] font-bold border border-gray-100">PHP</span>
                  <span className="bg-gray-50 text-gray-500 px-3.5 py-1.5 rounded-lg text-[11px] font-bold border border-gray-100">Firebase</span>
                  <span className="bg-gray-50 text-gray-500 px-3.5 py-1.5 rounded-lg text-[11px] font-bold border border-gray-100">Tailwind CSS</span>

                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_-5px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition duration-300 flex flex-col h-full">
              <div className="h-64 w-full bg-[#f4f6f8] flex items-center justify-center text-[#8eb0c8] relative overflow-hidden shrink-0">
                <span className="absolute top-4 right-4 bg-sky-500 text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-lg shadow-sky-500/20 z-10">Mobile App</span>
                <img src={banner3.src} alt="Project 3" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h4 className="font-bold text-gray-800 text-lg md:text-[20px] leading-snug mb-3">University Shuttle Tracking (KMUTNB)</h4>
                <ul className="text-[13px] text-gray-500 mb-8 leading-relaxed flex-1 list-disc pl-4 space-y-1.5">
                  <li>Developed a Multi-platform Tracking System (Web & Mobile) for university shuttles, featuring dedicated interfaces for admins, students, and drivers.</li>
                  <li>Integrated ESP32 and GT-U7 GPS Modules to stream real-time vehicle locations and live updates via Firebase.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="bg-gray-50 text-gray-500 px-3.5 py-1.5 rounded-lg text-[11px] font-bold border border-gray-100">Flutter (Dart)</span>
                  <span className="bg-gray-50 text-gray-500 px-3.5 py-1.5 rounded-lg text-[11px] font-bold border border-gray-100">Firebase</span>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_-5px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition duration-300 flex flex-col h-full">
              <div className="h-64 w-full bg-[#f4f6f8] flex items-center justify-center text-[#8eb0c8] relative overflow-hidden shrink-0">
                <span className="absolute top-4 right-4 bg-sky-500 text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-lg shadow-sky-500/20 z-10">Mobile App</span>
                <img src={banner4.src} alt="Project 4" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h4 className="font-bold text-gray-800 text-lg md:text-[20px] leading-snug mb-3">Borrow & Return: Project Reports</h4>
                <ul className="text-[13px] text-gray-500 mb-8 leading-relaxed flex-1 list-disc pl-4 space-y-1.5">
                  <li>Developed a Flutter & Firebase app for digitizing project archives with QR Code scanning for easy borrowing.
                  </li>
                  <li>Integrated an automated approval system to track borrowing history and streamline faculty authorizations.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="bg-gray-50 text-gray-500 px-3.5 py-1.5 rounded-lg text-[11px] font-bold border border-gray-100">Flutter (Dart)</span>
                  <span className="bg-gray-50 text-gray-500 px-3.5 py-1.5 rounded-lg text-[11px] font-bold border border-gray-100">Firebase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-50/50 py-20 px-6 md:px-12 lg:px-24 w-full relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10 items-center">
          {/* Left: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-gray-800 mb-10 w-full">Contact</h3>

            {/* Profile & Social Group */}
            <div className="flex flex-col items-center">
              {/* Contact Image */}
              <div className="relative w-56 h-56 bg-sky-100 rounded-full border-[6px] border-white shadow-2xl mb-8 overflow-hidden group">
                <img src="/me2.webp" alt="Contact Profile" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>

              <p className="text-sky-500 font-bold text-sm mb-6 text-center">Social Media & Productivity</p>
              <div className="flex gap-4 justify-center">
                <a href="https://www.instagram.com/thanadol_jpt/" className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 hover:-translate-y-1 transition"><Instagram className="w-4 h-4" /></a>
                <a href="https://www.facebook.com/thanadol.petch" className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 hover:-translate-y-1 transition"><Facebook className="w-4 h-4" /></a>
                <a href="https://github.com/Thanadol22" className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 hover:-translate-y-1 transition"><Github className="w-4 h-4" /></a>
              </div>
            </div>
          </div>

          {/* Right: Contact Cards */}
          <div className="relative w-full h-full flex flex-col justify-center items-center md:items-end gap-6 py-10 md:py-0">
            {/* Abstract Background Circles */}
            <div className="absolute top-1/2 left-1/2 md:left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] rounded-full border-[1px] border-sky-200 -z-10 flex items-center justify-center">
              <div className="w-[16rem] h-[16rem] md:w-[20rem] md:h-[20rem] rounded-full border-[1px] border-sky-200 relative">
                <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-sky-500 rounded-full"></div>
                <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-sky-500 rounded-full"></div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white w-full max-w-sm rounded-[1.5rem] p-4 flex items-center gap-4 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-50 transform md:-translate-x-12 hover:-translate-y-1 transition duration-300">
              <div className="bg-sky-50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-sky-500" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sky-500 text-[11px] font-bold">Email</p>
                <p className="text-gray-600 text-[11px] font-semibold mt-0.5">thanadolpetch22@gmail.com</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/30 cursor-pointer">
                <Edit3 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white w-full max-w-sm rounded-[1.5rem] p-4 flex items-center gap-4 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-50 transform md:translate-x-4 hover:-translate-y-1 transition duration-300">
              <div className="bg-sky-50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-sky-500" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sky-500 text-[11px] font-bold">Phone</p>
                <p className="text-gray-600 text-[11px] font-semibold mt-0.5">+ 66 61 912 6201</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/30 cursor-pointer">
                <Phone className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white w-full max-w-sm rounded-[1.5rem] p-4 flex items-center gap-4 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-50 transform md:-translate-x-8 hover:-translate-y-1 transition duration-300">
              <div className="bg-sky-50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-sky-500" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sky-500 text-[11px] font-bold">Address</p>
                <p className="text-gray-600 text-[10px] font-semibold leading-tight mt-0.5">Samut Songkhram, Thailand</p>
              </div>
              <div className="w-7 h-7 rounded-full bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-sky-500/30 cursor-pointer">
                <MapPin className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
}
