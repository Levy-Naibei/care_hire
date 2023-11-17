import Link from "next/link";
import Image from "next/image";

import car_logo from "./../public/logo.svg";
import { getServerSession } from "next-auth/next";
import { OPTIONS } from "@/app/api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(OPTIONS);
  console.log({session})

  return (
    <header className="w-full absolute z-10">
      <nav className="flex justify-between max-width items-center padding-x py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src={car_logo}
            alt="car logo"
            height={18}
            width={118}
            className="object-contain"
          />
        </Link>

        <div className="navbar__auth-links">
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/"> Logout </Link>
          ) : (
            <Link href="/dashboard"> Login </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
