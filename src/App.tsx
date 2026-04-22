import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// --- SVGs ---
const LogoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M 6 10 C 6 6 8 4 12 4 L 18 4 C 22 4 24 6 24 10 L 24 18 C 24 22 22 24 18 24 L 12 24 C 8 24 6 22 6 18 Z" />
    <path d="M 24 16 L 27 16 C 29 16 30 14 30 12 C 30 10 29 8 26 8 L 24 8" />
    <circle cx="11" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="17" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <path d="M 12 16 C 13 17.5 15 17.5 16 16" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const LineSunIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);
const MoonIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const ChevronDownIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const UserAvatarIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="11"
      fill="currentColor"
      opacity="0.3"
      stroke="currentColor"
      strokeOpacity="0.5"
      strokeWidth="1"
    />
    <path
      d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
      fill="currentColor"
    />
    <path
      d="M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const HeaderSunIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="5" fill="#eab308" />
    <path
      d="M12 3V4M12 20V21M5.63604 5.63604L6.34315 6.34315M17.6569 17.6569L18.364 18.364M3 12H4M20 12H21M5.63604 18.364L6.34315 17.6569M17.6569 6.34315L18.364 5.63604"
      stroke="#eab308"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const SlidersIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
);
const MenuIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const HeadphonesIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);
const CopyIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
const HeartIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const ShareIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);
const PenQuillIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.5 4.5L16 3L17.5 6.5L20.5 9L21 5.5L19.5 4.5Z" fill="#FBBF24" />
    <path
      d="M17.5 6.5L5.5 18.5C5 19 4.5 19.5 4 20C4.5 19.5 5 19 5.5 18.5L17.5 6.5Z"
      stroke="#FBBF24"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M4 20L2 22M4 20H6M4 20V18"
      stroke="#F59E0B"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const TargetIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

// --- Mock Data ---
const DATES = [
  {
    id: "d1",
    label: "Today",
    day: "21",
    month: "Apr",
    isDivider: false,
    dayOfWeek: "Tue",
    year: "2026",
    fullDay: "Tuesday",
  },
  {
    id: "d2",
    label: "Yesterday",
    day: "20",
    month: "Apr",
    isDivider: false,
    dayOfWeek: "Mon",
    year: "2026",
    fullDay: "Monday",
  },
  {
    id: "d3",
    label: "Sun",
    day: "19",
    month: "Apr",
    isDivider: false,
    dayOfWeek: "Sun",
    year: "2026",
    fullDay: "Sunday",
  },
  {
    id: "d4",
    label: "Sat",
    day: "18",
    month: "Apr",
    isDivider: false,
    dayOfWeek: "Sat",
    year: "2026",
    fullDay: "Saturday",
  },
  {
    id: "d5",
    label: "Fri",
    day: "17",
    month: "Apr",
    isDivider: false,
    dayOfWeek: "Fri",
    year: "2026",
    fullDay: "Friday",
  },
  { id: "y1", text: "Last Week", isDivider: true },
  {
    id: "d6",
    label: null,
    day: "14",
    month: "Apr",
    isDivider: false,
    dayOfWeek: "Tue",
    year: "2026",
    fullDay: "Tuesday",
  },
  { id: "y2", text: "Last Month", isDivider: true },
  {
    id: "d7",
    label: null,
    day: "21",
    month: "Mar",
    isDivider: false,
    dayOfWeek: "Sat",
    year: "2026",
    fullDay: "Saturday",
  },
];

