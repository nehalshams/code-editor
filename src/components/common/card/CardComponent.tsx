/* eslint-disable @typescript-eslint/no-explicit-any */
import './CardComponent.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
type Props = {
  children: JSX.Element | string;
  bgColor: any,
  title?: string,
  subHeading?: string;
  footer?: JSX.Element
}
export function CardComponent({ children, bgColor, title, subHeading }: Props) {
  return (
    <Card className={`w-[300px] card border-0 ${bgColor} cursor-pointer`}
      style={{
        // background: "linear-gradient(135deg, rgba(255, 105, 180, 1) 0%, rgba(255, 0, 150, 1) 100%)"
        //  background: 'linear-gradient(135deg,rgba(160, 181, 215, 0.94) 0%, rgba(159, 180, 249, 0.51) 100%)'
        // background: 'linear-gradient(135deg, #005A47 0%, #1A9C8C 100%)' 
        //  background: 'linear-gradient(135deg, #A67C00 0%, #FF8C00 100%)'
        // background: 'linear-gradient(135deg, #6A0DAD 0%, #FF6F91 100%)'
        //  background: 'linear-gradient(135deg, #FF4B2B 0%, #FF416C 100%)'


        // background: 'linear-gradient(135deg, #0B0C2B 0%, #2C3E50 100%)'
        // background: 'linear-gradient(135deg, #2E2E2E 0%, #4B4B4B 100%)'
        //  background: 'linear-gradient(135deg, #3B0B45 0%, #A24678 100%)'
        // background: 'linear-gradient(135deg, #0C2B36 0%, #1A1A1A 100%)' 
        // background: 'linear-gradient(135deg, #004B5A 0%, #006B75 100%)' 
        // background: 'linear-gradient(135deg, #4A0C0C 0%, #2B1C1C 100%)'

      }}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subHeading}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}
