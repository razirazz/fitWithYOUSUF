'use client';

import ThemeChanger from "@/contextprovider/themechange";
import NavigationMenu from "./navigationmenu";
import CloseAndOpenMenu from "./closeandopenmenu";

const NavigationBar = () => {
    return (
        <section className="navbar box-border w-full h-fit max-h-20 p-2.5 backdrop-blur-2xl fixed top-0 left-0 z-10">
            <div className="containernavbar flex place-content-between m-1.5 items-center">
                <div className="logo basis-auto grow text-[16px] font-bold font-(family-name:--font-title)">
                    <span className="flex absolute top-2.5 left-9.5 tracking-wider">
                        {/* <span className="text-(--highlight-color)">f</span> */}
                        fit
                        <span className="text-(--highlight-color)">w</span>
                        ith
                    </span>
                    <span className="text-[26px] text-(--highlight-color) tracking-widest">Yousuf</span>
                </div>
                <NavigationMenu />
                <ThemeChanger />
                <CloseAndOpenMenu />
            </div>
        </section>
    )
}

export default NavigationBar