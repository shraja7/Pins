import React from "react";
import Image from "next/image";

const UserInfo = ({ userInfo }) => {
  console.log(userInfo);
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
    </div>
  );
};

export default UserInfo;
