import Link from 'next/link';
import React, { FC, useState } from 'react'
import { GrMenu } from 'react-icons/gr';
import { IoClose } from 'react-icons/io5';
import navlinks from '~/data/navlinks';
import { BiChevronDown } from 'react-icons/bi';
import * as Accordion from '@radix-ui/react-accordion';

const MobileMenu: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div className={`${mobileMenuOpen ? ("bg-caribbeangreen text-white absolute top-2 right-2") : ("bg-white text-darkblue")} z-20 w-[40px] h-[40px] flex items-center justify-center rounded-full md:hidden cursor-pointer hover:scale-90 duration-100`} onClick={(e) => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? (
          <IoClose size={18} className='' />
        ) : (
          <GrMenu size={18} className='' />
        )}
      </div>

      {
        mobileMenuOpen && (
          <nav className='bg-white md:hidden text-darkblue z-10 absolute h-[100vh] w-[100vw] top-0 left-0 overflow-hidden p-5'>
            {/* <ul>
              {
                navlinks.map((navlink) => (
                  <>
                    {
                      navlink.sublinks ? (
                        <li key={navlink.name} className='hover:text-caribbeangreen flex items-center gap-3 my-4 cursor-pointer'>
                          <Link href={navlink.link}>
                            {navlink.name}
                          </Link>
                          <BiChevronDown
                            className="text-violet10 relative transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                            aria-hidden
                          />
                        </li>
                      ) : (
                        <li key={navlink.name} className='hover:text-caribbeangreen flex items-center gap-3 my-4 cursor-pointer'>
                          <Link href={navlink.link}>
                            {navlink.name}
                          </Link>
                        </li >
                      )
                    }
                  </>

                ))
              }
            </ul> */}

            <div className="my-6">
              <ul className='flex flex-col items-center h-full my-auto'>
                {
                  navlinks.map((navlink) => (
                    <>
                      {
                        navlink.sublinks?.map((sublink) => (
                          <li key={sublink.name} className='animate-fade-in-down hover:text-caribbeangreen flex justify-center  text-h4 my-4 cursor-pointer'>
                            <Link href={sublink.link}>
                              {sublink.name}
                            </Link>
                          </li >
                        ))
                      }
                    </>
                  ))
                }
              </ul>
            </div>



            <div className='absolute bottom-0 left-0 right-0 mb-6'>
              <ul className='flex gap-5 items-center justify-center'>
                {
                  navlinks.map((navlink) => (
                    <li key={navlink.name} className='hover:text-caribbeangreen cursor-pointer'>
                      <Link href={navlink.link}>
                        {navlink.name}
                      </Link>
                    </li >
                  ))
                }
              </ul>
            </div>
          </nav >
        )
      }

    </>
  )
}

export default MobileMenu