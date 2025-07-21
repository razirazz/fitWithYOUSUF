'use client';

import Link from "next/link";
import navlinks from "./menuLinks";

const NavigationMenu = () => {

    return (
        <div className="containernavmenu justify-items-center bg-amber-400 opacity-0 text-[0px] sm:opacity-100 sm:text-[18px]">
            <div className="navhome"> 
                { navlinks.map((links, index) => {
                    return (
                        <Link className="between"
                            key={index}
                            href={links.path}>

                                { links.name }
                        </Link>
                    )
                })}
            </div>
        </div>
    )
};

export default NavigationMenu