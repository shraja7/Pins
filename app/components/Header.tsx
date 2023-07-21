"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";
import { signIn, useSession } from "next-auth/react";
import app from "./../Shared/firebaseConfig";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const db = getFirestore(app);

  useEffect(() => {
    saveUserInfo();
  }, [session]);

  const saveUserInfo = async () => {
    if (session?.user) {
      await setDoc(doc(db, "user", session.user.email), {
        userName: session.user.name,
        email: session.user.email,
        userImage: session.user.image,
      });
    }
  };

  console.log(session);
  return (
    <div className="flex gap-3 md:gap-2 items-center p-6">
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
        onClick={() => router.push("/")}
      />
      {/* <button className="bg-black text-white p-2 rounded-full px-4">
        Home
      </button> */}

      <button
        className="font-semibold text-black p-2 rounded-full px-4"
        onClick={() => router.push("/pin-builder")}
      >
        Create
      </button>

      <div className="bg-[#e9e9e9] p-3 flex gap-3 items-center rounded-full w-full hidden md:flex">
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
          src={session?.user?.image}
          onClick={() => router.push("/" + session?.user?.email)}
          alt="user image"
          width={50}
          height={50}
          className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
        />
      ) : (
        <button
          className="font-semibold text-black p-2 rounded-full px-4"
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
