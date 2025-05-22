"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import SideBarOption from "./SideBarOption";
import ProfileOption from "./ProfileOption";
import { useAuth } from "@/context/auth-context";

const SideBar = () => {
  const authContext = useAuth();
  const [open, setOpen] = useState(true);

  
  
  return authContext.currentUser?.emailVerified ? (
    <div className={cn("flex flex-col w-12 transition-all duration-300 ease-in-out bg-[#F5F4ED]", open && "w-72")}>
      <nav className="h-screen flex flex-col gap-3 pb-2 px-0  top-0 left-0 transition duration-300 border-gray-300 border-r-0.5 shadow-lg ">
        <div className="flex w-full items-center gap-px p-2">
          <button
            className="inline-flex items-center justify-center relative shrink-0 can-focus select-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:drop-shadow-none text-text-300 border-transparent transition font-styrene duration-300 ease-[cubic-bezier(0.165,0.85,0.45,1)] hover:bg-bg-400 aria-pressed:bg-bg-400 aria-checked:bg-bg-400 aria-expanded:bg-bg-300 hover:text-text-100 aria-pressed:text-text-100 aria-checked:text-text-100 aria-expanded:text-text-100 h-8 w-8 rounded-md active:scale-95 group"
            type="button"
            data-testid="pin-sidebar-toggle"
            onClick={() => setOpen(prev => !prev)}
          >
            <div className="relative *:duration-300 ">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-80 transition-all text-text-300"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.5 3C1.67157 3 1 3.67157 1 4.5V15.5C1 16.3284 1.67157 17 2.5 17H17.5C18.3284 17 19 16.3284 19 15.5V4.5C19 3.67157 18.3284 3 17.5 3H2.5ZM2 4.5C2 4.22386 2.22386 4 2.5 4H6V16H2.5C2.22386 16 2 15.7761 2 15.5V4.5ZM7 16H17.5C17.7761 16 18 15.7761 18 15.5V4.5C18 4.22386 17.7761 4 17.5 4H7V16Z"
                ></path>
              </svg>
             {open && (
                 <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 opacity-0 scale-50 absolute inset-0 group-hover:scale-100 group-hover:opacity-100 transition-all text-text-200"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 10C5 9.85913 5.05943 9.72479 5.16366 9.63003L10.6637 4.63003C10.868 4.44428 11.1842 4.45933 11.37 4.66366C11.5557 4.86799 11.5407 5.18422 11.3363 5.36997L6.7933 9.5L17.5 9.5C17.7761 9.5 18 9.72386 18 10C18 10.2761 17.7761 10.5 17.5 10.5L6.7933 10.5L11.3363 14.63C11.5407 14.8158 11.5557 15.132 11.37 15.3363C11.1842 15.5407 10.868 15.5557 10.6637 15.37L5.16366 10.37C5.05943 10.2752 5 10.1409 5 10Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.5 2C2.77614 2 3 2.22386 3 2.5L3 17.5C3 17.7761 2.77614 18 2.5 18C2.22385 18 2 17.7761 2 17.5L2 2.5C2 2.22386 2.22386 2 2.5 2Z"
                ></path>
              </svg>
             )}
              {!open && (<svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 opacity-0 scale-50 absolute inset-0 group-hover:scale-100 group-hover:opacity-100 transition-all text-text-200"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.5 2C17.7761 2 18 2.22386 18 2.5V17.5C18 17.7761 17.7761 18 17.5 18C17.2239 18 17 17.7761 17 17.5V2.5C17 2.22386 17.2239 2 17.5 2ZM8.63003 4.66366C8.81578 4.45933 9.13201 4.44428 9.33634 4.63003L14.8363 9.63003C14.9406 9.72479 15 9.85913 15 10C15 10.1409 14.9406 10.2752 14.8363 10.37L9.33634 15.37C9.13201 15.5557 8.81578 15.5407 8.63003 15.3363C8.44428 15.132 8.45934 14.8158 8.66366 14.63L13.2067 10.5L2.5 10.5C2.22386 10.5 2 10.2761 2 10C2 9.72386 2.22386 9.5 2.5 9.5L13.2067 9.5L8.66366 5.36997C8.45934 5.18422 8.44428 4.86799 8.63003 4.66366Z"
                  ></path>
                </svg>)}
            </div>
          </button>
          {open && (<a
            className="flex flex-col justify-start items-top"
            aria-label="Home"
            href="/new"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 139 34"
              className="ml-[3px] h-4 flex-shrink-0 text-text-100"
              fill="currentColor"
              aria-label="Claude"
            >
              <path d="M18.07 30.79c-5.02 0-8.46-2.8-10.08-7.11a19.2 19.2 0 0 1-1.22-7.04C6.77 9.41 10 4.4 17.16 4.4c4.82 0 7.78 2.1 9.48 7.1h2.06l-.28-6.9c-2.88-1.86-6.48-2.81-10.87-2.81-6.16 0-11.41 2.77-14.34 7.74A16.77 16.77 0 0 0 1 18.2c0 5.53 2.6 10.42 7.5 13.15a17.51 17.51 0 0 0 8.74 2.06c4.78 0 8.57-.91 11.93-2.5l.87-7.62h-2.1c-1.26 3.48-2.76 5.57-5.25 6.68-1.22.55-2.76.83-4.62.83Zm21.65-26.4.2-3.39H38.5l-6.33 1.9v1.02l2.8 1.3v23.79c0 1.62-.82 1.98-3 2.25V33h10.75v-1.74c-2.17-.27-3-.63-3-2.25V4.4Zm42.75 29h.83l7.27-1.38v-1.78l-1.03-.07c-1.7-.16-2.13-.52-2.13-1.9V15.58l.2-4.07h-1.15l-6.87.99v1.73l.67.12c1.85.28 2.4.8 2.4 2.1v11.3C80.9 29.13 79.2 30 77.19 30c-2.26 0-3.64-1.15-3.64-3.8V15.58l.2-4.07h-1.19l-6.87.99v1.73l.71.12c1.86.28 2.41.8 2.41 2.1v10.43c0 4.42 2.49 6.52 6.48 6.52 3.04 0 5.53-1.62 7.39-3.88l-.2 3.88Zm-20-14.06c0-5.65-3-7.82-8.4-7.82-4.79 0-8.27 1.97-8.27 5.25 0 1 .36 1.74 1.07 2.25l3.64-.47c-.16-1.1-.24-1.78-.24-2.05 0-1.86.99-2.8 3-2.8 2.97 0 4.47 2.09 4.47 5.44v1.11l-7.51 2.25c-2.49.67-3.91 1.27-4.86 2.65a5 5 0 0 0-.71 2.8c0 3.2 2.21 5.46 5.97 5.46 2.72 0 5.13-1.23 7.23-3.56.75 2.33 1.9 3.56 3.95 3.56 1.66 0 3.16-.68 4.5-1.98l-.4-1.38c-.59.16-1.14.23-1.73.23-1.15 0-1.7-.9-1.7-2.68v-8.26Zm-9.6 10.87c-2.05 0-3.31-1.19-3.31-3.28 0-1.43.67-2.26 2.1-2.73l6.08-1.94v5.85c-1.94 1.46-3.08 2.1-4.86 2.1Zm63.3 1.81v-1.78l-1.02-.07c-1.7-.16-2.14-.52-2.14-1.9V4.4l.2-3.4h-1.42l-6.32 1.9v1.02l2.8 1.3v7.83a8.84 8.84 0 0 0-5.37-1.54c-6.28 0-11.18 4.78-11.18 11.93 0 5.89 3.51 9.96 9.32 9.96 3 0 5.61-1.47 7.23-3.72l-.2 3.72h.83l7.27-1.39Zm-13.15-18.13c3 0 5.25 1.74 5.25 4.94v9a7.2 7.2 0 0 1-5.21 2.1c-4.31 0-6.48-3.4-6.48-7.94 0-5.1 2.48-8.1 6.44-8.1Zm28.52 4.5c-.55-2.64-2.17-4.15-4.42-4.15-3.36 0-5.7 2.53-5.7 6.17 0 5.37 2.85 8.85 7.44 8.85a8.6 8.6 0 0 0 7.38-4.35l1.35.36c-.6 4.66-4.82 8.14-10 8.14-6.08 0-10.27-4.5-10.27-10.9 0-6.45 4.54-11 10.63-11 4.54 0 7.74 2.73 8.77 7.48l-15.84 4.85V21.7l10.66-3.32Z"></path>
            </svg>
          </a>)}
        </div>

        <div className="flex flex-col align-center justify-between h-full overflow-hidden">
          <div className="flex flex-col px-2 pt-1 gap-px mb-6">
            <SideBarOption open={open} />
          </div>

          <div>
            <ProfileOption open={open} />
          </div>
        </div>
      </nav>
    </div>
  ) : null;
};

export default SideBar;


