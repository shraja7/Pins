import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const UserInfo = ({ userInfo }) => {
  const router = useRouter(); // Move the hook outside of the onLogoutClick function
  console.log(userInfo);
  const { data: session } = useSession();
  const onLogoutClick = () => {
    signOut();
    //navigate to homepage
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center">
      <Image
        src={userInfo.userImage}
        alt="user Image"
        width={100}
        height={100}
        className="rounded-full"
      />
      <h2 className="text-[30px] font-semibold">{userInfo.userName}</h2>
      <h2 className="text-gray-400">{userInfo.email}</h2>
      <div>
        <button className="bg-gray-200 p-2 px-3 rounded-full font-semibold mt-5 m-3">
          Share
        </button>
        {session?.user?.email === userInfo.email ? (
          <button
            className="bg-gray-200 p-2 px-3 rounded-full font-semibold mt-5"
            onClick={() => onLogoutClick()}
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default UserInfo;