const SpineRing = ({
  top,
  isDarkMode,
}: {
  top: string;
  isDarkMode: boolean;
}) => (
  <div
    className="absolute left-1/2 -translate-x-[50%] z-40 flex items-center justify-center pointer-events-none hidden lg:flex"
    style={{ top, width: "40px" }}
  >
    <svg
      width="40"
      height="16"
      viewBox="0 0 40 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: isDarkMode
          ? "drop-shadow(0px 4px 6px rgba(0,0,0,0.9))"
          : "drop-shadow(0px 3px 2px rgba(0,0,0,0.25))",
      }}
    >
      {/* Left Page Hole */}
      <circle cx="8" cy="8" r="3.5" fill={isDarkMode ? "#0a0a0a" : "#e2e8f0"} />
      <circle cx="8" cy="8" r="2.5" fill="#000000" />

      {/* Right Page Hole */}
      <circle
        cx="32"
        cy="8"
        r="3.5"
        fill={isDarkMode ? "#0a0a0a" : "#e2e8f0"}
      />
      <circle cx="32" cy="8" r="2.5" fill="#000000" />

      {/* Metallic Ring Loop - Single thick elegant loop */}
      <path
        d="M 6 8.5 C 14 1, 26 1, 34 8.5"
        stroke={isDarkMode ? "url(#metal-main-dark)" : "url(#metal-main)"}
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M 6 8 C 14 1, 26 1, 34 8"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity={isDarkMode ? 0.9 : 0.8}
      />
      <path
        d="M 6 9 C 14 2, 26 2, 34 9"
        stroke="#000000"
        strokeWidth="1"
        strokeLinecap="round"
        opacity={isDarkMode ? 0.8 : 0.4}
      />

      <defs>
        <linearGradient
          id="metal-main"
          x1="6"
          y1="5"
          x2="34"
          y2="5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#475569" />
          <stop offset="10%" stopColor="#94a3b8" />
          <stop offset="30%" stopColor="#f8fafc" />
          <stop offset="50%" stopColor="#e2e8f0" />
          <stop offset="70%" stopColor="#f8fafc" />
          <stop offset="85%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient
          id="metal-main-dark"
          x1="6"
          y1="5"
          x2="34"
          y2="5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="15%" stopColor="#cbd5e1" />
          <stop offset="30%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f8fafc" />
          <stop offset="70%" stopColor="#ffffff" />
          <stop offset="85%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const NavBar = ({
  isDarkMode,
  toggleTheme,
}: {
  isDarkMode: boolean;
  toggleTheme: () => void;
}) => (
  <nav className="w-full flex justify-between items-center px-4 md:px-10 h-[56px] shrink-0 bg-[#F9FAFB] dark:bg-[#0A0A0A] relative z-50 transition-colors duration-300 border-b border-transparent dark:border-[#262626]">
    <div className="flex items-center gap-3">
      <div className="text-gray-900 dark:text-gray-100 transition-colors">
        <LogoIcon />
      </div>
      <span className="font-extrabold text-[18px] sm:text-[20px] tracking-tight text-gray-900 dark:text-gray-100 transition-colors">
        StrongMe
      </span>
    </div>
    <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
      <span className="text-[14px] font-semibold text-gray-900 dark:text-white cursor-pointer transition-colors">
        Home
      </span>
      <span className="text-[14px] font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">
        Pricing
      </span>
      <span className="text-[14px] font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">
        Blog
      </span>
    </div>
    <div className="flex items-center gap-2 sm:gap-4">
      <button className="hidden md:flex items-center gap-1.5 text-gray-500 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-white font-medium text-[14px] px-2 py-1.5 transition-colors">
        <GlobeIcon /> <span>English</span> <ChevronDownIcon />
      </button>
      <button
        onClick={toggleTheme}
        className="hidden sm:flex text-gray-500 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-white transition-colors p-1.5 rounded-full"
      >
        {isDarkMode ? <MoonIcon /> : <LineSunIcon />}
      </button>
      <button className="hidden sm:flex items-center gap-2 bg-[#F1F5F9] dark:bg-[#1A1A1A] px-2 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-[#262626] transition-colors border border-gray-200 dark:border-[#262626] text-gray-600 dark:text-neutral-300">
        <span className="text-gray-400 dark:text-neutral-500 flex items-center justify-center">
          <UserAvatarIcon />
        </span>{" "}
        <span className="text-[14px] font-medium pr-1 text-gray-700 dark:text-neutral-200">
          Dong
        </span>{" "}
        <ChevronDownIcon />
      </button>
      <button className="flex lg:hidden p-1.5 text-gray-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-[#1A1A1A] rounded-md transition-colors">
        <MenuIcon />
      </button>
    </div>
  </nav>
);

