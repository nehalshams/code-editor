
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Option } from "@/types/global.types";

type Props = {
  placeholder: string;
  options: Option[];
  handleChangeOption?: (value: Option) => void;
  selectedOption: string;
}
export function SelectComponent({ placeholder, options, handleChangeOption, selectedOption}: Props) {
  return (
    <Select value={selectedOption} >
      <SelectTrigger className="w-[180px] text-white">
        <SelectValue placeholder={ placeholder || "Select" } />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          {
            options.map((option) => {
              return (
                <SelectItem onClick={() => handleChangeOption?.(option)} value="apple">{option.label}</SelectItem>
              )
            })
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
