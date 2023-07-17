"use client";
import React from "react";
import Image from "next/image";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";
import { signIn, useSession } from "next-auth/react";
function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex gap-3 md:gap-2 items-center p-6 ">
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
      />
      <button
        className="bg-black text-white p-2 rounded-full
      px-4
      "
      >
        Home
      </button>

      <button
        className="font-semibold text-black p-2 rounded-full
      px-4
      "
      >
        Create
      </button>

      <div
        className="bg-[#e9e9e9] p-3 flex gap-3 items-center rounded-full w-full
      hidden md:flex
      "
      >
        <HiSearch className="text-[25px] text-gray-500 md:hidden" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none placeholder-gray-500"
        />
      </div>
      <HiBell className="text-[40px] text-gray-500" />
      <HiChat className="text-[40px] text-gray-500" />
      {session?.user ? (
        <Image
          src="/man.png"
          alt="user image"
          width={50}
          height={50}
          className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
        />
      ) : (
        <button
          className="font-semibold text-black p-2 rounded-full
      px-4
      "
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Header;