const ImageCard = () => (
  <div className="w-[85%] max-w-[280px] bg-white dark:bg-[#1A1A1A] p-3 pb-4 rounded-[20px] shadow-[0_16px_30px_-8px_rgba(0,0,0,0.1),0_4px_12px_-2px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)] dark:shadow-[0_16px_30px_-8px_rgba(0,0,0,0.6),0_4px_12px_-2px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.03)] flex flex-col items-center border border-gray-100 dark:border-[#262626] transform -rotate-[1deg] hover:rotate-0 transition-all duration-300">
    <div className="w-full aspect-[4/5] rounded-[14px] relative overflow-hidden flex flex-col mb-1 border border-gray-50 dark:border-[#1A1A1A] shadow-inner">
      {/* Sky */}
      <div className="flex-[3.5] bg-gradient-to-b from-[#7bc4f2] to-[#aee1f9] relative overflow-hidden">
        {/* Clouds */}
        <div className="absolute bottom-[20%] left-[30%] flex items-end opacity-90">
          <div className="w-[35px] h-[22px] bg-white rounded-full translate-x-3"></div>
          <div className="w-[50px] h-[34px] bg-white rounded-full z-10 shadow-sm"></div>
          <div className="w-[40px] h-[26px] bg-white rounded-full -translate-x-3"></div>
        </div>

        <div className="absolute top-[20%] right-[15%] flex items-end opacity-70 scale-75">
          <div className="w-[35px] h-[22px] bg-white rounded-full translate-x-3"></div>
          <div className="w-[45px] h-[30px] bg-white rounded-full z-10"></div>
          <div className="w-[35px] h-[22px] bg-white rounded-full -translate-x-3"></div>
        </div>
      </div>
      {/* Ocean/Hills */}
      <div className="h-[15%] w-full bg-[#1b6bcf] relative shrink-0">
        {/* Boat / Figure */}
        <div className="absolute -top-[14px] left-[55%] -translate-x-1/2 flex flex-col items-center">
          <div className="w-[8px] h-[16px] bg-[#e46a36] rounded-t-sm z-20 shadow-sm"></div>
          <div className="w-[20px] h-[6px] bg-[#c24f1c] rounded-b-md z-30 mb-px shadow-md"></div>
        </div>
      </div>
      {/* Field/Sand */}
      <div className="h-[20%] w-full bg-[#f2bd1b] relative shrink-0">
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-multiply"
          style={{
            backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
            backgroundSize: "5px 5px",
          }}
        ></div>
      </div>
    </div>
  </div>
);

