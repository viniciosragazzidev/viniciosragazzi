import React from "react";
import UserBtn from "./UserBtn";
import { getServerSession } from "next-auth";
import Image from "next/image";

const LoginArea = async () => {
  const session = await getServerSession();
  return (
    <>
      {session?.user?.email ? (
        <div className="image absolute top-5 right-5 w-9 h-9 overflow-hidden rounded-full">
          <Image
            fill
            priority
            src={session.user.image!}
            alt={session.user.name!}
          />
        </div>
      ) : (
        <UserBtn />
      )}
    </>
  );
};

export default LoginArea;
