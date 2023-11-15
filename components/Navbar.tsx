// "use client"
import Link from "next/link";
import Image from "next/image";

// import ButtonComponent from "./ButtonComponent";
import car_logo from "./../public/logo.svg";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Navbar = async () => {
  // const handleButtonClick = (buttonType: string) => {
  //   if (buttonType == "Sign In")
  //     alert("sign in feature coming soon");
  //   else {
  //     alert("sign up feature coming soon")
  //   }
  // }

  const session = await getServerSession(options);
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
            <Link href="../api/auth/signout?callbackUrl=/"> Logout </Link>
          ) : (
            <Link href="../api/auth/signin"> Login </Link>
          )}
          {/* <ButtonComponent
            as={Link}
            to="/dashboard"
            title='Sign In'
            btnType="button"
            containerStyles="text-primary-blue bg-white rounded-full min-w-[130px]"
            handleClick={() => handleButtonClick("Sign In")}
            />

            <ButtonComponent
              title='Sign Up'
              btnType="button"
              containerStyles="text-primary-blue bg-white rounded-full min-w-[130px]"
              handleClick={() => handleButtonClick("Sign Up")}
            /> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
