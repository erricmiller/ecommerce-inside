import React, { FC } from 'react'
import Button from '../ui/Button'
import Link from 'next/link'

const PackageCard: FC = ({ info }) => {
    return (

        <div className="package-box border-darkblue border-2 rounded-lg p-[35px] group hover:bg-darkblue duration-300 flex flex-col" >
            <h5 className='text-black text-h5 group-hover:text-white font-bold'>{info.name}</h5>
            <div className='flex gap-2'>
                <h6 className="text-gray-400 line-through group-hover:text-caribbeangreen">{info.price}</h6>
                <h6 className="text-gray-400 group-hover:text-caribbeangreen">ONLY</h6>
            </div>
            <h3 className="text-caribbeangreen text-h3 font-bold group-hover:text-white font-extrabold">{info.discprice}</h3>
            <p className='text-p group-hover:text-white'>{info.desc}</p>
            <div className='h-[150px] overflow-y-auto mb-5'>
                <ul>
                    {
                        info.points.map((point) => (
                            <li className=' text-p group-hover:text-white'>{point}</li>
                        ))
                    }
                </ul>
            </div>
            <Button variant='Green' className='max-w-[150px] mx-auto'>Order Now</Button>
            <div className='flex flex-col items-center justify-center gap-1 pt-4'>
                <p className='text-xs text-caribbeangreen group-hover:text-white'>Share your idea?</p>
                <Link href={"tel:+17343614340"} className='text-p font-bold group-hover:text-white'>+1 (734) 361 4340</Link>
            </div>
        </div >
    )
}

export default PackageCard