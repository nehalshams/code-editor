import { useState } from "react";


export function CheckboxComponent() {
    const [checked, setChecked] = useState(false)
    const handleCheckbox = () => {
        setChecked(!checked)
    }
  return (
    <label htmlFor="checkbox" className="w-4 h-4 border bottom-1 inline-block">
        <input id="checkbox" onChange={handleCheckbox} className={`border ${checked ?  "visible" : "hidden"}`} type="checkbox"/>
    </label>
  )
}
