'use client';

import Link from "next/link";
import navlinks from "./menuLinks";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavigationMenu = () => {

    const pathname = usePathname();
    console.log("isActive = ", pathname)
    // const [ activeHash, setActiveHash ] = useState('');
    
    // useEffect(() => {
    //     const handleHashChange = () => {
    //         setActiveHash(window.location.hash);
    //     };

    //     window.addEventListener('hashchange', handleHashChange);
    //     setActiveHash(window.location.hash);

    //     return () => {
    //         window.removeEventListener('hashchange', handleHashChange);
    //     };
    // }, [pathname]);

    return (
        <div className="containernavmenu opacity-0 text-[0px] sm:opacity-100 sm:text-[18px]
        md:isolation-auto md:align-middle w-4/6 flex justify-center">
            <div className="navhome flex gap-5"> 
                { navlinks.map((links, index) => {

                    let isActive = false;

                    // if (links.path.startsWith('#')) {
                    //     const targetHash = links.path.substring(links.path.indexOf('#'));
                    //     isActive = activeHash === targetHash;
                    // } else {
                    //     isActive = activeHash === links.path;
                    //     console.log("IsActive", isActive)
                    // }

                    return ( 
                        <Link className={`${isActive ? "text-(--highlight-color) font-bold" : ""}`}
                            key={index}
                            href={links.path}>

                                { links.name }
                        </Link>
                    );
                })}
            </div>
        </div>
    )
};

export default NavigationMenu