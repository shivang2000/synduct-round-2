"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface SideBarOptionProps {
  open: boolean;
}

const SideBarOption = ({ open }: SideBarOptionProps) => {
  return (
    <React.Fragment>
      <div className="mb-1">
        <div data-state="closed">
          <Link
            target="_self"
            className=" items-center  relative shrink-0 can-focus select-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:drop-shadow-none h-9 px-4 py-2 rounded-lg active:scale-[0.985] whitespace-nowrap text-sm group transition ease-in-out active:!scale-100 hover:bg-transparent flex !justify-start !min-w-0 w-full hover:!bg-accent-main-000/[0.08] active:!bg-accent-brand/15"
            aria-label="New chat"
            href="/"
          >
            <div className="-mx-2 flex flex-row items-center gap-3">
              <div className="size-4 flex items-center justify-center">
                <div className="p-1.5 bg-[#c96442] group-active:!scale-[0.98] group-active:!shadow-none group-active:bg-accent-main-200 group-hover:-rotate-2 group-hover:scale-105 group-active:rotate-3 rounded-full transition-all ease-in-out bg-accent-main-000 group-hover:shadow-md">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 20 20"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 group-hover:scale-105  transition text-always-white"
                  >
                    <path d="M11 2.5C11 1.94772 10.5523 1.5 10 1.5C9.44772 1.5 9 1.94772 9 2.5V9H2.5C1.94771 9 1.5 9.44771 1.5 10C1.5 10.5523 1.94771 11 2.5 11H9V17.5C9 18.0523 9.44772 18.5 10 18.5C10.5523 18.5 11 18.0523 11 17.5V11H17.5C18.0523 11 18.5 10.5523 18.5 10C18.5 9.44772 18.0523 9 17.5 9H11V2.5Z"></path>
                  </svg>
                </div>
              </div>
              <div className={cn("transition-all duration-200 ease-in-out text-accent-main-100 font-medium text-sm", !open && "hidden")}>
                New chat
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="relative group" data-state="closed">
        <Link
          target="_self"
          className="inline-flex items-center justify-center relative shrink-0 can-focus select-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:drop-shadow-none text-text-300 border-transparent transition font-styrene duration-300 ease-[cubic-bezier(0.165,0.85,0.45,1)] hover:bg-bg-400 aria-pressed:bg-bg-400 aria-checked:bg-bg-400 aria-expanded:bg-bg-300 hover:text-text-100 aria-pressed:text-text-100 aria-checked:text-text-100 aria-expanded:text-text-100 h-9 px-4 py-2 rounded-lg min-w-[5rem] active:scale-[0.985] whitespace-nowrap text-sm w-full hover:bg-bg-300 overflow-hidden group active:bg-bg-400"
          aria-label="Chats"
          href="/recents"
        >
          <div className="-translate-x-2 w-full flex flex-row items-center justify-start gap-3">
            <div className="size-4 flex items-center justify-center group-hover:!text-text-200 text-text-400">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 group"
              >
                <path
                  className="group-hover:-translate-x-[0.5px] transition group-active:translate-x-0"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 2C5.96243 2 3.5 4.46243 3.5 7.5C3.5 8.66827 3.86369 9.75009 4.48403 10.6404C4.6225 10.8391 4.59862 11.1085 4.42735 11.2798L2.70711 13H9C12.0376 13 14.5 10.5376 14.5 7.5C14.5 4.46243 12.0376 2 9 2ZM2.5 7.5C2.5 3.91015 5.41015 1 9 1C12.5898 1 15.5 3.91015 15.5 7.5C15.5 11.0899 12.5898 14 9 14H1.5C1.29777 14 1.11545 13.8782 1.03806 13.6913C0.960669 13.5045 1.00345 13.2894 1.14645 13.1464L3.43405 10.8588C2.84122 9.87838 2.5 8.72844 2.5 7.5Z"
                ></path>
                <path
                  className="group-hover:translate-x-[0.5px] transition group-active:translate-x-0"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2996 9.64015C16.5527 9.52951 16.8474 9.64493 16.9581 9.89794C17.0204 10.0405 17.0778 10.1857 17.13 10.3334C17.3698 11.0117 17.5 11.7412 17.5 12.5C17.5 13.7284 17.1588 14.8784 16.5659 15.8588L18.8535 18.1464C18.9965 18.2894 19.0393 18.5045 18.9619 18.6913C18.8845 18.8782 18.7022 19 18.5 19H11C8.59344 19 6.493 17.6919 5.36988 15.7504C5.23161 15.5113 5.31329 15.2055 5.55232 15.0672C5.79135 14.9289 6.09721 15.0106 6.23548 15.2496C7.18721 16.8949 8.96484 18 11 18H17.2929L15.5726 16.2798C15.4014 16.1085 15.3775 15.8391 15.516 15.6404C16.1363 14.7501 16.5 13.6683 16.5 12.5C16.5 11.8563 16.3896 11.2394 16.1872 10.6666C16.143 10.5418 16.0946 10.4191 16.0419 10.2986C15.9312 10.0456 16.0466 9.75079 16.2996 9.64015Z"
                ></path>
              </svg>
            </div>
            <span className={cn("truncate group-hover:[mask-image:linear-gradient(to_right,hsl(var(--always-black))_78%,transparent_95%)] group-focus-within:[mask-image:linear-gradient(to_right,hsl(var(--always-black))_78%,transparent_95%)] text-sm whitespace-nowrap w-full [mask-size:100%_100%]", !open && "hidden")}>
              <div className="transition-all duration-200">Chats</div>
            </span>
          </div>
        </Link>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden group-hover:block group-focus-within:block"></div>
      </div>
    </React.Fragment>
  );
};

export default SideBarOption;
