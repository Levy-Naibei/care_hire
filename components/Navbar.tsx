import Link from 'next/link'
import Image from 'next/image'

import ButtonComponent from './ButtonComponent'
import car_logo from './../public/logo.svg'

const Navbar = () => {
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

        <ButtonComponent
          title='Sign In'
          btnType="button"
          containerStyles="text-primary-blue bg-white rounded-full min-w-[130px]"
        />

        <ButtonComponent
          title='Sign Up'
          btnType="button"
          containerStyles="text-primary-blue bg-white rounded-full min-w-[130px]"
        />
      </nav>
    </header>
  )
}

export default Navbar
