import Image from 'next/image'
import Link from 'next/link'

import { footerLinks } from '@/constants'
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
        <div className="footer__links">
          {
            footerLinks.map(link => (
              <div key={link.title} className="footer__link">
                <h3 className="font-bold">{link.title}</h3>
                {link.links.map(item => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-gray-500"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))
          }
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center border-t border-gray-100 padding-x mt-10 py-10">
        <p>&copy; 2023 All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className='text-gray-500'>
            Privacy Policy
          </Link>
          <Link href="/" className='text-gray-500'>
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
