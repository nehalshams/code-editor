import { useState } from "react";


type Props = {
    label?: JSX.Element | string;
}
export function CheckboxComponent({ label}: Props) {
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
