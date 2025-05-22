"use client";

import { useAuth } from "@/context/auth-context";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";

interface ProfileOptionProps {
  open: boolean;
}

const ProfileOption = ({}: ProfileOptionProps) => {
  const authContext = useAuth();
    
  const displayName = authContext.currentUser?.displayName ?? ''
  const initials = displayName.split(' ').map(str => str[0]).join("")
    const router = useRouter();
  
  const logout = () => {
    signOut(auth).then(res => {
      router.push('/login')
    }).catch(err => console.error(err))
  }
  
  return (
    <React.Fragment>
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <div className="w-full  px-2 pb-1">
            <button
              className="items-center justify-center relative shrink-0 can-focus select-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:drop-shadow-none text-text-300 border-transparent transition font-styrene duration-300 ease-[cubic-bezier(0.165,0.85,0.45,1)] hover:bg-bg-400 aria-pressed:bg-bg-400 aria-checked:bg-bg-400 aria-expanded:bg-bg-300 hover:text-text-100 aria-pressed:text-text-100 aria-checked:text-text-100 aria-expanded:text-text-100 h-9 rounded-lg  active:scale-[0.985] whitespace-nowrap text-sm flex !min-w-0 py-5 !px-0.5  w-full"
              type="button"
              data-testid="user-menu-button"
              id="radix-:r2:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <div className="flex flex-row flex-grow items-center gap-3 pointer-cursor w-full">
                <div className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-bg-400 text-text-300">
                  <div className="flex shrink-0 items-center justify-center rounded-full font-bold select-none h-7 w-7 text-[12px] bg-transparent text-text-300">
                    {initials}
                  </div>
                </div>
                <div className="transition-all duration-200 flex w-full text-sm justify-between items-center font-medium">
                  <div className="flex flex-col items-start w-full max-w-full overflow-hidden pr-4">
                    <div className="w-full max-w-full overflow-hidden">
                      <span className="text-start block truncate">{displayName}</span>
                    </div>
                    <span className="text-xs text-text-300 font-normal">Free plan</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="flex-shrink-0 mr-2"
                  >
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-24">
          {/* users */}
          <DropdownMenuLabel className="min-w-24">{displayName}</DropdownMenuLabel>

          <DropdownMenuSeparator />
          {/* settings, language, get help */}
          <DropdownMenuLabel className="min-w-24">Settings</DropdownMenuLabel>
          <DropdownMenuLabel className="min-w-24">Language</DropdownMenuLabel>
          <DropdownMenuLabel className="min-w-24">Get help</DropdownMenuLabel>
          
          <DropdownMenuSeparator />
          {/* View plans, learn more */}
          <DropdownMenuLabel className="min-w-24">View all plans</DropdownMenuLabel>
          <DropdownMenuLabel className="min-w-24">Learn more</DropdownMenuLabel>


          <DropdownMenuSeparator />
          {/* logout */}
          <DropdownMenuLabel onClick={logout} className="min-w-24">Logout</DropdownMenuLabel>
          
        </DropdownMenuContent>
      </DropdownMenu>
    </React.Fragment>
  );
};

export default ProfileOption;
