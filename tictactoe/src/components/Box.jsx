import { useState } from "react"

const Box = () => {
    const [ value, setValue ] = useState(null); 
    
    const handleClick = () => {
        setValue('X');
    }

    return (
        <button 
        className="square"
        onClick={handleClick}
        >
        {value}
        </button>)
}

export default Box;