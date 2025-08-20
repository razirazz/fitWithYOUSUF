'use client';

const BadgeCertifiedFitness = (props) => {
    return (
        <div className="container-badge relative bottom-0 inset-x-0 pointer-events-none flex justify-center">
            {/* <div className="badge-border place-self-center">
                
            </div> */}
            <div className="badge-border w-[177] h-[38] absolute bottom-0 
                place-self-center rounded-bl-[17] rounded-tr-[17] 
                animate-border bg-gradient-to-r from-transparent via-(--highlight-color) to-transparent 
                from-80% via-90% to-100% opacity-50 group-hover:opacity-100 transition duration-300 " />

            <div className="badge-border-glow w-[177] h-[38] absolute bottom-0 
                place-self-center rounded-bl-[17] rounded-tr-[17] backdrop-blur-3xl blur-3xl 
                animate-border bg-gradient-to-r from-transparent via-(--highlight-color) to-transparent 
                from-80% via-90% to-100% opacity-50 group-hover:opacity-100 transition duration-300 " />

            <div className="badge-content absolute place-self-center
                p-1.5 text-[13px] w-[170] bottom-[3] rounded-bl-2xl rounded-tr-2xl 
                bg-(--background) opacity-100 font-bold ">
                { props.data }
            </div>
        </div>
    )
}

export default BadgeCertifiedFitness