"use client";
import { useReducer, useState } from "react";
import { CiUser } from "react-icons/ci";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronDown, BiHelpCircle, BiChevronUp } from "react-icons/bi";
import { RiFileList3Line } from "react-icons/ri";
import { CiBullhorn } from "react-icons/ci";
import { TbLogout } from "react-icons/tb";
import Link from "next/link";
type State = {
  isTermsOpen: boolean;
  isMoreOpen: boolean;
};
export const UserDropDownMenu = () => {
  const [menu, toggleMenu] = useReducer(
    (prev: State, next: Partial<State>): State => {
      return { ...prev, ...next };
    },
    {
      isTermsOpen: false,
      isMoreOpen: false,
    }
  );
  return (
    <details className="dropdown dropdown-down max-h-96">
      <summary className="btn bg-transparent hover:bg-transparent outline-none border border-zinc-300 hover:cursor-pointer">
        <CiUser />
        <BiChevronDown />
      </summary>
      <ul className="flex flex-col text-md menu dropdown-content right-0 z-10 w-[211px]">
        <li className="static flex flex-row flex-nowrap items-center text-[14px] px-4 hover:bg-blueColor hover:cursor-pointer hover:text-zinc-100">
          <BiHelpCircle className="text-2xl p-0 transition" />
          <span className="bg-transparent hover:text-zinc-100 hover:bg-transparent">
            Help Center
          </span>
        </li>
        <li>
          <h4
            className="flex justify-between items-center hover:cursor-pointer hover:bg-blueColor  hover:text-zinc-100 font-bold text-[14px] bg-transparent rounded-none"
            onClick={() => toggleMenu({ isMoreOpen: !menu.isMoreOpen })}
          >
            <span className="flex items-center gap-2">
              <AiOutlineInfoCircle className="text-2xl" />
              <span>More</span>
            </span>
            {menu.isMoreOpen ? (
              <BiChevronUp className="text-2xl" />
            ) : (
              <BiChevronDown className="text-2xl" />
            )}
          </h4>
          {menu.isMoreOpen && (
            <ul className="dropdown bg-transparent text-[14px] font-semibold">
              <li className="hover:bg-zinc-200 hover:cursor-pointer p-2 text-center">
                Reddit ios
              </li>
              <li className="hover:bg-zinc-200 hover:cursor-pointer p-2 text-center">
                Reddit Android
              </li>
              <li className="hover:bg-zinc-200 hover:cursor-pointer p-2 text-center">
                Rereddit
              </li>
              <li className="hover:bg-zinc-200 hover:cursor-pointer p-2 text-center">
                Best Communties
              </li>
              <li className="hover:bg-zinc-200 hover:cursor-pointer p-2 text-center">
                About Reddit
              </li>
              <li className="hover:bg-zinc-200 hover:cursor-pointer p-2 text-center">
                Blog
              </li>
              <li className="hover:bg-zinc-200 hover:cursor-pointer p-2 text-center">
                Careers
              </li>
              <li className="hover:bg-zinc-200 hover:cursor-pointer p-2 text-center">
                press
              </li>
            </ul>
          )}
        </li>
        <li>
          <h4
            className="flex items-center justify-between text-[14px] overflow-x-hidden bg-transparent hover:bg-blueColor hover:text-zinc-100 font-semibold rounded-none "
            onClick={() => toggleMenu({ isTermsOpen: !menu.isTermsOpen })}
          >
            <RiFileList3Line className="text-2xl rotate-180" />
            <span className="w-full inline-block">Terms & Policies</span>
            {menu.isTermsOpen ? (
              <BiChevronUp className="text-2xl" />
            ) : (
              <BiChevronDown className="text-2xl" />
            )}
          </h4>
          {menu.isTermsOpen && (
            <ul className="dropdown bg-transparent text-[14px] font-semibold border-none pl-0  m-0">
              <li className="hover:bg-zinc-200 hover:cursor-pointer py-2 text-center">
                User Agreement
              </li>
              <li className="hover:bg-zinc-200 hover:cursor-pointer py-2 text-center">
                Privacy Policy
              </li>
              <li className="hover:bg-zinc-200 hover:cursor-pointer text-center break-all px-0 py-2">
                Moderator Code Of
                <br /> Content
              </li>
            </ul>
          )}
        </li>
        <li className="border-b border-text-zinc-200">
          <h4 className="flex items-center gap-2 text-[14px] overflow-x-hidden bg-transparent hover:bg-blueColor hover:text-zinc-100 font-semibold rounded-none">
            <CiBullhorn className="text-[16px]" />
            <span>Advertise On Reddit</span>
          </h4>
        </li>
        <li>
          <Link
            href={"/sign-in"}
            className="bg-transparent text-[14px] text-zinc-800 rounded-none font-semibold hover:bg-blueColor hover:text-zinc-100"
          >
            <TbLogout className="text-lg" />
            <span>Log In / Sign Up</span>
          </Link>
        </li>
      </ul>
    </details>
  );
};
