import React, { useEffect, useState } from 'react'

export default function Checkbox() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        alert(`checked: ${checked.toString()}`)
    })

    return (
        <div>
            <input 
            type="checkbox"
            value={checked}
            onChange={() => {
                setChecked(checked => !checked)
            }}
            />
            {checked ? "checked" : "not checked"}
        </div>
    )
}
