'use client';

const TextEmphasize = (props) => {
    return (
        <div className="border-2 relative">
            <div className="bg-(--background) text-(--highlight-color) p-2 pb-3 pl-3 pr-3">
                {props.data}
            </div>
            <div className="glaze"></div>
            <div className="glow"></div>
        </div>
    )
}

export default TextEmphasize;