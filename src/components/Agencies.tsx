import React from 'react'
import clientsData from '~/data/clientsData'
import ClientDtaCard from './cards/ClientDtaCard'

const Agencies = () => {
  return (
    <section className=" bg-white flex flex-col items-center justify-center py-[50px] overflow-hidden">
          <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] items-center px-[15px]">

            <h2 className="text-h5 md:text-h4 text-gray-500 font-bold text-center">Top Digital Marketing Agencies in USA</h2>
            <h2 className="text-h4 md:text-[40px] text-darkblue font-bold text-center">Ecommerce Inside is a name of excellence, expertise, and efficaciousness.</h2>
            <p className="text-base md:text-[20px] text-gray-400 text-center">We are a team of experts from marketing and tech domains who master in producing the results you're anticipating for.</p>
          </div>
          <div className="md:grid-cols-2 lg:grid-cols-4 md:grid mt-[65px]">
            {
              clientsData.map((data,index)=>(
                <ClientDtaCard data={data} key={index} />
              ))
            }
          </div>
        </section>
  )
}

export default Agencies