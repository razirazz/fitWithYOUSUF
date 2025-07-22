'use client';


export const ButtonIconLeft = (props) => {
    if (props.type === "primary") {
        return (
            <button type="button" className="p-px align-middle border-1 m-1">
                <div className="flex p-2 pl-3 pr-3 gap-1">
                    <span><props.icon size={20} strokeWidth={1} /></span>
                    <span className="text-[13px]">{props.data}</span>
                </div>
            </button>
        )
    }
    else if (props.type === "secondary") {
        return (
            <button type="button" className="p-px align-middle border-1 m-1">
                <div className="flex p-2 pl-3 pr-3 gap-1">
                    <span><props.icon size={20} strokeWidth={1} /></span>
                    <span className="text-[13px]">{props.data}</span>
                </div>
            </button>
        )
    }
    
}

export const ButtonIconRight = (props) => {
    if (props.type === "primary") {
        return (
            <button type="button" className="p-px align-middle border-1 m-1 bg-(--highlight-color) rounded-[10]">
                <div className="flex p-1 pl-3 gap-1">
                    <span className="text-[13px] text-(--background) content-center">{props.data}</span>
                    <span className="bg-(--background) p-1 rounded-[6] text-(--highlight-color)"><props.icon size={20} strokeWidth={1} /></span>
                </div>
            </button>
        )
    }
    else if (props.type === "secondary") {
        return (
            <button type="button" className="p-px align-middle border-1 m-1">
                <div className="flex p-2 pl-3 gap-1">
                    <span className="text-[13px]">{props.data}</span>
                    <span><props.icon size={20} strokeWidth={1} /></span>
                </div>
            </button>
        )
    }
}


