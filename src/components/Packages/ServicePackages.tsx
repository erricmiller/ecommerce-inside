import React, { useEffect, useState } from 'react'
import packageCatagories from '~/data/packageCatagories';
import packages from '~/data/packages';
import PackageCard from './PackageCard';

const ServicePackages = () => {
    const [active, setActive] = useState("");
    const [filterCards, setFilterCards] = useState(null);

    useEffect(() => {
        setFilterCards(packages);
    }, []);


    const handleClick = (e) => {
        const btnValue = e.target.value;
        setActive(btnValue);
        const newFilterCards = packages.filter((item) => item.cat === btnValue);
        console.log(newFilterCards)
        if (btnValue === "All") {
            setFilterCards(packages);
        } else {
            setFilterCards(newFilterCards);
        }

    };

    return (
        <div className="wrapper ">
            {/* Categories Buttons */}
            <div className="flex items-center justify-center  gap-[20px]  flex-wrap mb-[30px]">
                {packageCatagories.map((item, id) => {
                    return (
                        <button
                            onClick={e => handleClick(e)}
                            key={id}
                            value={item.name}
                            className={`${active === item.name ? " text-white border-2 border-darkblue bg-caribbeangreen" : "bg-white"
                                }  px-5 py-[8px] flex items-center justify-center border-2 border-caribbeangreen hover:border-gray-300 rounded-t-md  cursor-pointer  p-2"`}
                        >
                            {item.name}
                        </button>
                    );
                })}
            </div>


            {/* Package Cards */}
            <div className="grid  grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[15px] px-[20px] md:px-[150px] lg:px-[20px] 2xl:px-[100px]">
                {filterCards &&
                    filterCards.map((data, id) => {
                        return (
                            <PackageCard info={data} />
                        );
                    })}
            </div>
        </div>
    )
}

export default ServicePackages