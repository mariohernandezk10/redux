import React, { useEffect, useReducer } from 'react'

export default function Checkbox() {
    const [checked, toggle] = useReducer(checked => !checked, false);
    useEffect(() => {
        console.log("hi");
    }, [])

    return (
        <div>
            <input 
            type="checkbox"
            value={checked}
            onChange={toggle}
            />
            {checked ? "checked" : "not checked"}
        </div>
    )
}