const LeftPageContent = ({
  content,
  dateInfo,
  calendarDates,
  activeDate,
  setActiveDate,
  isDarkMode,
  isBackFace = false,
}: any) => (
  <div
    className={`p-5 sm:p-7 xl:p-10 pt-6 sm:pt-8 xl:pt-10 flex flex-col min-h-max h-full ${isBackFace ? "pointer-events-none opacity-90" : ""}`}
  >
    <header className="flex justify-between items-start shrink-0 z-20">
      <div className="flex items-center gap-3">
        <HeaderSunIcon />
        <div className="flex flex-col text-[14px] leading-snug">
          <span className="font-bold text-[#D97706] dark:text-amber-500 tracking-wide text-[13px] uppercase transition-colors">
            {dateInfo?.fullDay || "Sunday"}
          </span>
          <span className="text-gray-800 dark:text-white font-bold tracking-tight text-[15px] transition-colors">
            {dateInfo
              ? `${dateInfo.month} ${dateInfo.day}, ${dateInfo.year}`
              : "May 25, 2025"}
          </span>
        </div>
      </div>
      <button className="bg-gray-50 dark:bg-[#1A1A1A]/80 border border-gray-100 dark:border-[#262626] p-2.5 rounded-[14px] hover:bg-gray-100 dark:hover:bg-[#262626] transition-colors text-gray-500 dark:text-neutral-400 shadow-sm">
        <SlidersIcon />
      </button>
    </header>
    <div className="flex-1 flex flex-col justify-center items-center mt-6 z-20">
      <ImageCard />
      <p className="text-center text-[15px] text-gray-500 dark:text-neutral-400 font-bold tracking-widest mt-8 uppercase transition-colors">
        {content.imageCaption}
      </p>
    </div>
    <div
      className={`shrink-0 mt-8 w-full max-w-[340px] mx-auto z-20 ${isBackFace ? "opacity-50" : ""}`}
    >
      <div className="flex justify-between items-center text-[13px] font-bold text-gray-300 dark:text-neutral-600 mb-6 px-2 transition-colors">
        {calendarDates.map((d: any) => {
          const isSelect = d.id === activeDate;
          return (
            <div
              key={d.id}
              onClick={() =>
                !isBackFace && setActiveDate && setActiveDate(d.id)
              }
              className="flex flex-col items-center gap-2.5 cursor-pointer group"
            >
              <span
                className={`transition-colors ${isSelect ? "text-blue-400 dark:text-blue-400" : "group-hover:text-gray-400 dark:group-hover:text-neutral-400"}`}
              >
                {d.dayOfWeek}
              </span>
              <div
                className={`w-[34px] h-[34px] flex items-center justify-center rounded-full font-bold text-[14px] transition-all duration-300 ${isSelect ? "bg-blue-400 text-white shadow-[0_4px_10px_rgba(96,165,250,0.4)] transform scale-110" : "text-gray-700 dark:text-neutral-300 group-hover:bg-gray-100 dark:group-hover:bg-[#1A1A1A]"}`}
              >
                {d.day}
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-8">
        <h3 className="font-extrabold text-gray-900 dark:text-white text-[16px] tracking-tight transition-colors">
          {content.streak}
        </h3>
        <p className="text-gray-400 dark:text-neutral-400 text-[13px] mt-1.5 font-bold tracking-wide transition-colors">
          {content.msg}
        </p>
      </div>
    </div>
  </div>
);

const RightPageContent = ({ content, isDarkMode, isBackFace = false }: any) => (
  <div
    className={`p-5 sm:p-7 xl:p-10 pt-6 sm:pt-8 xl:pt-10 flex flex-col min-h-max h-full ${isBackFace ? "pointer-events-none opacity-90" : ""}`}
  >
    <div className="w-full rounded-[24px] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_0_2px_10px_rgba(255,255,255,0.8)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3),inset_0_2px_10px_rgba(255,255,255,0.02)] border border-gray-100 dark:border-[#262626] relative overflow-hidden shrink-0 bg-white dark:bg-[#1A1A1A] z-10 transition-colors duration-300">
      <div
        className={`absolute inset-0 bg-gradient-to-br transition-colors duration-300 ${isDarkMode ? "from-blue-900/10 via-transparent to-orange-900/10" : "from-blue-50/40 via-white/20 to-orange-50/40"}`}
      ></div>
      <div className="relative z-10">
        <div className="flex justify-between items-center text-[12px] text-gray-400 dark:text-neutral-500 font-bold uppercase tracking-wider transition-colors">
          <div className="flex items-center gap-2 text-gray-500 dark:text-neutral-400 transition-colors">
            <HeadphonesIcon /> <span>{content.promptTitle}</span>
          </div>
          <span>{content.time}</span>
        </div>
        <p
          className="text-[20px] font-black text-gray-800 dark:text-gray-100 text-center leading-[1.4] my-8 px-2 tracking-tight transition-colors"
          style={{ whiteSpace: "pre-line" }}
        >
          {content.promptText}
        </p>
        <div className="flex justify-center items-center gap-7 text-gray-400 dark:text-neutral-500">
          <button className="p-2 hover:bg-gray-50 dark:hover:bg-[#262626] rounded-full hover:text-gray-700 dark:hover:text-neutral-300 transition-colors">
            <CopyIcon />
          </button>
          <button className="p-2 hover:bg-gray-50 dark:hover:bg-[#262626] rounded-full hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
            <HeartIcon />
          </button>
          <button className="p-2 hover:bg-gray-50 dark:hover:bg-[#262626] rounded-full hover:text-gray-700 dark:hover:text-neutral-300 transition-colors">
            <ShareIcon />
          </button>
        </div>
      </div>
    </div>
    <div className="mt-8 flex-1 flex flex-col relative z-20">
      <div className="flex items-start gap-4 mb-4">
        <div className="pt-1 shrink-0 text-gray-400 dark:text-neutral-500 transition-colors">
          <PenQuillIcon />
        </div>
        <div className="flex-1 text-[15px] font-bold text-gray-400 dark:text-neutral-500 italic leading-relaxed transition-colors">
          Set an intention for today: What is one thing you want to accomplish
          or feel?
        </div>
      </div>
      <div className="flex-1 w-full relative min-h-[300px]">
        <div
          className="absolute inset-0 pointer-events-none transition-colors duration-300"
          style={{
            backgroundImage: `repeating-linear-gradient(transparent, transparent 39px, ${isDarkMode ? "#262626" : "#e2e8f0"} 39px, ${isDarkMode ? "#262626" : "#e2e8f0"} 40px)`,
            backgroundSize: "100% 40px",
          }}
        ></div>
        <textarea
          className="w-full h-full bg-transparent resize-none outline-none border-none text-[16px] leading-[40px] font-medium text-gray-700 dark:text-neutral-300 relative z-10 placeholder-transparent pt-[6px] transition-colors"
          defaultValue="I want to focus on positive thinking and being productive."
          readOnly={isBackFace}
        ></textarea>
      </div>
    </div>
    <div className="mt-4 flex justify-between items-center text-[13px] text-gray-400 dark:text-neutral-500 italic shrink-0 z-20 transition-colors">
      <div className="flex items-center gap-2">
        <TargetIcon />
        <span className="font-medium">Where are you right now...</span>
      </div>
      <span className="text-[12px] font-medium not-italic">120 words</span>
    </div>
  </div>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeDate, setActiveDate] = useState("d1");
  const prevDateRef = useRef(activeDate);
  const isNextRef = useRef(true);

  const flipPageRef = useRef<HTMLDivElement>(null);

  if (activeDate !== prevDateRef.current) {
    const currIndex = DATES.findIndex((d) => d.id === activeDate);
    const prevIndex = DATES.findIndex((d) => d.id === prevDateRef.current);
    isNextRef.current = currIndex > prevIndex;
  }

  // Initialize Dark Mode on Mount
  useEffect(() => {
    // If you prefer system default on mount, you can uncomment this:
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // setIsDarkMode(prefersDark);
  }, []);

  // GSAP Page Flip Animation
  useGSAP(() => {
    if (prevDateRef.current === activeDate) return;

    const shadowIntensity = isDarkMode ? "0.8" : "0.2";

    // Animate pages like a 180-degree physical notebook paper flip
    if (isNextRef.current) {
      // Next Page: 180 (on right) -> 0 (on left)
      gsap.fromTo(
        flipPageRef.current,
        {
          rotationY: 180,
          transformPerspective: 2500,
          zIndex: 50,
          scale: 1.05,
          boxShadow: `-20px 0 30px rgba(0,0,0,${shadowIntensity})`,
        },
        {
          rotationY: 0,
          scale: 1,
          zIndex: 40,
          duration: 1.1,
          ease: "sine.inOut",
          boxShadow: "0px 0 0px rgba(0,0,0,0)",
          clearProps: "boxShadow,transformPerspective",
        },
      );
    } else {
      // Prev Page: 0 (on left) -> 180 (on right)
      gsap.fromTo(
        flipPageRef.current,
        {
          rotationY: 0,
          transformPerspective: 2500,
          zIndex: 50,
          scale: 1.05,
          boxShadow: `20px 0 30px rgba(0,0,0,${shadowIntensity})`,
        },
        {
          rotationY: 180,
          scale: 1,
          zIndex: 40,
          duration: 1.1,
          ease: "sine.inOut",
          boxShadow: "0px 0 0px rgba(0,0,0,0)",
          clearProps: "boxShadow,transformPerspective",
        },
      );
    }

    prevDateRef.current = activeDate;
  }, [activeDate, isDarkMode]);

  // Content map based on date
  const dateContent = {
    d1: {
      imageCaption: "Today's Sunshine",
      promptTitle: "Afternoon Reflection",
      promptText: "What made you smile today?",
      time: "02:00 PM",
      streak: "5 Day Streak",
      msg: "You are on a roll!",
    },
    d2: {
      imageCaption: "Quiet Night",
      promptTitle: "Evening Calm",
      promptText: "List 3 things you are grateful for today.",
      time: "09:00 PM",
      streak: "4 Day Streak",
      msg: "Keep up the good work!",
    },
    d3: {
      imageCaption: "Spring Breeze",
      promptTitle: "Morning Energy",
      promptText:
        "Waking up with intention sets the tone\nfor a beautiful day ahead.",
      time: "09:00 AM",
      streak: "3 Day Streak",
      msg: "A fresh start awaits you today!",
    },
    d4: {
      imageCaption: "Weekend Time",
      promptTitle: "Weekend Vibes",
      promptText: "How are you resting this weekend?",
      time: "11:00 AM",
      streak: "2 Day Streak",
      msg: "Time to recharge!",
    },
    d5: {
      imageCaption: "Busy Work",
      promptTitle: "Focus Time",
      promptText: "What is your main goal for today?",
      time: "08:30 AM",
      streak: "1 Day Streak",
      msg: "Stay focused!",
    },
    d6: {
      imageCaption: "Good Memories",
      promptTitle: "Looking Back",
      promptText: "What was the highlight of this year?",
      time: "07:00 PM",
      streak: "10 Day Streak",
      msg: "Incredible dedication!",
    },
    d7: {
      imageCaption: "Autumn Leaves",
      promptTitle: "Letting Go",
      promptText: "What is something you need to release?",
      time: "04:15 PM",
      streak: "7 Day Streak",
      msg: "One week strong!",
    },
  };

  const currentContent =
    dateContent[activeDate as keyof typeof dateContent] || dateContent["d1"];
  const prevContent =
    dateContent[prevDateRef.current as keyof typeof dateContent] ||
    dateContent["d1"];

  const currentDateInfo = DATES.find((d) => d.id === activeDate) || DATES[0];
  const prevDateInfo =
    DATES.find((d) => d.id === prevDateRef.current) || DATES[0];

  // Calendar dates derived from active DATES
  const calendarDates = DATES.filter((d) => !d.isDivider).slice(0, 7);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="h-screen bg-[#F9FAFB] dark:bg-[#0A0A0A] flex flex-col font-sans overflow-hidden select-none transition-colors duration-300 text-gray-900 dark:text-gray-100">
        <NavBar
          isDarkMode={isDarkMode}
          toggleTheme={() => setIsDarkMode(!isDarkMode)}
        />

        <main className="flex-1 w-full flex justify-center items-center py-2 px-2 sm:px-6 md:p-6 lg:px-10 lg:py-6 overflow-hidden min-h-0 relative z-0">
          <div className="flex justify-center items-center gap-4 lg:gap-14 w-full h-full max-w-[1440px] max-h-[92vh]">
            {/* Left Date Rail */}
            <div className="w-[80px] h-full flex-col justify-start items-center hidden lg:flex py-2 shrink-0 overflow-y-auto scrollbar-hide">
              {DATES.map((item, idx) => {
                if (item.isDivider)
                  return (
                    <div
                      key={idx}
                      className="text-[12px] text-gray-300 dark:text-neutral-600 font-bold my-4 tracking-widest"
                    >
                      {item.text}
                    </div>
                  );

                const isActive = item.id === activeDate;
                if (isActive) {
                  return (
                    <div
                      key={item.id}
                      className="bg-white dark:bg-[#1A1A1A] rounded-[40px] shadow-[0_12px_24px_-4px_rgba(0,0,0,0.12)] dark:shadow-none py-5 w-[72px] flex flex-col items-center my-1.5 cursor-pointer transform scale-[1.02] transition-all border border-gray-50/50 dark:border-[#262626] relative"
                    >
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-400 rounded-r-md shadow-[0_0_8px_rgba(96,165,250,0.6)]"></div>
                      {item.label && (
                        <span className="text-[12px] text-gray-400 dark:text-neutral-400 font-bold mb-1 transition-colors">
                          {item.label}
                        </span>
                      )}
                      <span className="text-[28px] font-black text-gray-800 dark:text-white leading-none tracking-tight transition-colors">
                        {item.day}
                      </span>
                      <span className="text-[11px] text-gray-400 dark:text-neutral-400 font-bold mt-1.5 uppercase tracking-wider transition-colors">
                        {item.month}
                      </span>
                    </div>
                  );
                }

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveDate(item.id)}
                    className="py-3.5 w-[70px] flex flex-col items-center cursor-pointer hover:bg-black/[0.03] dark:hover:bg-white/[0.05] rounded-[40px] transition-all my-1 group"
                  >
                    {item.label && (
                      <span className="text-[12px] text-gray-400 dark:text-neutral-500 font-bold mb-1 transition-colors">
                        {item.label}
                      </span>
                    )}
                    <span className="text-[22px] font-bold text-gray-400 dark:text-neutral-500 leading-none group-hover:text-gray-700 dark:group-hover:text-neutral-300 transition-colors tracking-tight">
                      {item.day}
                    </span>
                    <span className="text-[11px] text-gray-400 dark:text-neutral-500 font-bold mt-1.5 uppercase tracking-wider transition-colors">
                      {item.month}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* NOTEBOOK OUTER */}
            <div className="flex-1 h-full w-full bg-[#E8F5FD] dark:bg-[#5C2E24] rounded-[24px] lg:rounded-l-[32px] lg:rounded-r-[36px] p-2 md:p-3 lg:p-[14px] shadow-[inset_0_4px_10px_rgba(255,255,255,0.6),0_30px_60px_-12px_rgba(0,100,150,0.15),0_18px_36px_-18px_rgba(0,0,0,0.1),20px_0_40px_-10px_rgba(0,0,0,0.05),-20px_0_40px_-10px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_4px_10px_rgba(255,255,255,0.05),0_30px_60px_-12px_rgba(0,0,0,0.8),0_18px_36px_-18px_rgba(0,0,0,0.6),20px_0_40px_-10px_rgba(0,0,0,0.5),-20px_0_40px_-10px_rgba(0,0,0,0.5)] relative flex border border-[#D0EBF9] dark:border-[#3B1C15] ring-1 ring-black/5 dark:ring-white/5 transition-colors duration-300">
              {/* Outer Cover Stitching */}
              <div className="absolute inset-[6px] lg:inset-[8px] rounded-[18px] lg:rounded-[24px] lg:rounded-r-[28px] border-[1.5px] border-dashed border-[#b8e2f8] dark:border-[#854738] pointer-events-none z-10 m-[2px] transition-colors duration-300"></div>

              {/* White Inner Pages wrapper (Perspective Container for GSAP animation) */}
              <div
                style={{ perspective: "2500px" }}
                className="flex-1 bg-[#ffffff] dark:bg-[#141414] rounded-[16px] lg:rounded-l-[18px] lg:rounded-r-[24px] shadow-[inset_0_0_20px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.05),2px_2px_4px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.7),0_4px_12px_rgba(0,0,0,0.4),2px_2px_4px_rgba(0,0,0,0.3)] relative flex overflow-hidden z-20 border border-[#f1f5f9] dark:border-[#262626]/80 lg:border-l-0 lg:border-y lg:border-r lg:mr-1 transition-colors duration-300"
              >
                {/* Stacked Pages Effect (Right edge) */}
                <div className="hidden lg:block absolute top-2 bottom-2 right-0 w-[4px] bg-white dark:bg-[#141414] border-r border-[#f1f5f9] dark:border-[#262626] rounded-r-[10px] shadow-[2px_0_4px_rgba(0,0,0,0.02)] pointer-events-none z-30 transition-colors duration-300"></div>
                <div className="hidden lg:block absolute top-4 bottom-4 right-[2px] w-[3px] bg-white dark:bg-[#141414] border-r border-[#f1f5f9] dark:border-[#262626] rounded-r-[10px] pointer-events-none z-30 transition-colors duration-300"></div>

                {/* --- LEFT BASE PAGE (or full width on mobile) --- */}
                <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 flex flex-col z-10 bg-white dark:bg-[#141414] transition-colors duration-300 overflow-y-auto scrollbar-hide">
                  {/* Mobile view always shows current content directly without flip illusion */}
                  <div className="flex lg:hidden flex-col w-full h-auto min-h-full pb-8">
                    <LeftPageContent
                      content={currentContent}
                      dateInfo={currentDateInfo}
                      calendarDates={calendarDates}
                      activeDate={activeDate}
                      setActiveDate={setActiveDate}
                      isDarkMode={isDarkMode}
                    />
                    <div className="w-full px-6 my-4">
                      <div className="w-full border-t border-dashed border-gray-200 dark:border-[#262626]"></div>
                    </div>
                    <RightPageContent
                      content={currentContent}
                      isDarkMode={isDarkMode}
                    />
                  </div>
                  {/* Desktop base page shows what will be revealed underneath */}
                  <div className="hidden lg:block w-full h-full">
                    <LeftPageContent
                      content={isNextRef.current ? prevContent : currentContent}
                      dateInfo={
                        isNextRef.current ? prevDateInfo : currentDateInfo
                      }
                      calendarDates={calendarDates}
                      activeDate={activeDate}
                      setActiveDate={setActiveDate}
                      isDarkMode={isDarkMode}
                    />
                  </div>
                </div>

                {/* --- RIGHT BASE PAGE --- */}
                <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 hidden lg:flex flex-col z-10 bg-white dark:bg-[#141414] transition-colors duration-300 overflow-y-auto scrollbar-hide">
                  <RightPageContent
                    content={isNextRef.current ? currentContent : prevContent}
                    isDarkMode={isDarkMode}
                  />
                </div>

                {/* --- ANIMATED FLIP PAGE --- */}
                <div
                  ref={flipPageRef}
                  className="absolute inset-y-0 left-0 w-1/2 hidden lg:flex flex-col z-20 bg-white dark:bg-[#141414] transition-colors duration-300"
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "right center",
                  }}
                >
                  {/* Front Face (Falls onto Left Side) */}
                  <div
                    className="absolute inset-0 overflow-y-auto scrollbar-hide bg-white dark:bg-[#141414]"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <LeftPageContent
                      content={isNextRef.current ? currentContent : prevContent}
                      dateInfo={
                        isNextRef.current ? currentDateInfo : prevDateInfo
                      }
                      calendarDates={calendarDates}
                      activeDate={activeDate}
                      setActiveDate={setActiveDate}
                      isDarkMode={isDarkMode}
                    />
                  </div>
                  {/* Back Face (Falls onto Right Side) */}
                  <div
                    className="absolute inset-0 overflow-y-auto scrollbar-hide bg-white dark:bg-[#141414]"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <RightPageContent
                      content={isNextRef.current ? prevContent : currentContent}
                      isDarkMode={isDarkMode}
                      isBackFace={true}
                    />
                  </div>
                </div>

                {/* Left Page fixed spine shadow (desktop) */}
                <div className="hidden lg:block absolute left-0 w-1/2 top-0 bottom-0 pointer-events-none z-40">
                  <div
                    className={`absolute right-0 top-0 bottom-0 w-[60px] bg-gradient-to-l ${isDarkMode ? "from-black/[0.25] via-black/[0.05]" : "from-black/[0.04] via-black/[0.01]"} to-transparent pointer-events-none transition-colors duration-300`}
                  />
                </div>

                {/* Right Page fixed spine shadow (desktop) */}
                <div className="hidden lg:block absolute right-0 w-1/2 top-0 bottom-0 pointer-events-none z-40">
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[60px] bg-gradient-to-r ${isDarkMode ? "from-black/[0.25] via-black/[0.05]" : "from-black/[0.05] via-black/[0.01]"} to-transparent pointer-events-none transition-colors duration-300`}
                  />
                </div>

                {/* Center Spine Crease */}
                <div
                  className={`absolute left-1/2 -translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-gradient-to-b ${isDarkMode ? "from-[#0A0A0A] via-[#262626] to-[#0A0A0A] shadow-[0_0_12px_rgba(0,0,0,0.8),1px_0_2px_rgba(255,255,255,0.05)]" : "from-gray-100 via-gray-200/80 to-gray-100 shadow-[0_0_12px_rgba(0,0,0,0.08),1px_0_2px_rgba(255,255,255,1)]"} z-40 hidden lg:block pointer-events-none transition-colors duration-300`}
                />

                {/* Binder Rings */}
                <SpineRing top="12%" isDarkMode={isDarkMode} />
                <SpineRing top="24%" isDarkMode={isDarkMode} />
                <SpineRing top="36%" isDarkMode={isDarkMode} />
                <SpineRing top="48%" isDarkMode={isDarkMode} />
                <SpineRing top="60%" isDarkMode={isDarkMode} />
                <SpineRing top="72%" isDarkMode={isDarkMode} />
                <SpineRing top="84%" isDarkMode={isDarkMode} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
