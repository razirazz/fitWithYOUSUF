'use client';

import Link from "next/link";

export const ButtonIconLeft = (props) => {
    if (props.type === "primary") {
        return (
            <button type="button" className="p-px align-middle m-1 bg-(--highlight-color) rounded-[10] sm:w-[16vw]">
                <div className="flex p-1 pr-3 gap-1 justify-start sm:gap-5">
                    <span className="bg-(--background) p-1 rounded-[6] text-(--highlight-color)"><props.icon size={20} strokeWidth={1} /></span>
                    <span className="text-[13px] sm:text-[14px] text-(--background) content-center">{props.data}</span>
                </div>
            </button>
        )
    }
    else if (props.type === "secondary") {
        return (
            <button type="button" className="p-px align-middle border-1 m-1 rounded-[10] sm:w-[16vw]">
                <div className="flex p-2 pr-3 gap-1 justify-center sm:gap-5">
                    <span><props.icon size={20} strokeWidth={1} /></span>
                    <span className="text-[13px] sm:text-[14px] content-center">{props.data}</span>
                </div>
            </button>
        )
    }
    
}

export const ButtonIconRight = (props) => {
    if (props.type === "primary") {
        return (
            <button type="button" className="p-px align-middle m-1 bg-(--highlight-color) rounded-[10] sm:w-[16vw]">
                <div className="flex p-1 pl-3 gap-1 justify-end sm:gap-5">
                    <span className="text-[13px] sm:text-[14px] text-(--background) content-center">{props.data}</span>
                    <span className="bg-(--background) p-1 rounded-[6] text-(--highlight-color) content-center"><props.icon size={20} strokeWidth={1} /></span>
                </div>
            </button>
        )
    }
    else if (props.type === "secondary") {
        return (
            <button type="button" className="p-px align-middle border-1 m-1 rounded-[10] sm:w-[16vw]">
                <div className="flex p-2 pl-3 gap-1 justify-center sm:gap-5">
                    <span className="text-[13px] sm:text-[14px] content-center">{props.data}</span>
                    <span><props.icon size={20} strokeWidth={1} /></span>
                </div>
            </button>
        )
    }
}


export const ButtonIconLeftLink = (props) => {
    if (props.type === "primary") {
        return (
            <Link href={props.link} className="p-px align-middle m-1 bg-(--highlight-color) rounded-[10] sm:w-[16vw]">
                <div className="flex p-1 pr-3 gap-1 justify-start sm:gap-5">
                    <span className="bg-(--background) p-1 rounded-[6] text-(--highlight-color)"><props.icon size={20} strokeWidth={1} /></span>
                    <span className="text-[13px] sm:text-[14px] text-(--background) content-center">{props.data}</span>
                </div>
            </Link >
        )
    }
    else if (props.type === "secondary") {
        return (
            <Link href={props.link} className="p-px align-middle border-1 m-1 rounded-[10] sm:w-[16vw]">
                <div className="flex p-2 pr-3 gap-1 justify-center sm:gap-5">
                    <span><props.icon size={20} strokeWidth={1} /></span>
                    <span className="text-[13px] sm:text-[14px] content-center">{props.data}</span>
                </div>
            </Link>
        )
    }
    
}

export const ButtonIconRightLink = (props) => {
    if (props.type === "primary") {
        return (
            <button type="button" className="p-px align-middle m-1 bg-(--highlight-color) rounded-[10] sm:w-[16vw]">
                <Link href={props.link} >
                    <div className="flex p-1 pl-3 gap-1 justify-end sm:gap-5">
                        <span className="text-[13px] sm:text-[14px] text-(--background) content-center">{props.data}</span>
                        <span className="bg-(--background) p-1 rounded-[6] text-(--highlight-color) content-center"><props.icon size={20} strokeWidth={1} /></span>
                    </div>
                </Link>
            </button>
        )
    }
    else if (props.type === "secondary") {
        return (
            <button type="button" className="p-px align-middle border-1 m-1 rounded-[10] sm:w-[16vw]">
                <Link href={props.link} >
                    <div className="flex p-2 pl-3 gap-1 justify-center sm:gap-5">
                        <span className="text-[13px] sm:text-[14px] content-center">{props.data}</span>
                        <span><props.icon size={20} strokeWidth={1} /></span>
                    </div>
                </Link>
            </button>
        )
    }
}


