import Link from 'next/link'
import React, { FC } from 'react'
import { FaFacebookF, FaLinkedinIn, FaEnvelopeOpenText } from 'react-icons/fa';
import { BsInstagram, BsFillTelephoneFill } from 'react-icons/bs';


const TopBar: FC = () => {
    return (
        <div className='bg-darkblue text-white py-[10px] flex items-center justify-between'>
            <div className="social-icons flex items-center">
                <Link href={"#"} className='px-3 border-white border-r-[1px] hover:text-caribbeangreen'>
                    <FaFacebookF size={16} />
                </Link>
                <Link href={"#"} className='px-3 border-white border-r-[1px] hover:text-caribbeangreen'>
                    <BsInstagram size={16} />
                </Link>
                <Link href={"#"} className='px-3 hover:text-caribbeangreen'>
                    <FaLinkedinIn size={16} />
                </Link>
            </div>

            <div className="contact-info flex items-center">
                <Link href={"mailto:info@ecommerceinside.co"} className='px-1 md:px-3 flex items-center hover:text-caribbeangreen'>
                    <FaEnvelopeOpenText size={16} className='mr-3' />
                    <span className='hidden md:block'>info@ecommerceinside.co</span>
                </Link>
                <Link href={"tel:+971045916004"} className='px-1 md:px-3 flex items-center hover:text-caribbeangreen'>
                    <BsFillTelephoneFill size={16} className='mr-3' />
                    <span className='hidden md:block'>+1 (734) 361 4340</span>
                </Link>
            </div>
        </div>
    )
}

export default TopBar