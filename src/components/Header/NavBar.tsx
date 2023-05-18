import React, { FC,useState,useEffect } from 'react'
import { BiChevronDown } from 'react-icons/bi';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import classNames from 'classnames';
import navlinks from '~/data/navlinks';
import MobileMenu from './MobileMenu';
import Button from '../ui/Button';

const NavBar: FC = () => {
  const [color, setColor] = useState(false)
  const changeColor =() => {
    if(window.scrollY >= 250){
      setColor(true)
    }else{
      setColor(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
  }, [])
  

  
  return (



    <NavigationMenu.Root className={`menu-wrapper flex items-center justify-between px-3 text-white h-20 border-b ${color ? "bg-black" : "bg-transparent"}`}>
      <div className="logo h-full flex items-center w-[150px] sm:w-[200px] lg:w-auto">
        <Link href={"/"}>
          <img src="/logo-trans.png" alt="Ecommerce Inside Logo" />
        </Link>
      </div>
      <NavigationMenu.List className="hidden md:flex  center flex flex-row gap-3 list-none h-[80px] items-center">

        {
          navlinks?.map((navlink) => (
            <>
              {
                navlink.sublinks ? (
                  <NavigationMenu.Item className='hover:text-caribbeangreen flex  items-center h-full' key={navlink.name}>
                    <NavigationMenu.Trigger className="h-full group flex select-none items-center gap-[2px]  leading-none outline-none">
                      <Link href={navlink.link}>
                        {navlink.name}
                      </Link>
                      <BiChevronDown
                        className="text-violet10 relative transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                        aria-hidden
                      />
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className="absolute top-20 bg-white min-w-[250px] rounded-md animate-fade-in-down">
                      <ul className="m-0  list-none gap-x-[10px] p-3  flex gap-2 flex-col">
           

                        {
                          navlink.sublinks?.map((subnavlink) => (
                            <li className='text-darkblue hover:text-white hover:bg-darkblue p-2' key={subnavlink.name}>
                              <Link href={subnavlink.link} >
                                {subnavlink.name}
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </NavigationMenu.Content>

                  </NavigationMenu.Item>
                ) : (
                  <NavigationMenu.Item className='hover:text-caribbeangreen' key={navlink.name}>
                    <Link href={navlink.link}>
                      {navlink.name}
                    </Link>
                  </NavigationMenu.Item>
                )
              }
            </>
          ))
        }
      </NavigationMenu.List>

      <div className="CTA flex items-center gap-4">
        <Button variant='Dark'>Request Info</Button>
        <MobileMenu />
      </div>
    </NavigationMenu.Root>



  )
}







export default NavBar