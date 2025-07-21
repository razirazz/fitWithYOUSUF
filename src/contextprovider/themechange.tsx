'use client';

import { useContext } from "react";
import { ThemeContext } from "./themeprovider";

import { Moon, Sun } from 'lucide-react';

const ThemeChanger = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    
    function SetIcon() {
        return theme === "dark" ? <Moon className="inline-block align-text-top size-[20] stroke-2"/> : <Sun className="inline-block align-text-top size-[20] stroke-2"/>
    }
    
    return (
        <div className="w-fit flex pr-3">
            <div className="w-fit text-[15px] font-(family-name:--font-body) tracking-wider font-bold" onClick={() => toggleTheme} >
                {/* <h1>CheckBox</h1> */}
                <label > 
                    { SetIcon() }
                    <input className="invisible size-1" type="checkbox" onChange={toggleTheme} />
                    { theme.charAt(0).toUpperCase() + theme.slice(1) } 
                </label>
            </div>
        </div>
    )
} 

export default ThemeChanger

