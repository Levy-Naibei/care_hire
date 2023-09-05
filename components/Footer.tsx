import Image from 'next/image'
import Link from 'next/link'

import car_logo from './../public/logo.svg'

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 padding-x py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src={car_logo} alt="logo" width={118} height={18} className="object-contain" />
          <p className="text-base text-gray-700">
            Car Hire <br></br>
            &copy; 2023 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
