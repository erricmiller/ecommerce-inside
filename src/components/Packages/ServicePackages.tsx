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
            <div className="flex items-center justify-center  mb-10  flex-wrap ">
                {packageCatagories.map((item, id) => {
                    return (
                        <button
                            onClick={e => handleClick(e)}
                            key={id}
                            value={item.name}
                            className={`${active === item.name ? " text-white border-2 border-darkblue bg-caribbeangreen" : "bg-white"
                                }  px-5 py-3 flex items-center justify-center border-2 border-caribbeangreen hover:border-gray-300 rounded-t-md m-6 cursor-pointer  p-2"`}
                        >
                            {item.name}
                        </button>
                    );
                })}
            </div>


            {/* Package Cards */}
            <div className="grid  lg:grid-cols-3 gap-5">
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