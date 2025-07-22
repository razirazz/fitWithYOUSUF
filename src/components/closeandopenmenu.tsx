'use client';

import Link from "next/link";
import navlinks from "./menuLinks"
import { CircleChevronLeft, CircleChevronRight, Logs, X } from "lucide-react";
import { useState } from "react";

const CloseAndOpenMenu = () => {

    const [ isOpen, setIsOpen] = useState(false);

    const openCloseToggle = () => {
        setIsOpen(!isOpen);
    }

    function openCloseIcon() {
        return isOpen ? <X className="stroke-3 text-(--highlight-color)" /> : <Logs className="stroke-3 text-(--highlight-color)"/>;
    }

    return (
        <div className="visible sm:hidden" onClick={openCloseToggle}>
            { openCloseIcon() }
            { isOpen && (
                <div className="containernavlinksoverlay fixed top-18 pb-20 left-0 right-0 h-svh w-full content-center justify-items-center
                    bg-(--background) overflow-hidden">
                    {/* { openCloseIcon() } */}
                    <div className="contentLinks justify-center" >
                        {navlinks.map((links, index )=> {
                            return (

                                <Link className="between flex flex-row justify-center font-(family-name:--font-body) 
                                    h-10 text-[16px] tracking-widest in-focus:text-(--highlight-color)"
                                    
                                    key={index}
                                    href={links.path}>

                                        { links.name }
                                </Link>
                            )}
                        )}
                    </div>
                </div>
            ) }
        </div>
    )
}
export default CloseAndOpenMenu