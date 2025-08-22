'use client';

const TextEmphasize = (props) => {
    return (
        <div className="relative p-px rounded-md w-fit h-fit">
            <div className="relative bg-(--background) text-(--highlight-color) p-1 md:p-2 pl-2 md:pl-3 pr-2 md:pr-3 rounded-md z-2
                            overflow-hidden">
                {props.data}
            </div>
            <>
            {/* <div className="absolute top-[1] left-[1] text-transparent p-2 pl-3 pr-3 rounded-md z-3
                            bg-linear-to-r from-(--highlight-color) via-(--text-color) to-(--highlight-color) 
                            bg-clip-text animate-glaze from-0% via-50% to-100% transition duration-300 ">
            </div>

            <div className="absolute top-[1] left-[1] text-transparent p-2 pl-3 pr-3 rounded-md z-3
                            bg-linear-to-r from-transparent via-(--text-color) to-transparent
                            bg-clip-text animate-glaze from-0% via-50% to-100% transition duration-300 blur-lg">
            </div> */}
            </>
            <div className="overflowHider absolute w-full h-full top-0 left-0 overflow-hidden rounded-md">
                <div className="glaze absolute -bottom-6 -left-10 h-[100px] w-[50vw] md:w-[20vw] rounded-md z-1
                            bg-linear-[-65deg] from-(--highlight-color) via-(--text-color)
                            from-40% via-50% to-60% to-(--highlight-color) animate-glaze-linear">
                </div>
            </div>
            {/* <span className="glow absolute top-0 left-0 w-full h-full rounded-md z-1
                            animate-glaze-linear-blur bg-linear-[-65deg] from-transparent 
                            via-(--text-color) to-transparent from-40% via-50% to-60% 
                            blur-[5px]">
            </span> */}
        </div>
    )
}

export default TextEmphasize;