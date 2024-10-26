/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableComponent } from '@/components/common/table/TableComponent'
import { Button } from '@/components/ui/button'
import { JSquestions } from '@/data/PL'
import { Checkbox } from '@radix-ui/react-checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Star } from 'lucide-react'

import { useNavigate } from 'react-router-dom'
const generateColumn = ({
    handleQuestionClick
}: any): ColumnDef<any>[] => {
    return (
        [
          {
            id: "select",
            header: ({ table }) => (
              <Checkbox
                checked={
                  table.getIsAllPageRowsSelected() ||
                  (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
              />
            ),
            cell: ({ row }) => (
              <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
              />
            ),
            enableSorting: false,
            enableHiding: false,
          },
          {
            accessorKey: "question",
            header: ({ column }) => {
              return (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                  Questions
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              )
            },
            cell: ({ row }) => <div onClick={() => handleQuestionClick(row.original)} className="lowercase">{row.getValue("question")}</div>,
          },
          {
            accessorKey: "difficulty",
            header: "Difficulty",
            cell: ({ row }) => (
              <div className="capitalize">{row.getValue("difficulty")}</div>
            ),
          },
          {
            accessorKey: "favorite",
            header: () => <div className="">Add to Favorite</div>,
            cell: ({ row }) => {
              console.log("🚀 ~ row:", row)
              // const isFavorite = row.getValue("favorite")
        
              // Format the amount as a dollar amount
              // const formatted = new Intl.NumberFormat("en-US", {
              //   style: "currency",
              //   currency: "USD",
              // }).format(amount)
        
              return <div className="text-center font-medium">{<Star fill='red' />}</div>
            },
          },
          // {
          //   id: "actions",
          //   enableHiding: false,
          //   cell: ({ row }) => {
          //     const payment = row.original
        
          //     return (
          //       <DropdownMenu>
          //         <DropdownMenuTrigger asChild>
          //           <Button variant="ghost" className="h-8 w-8 p-0">
          //             <span className="sr-only">Open menu</span>
          //             <MoreHorizontal className="h-4 w-4" />
          //           </Button>
          //         </DropdownMenuTrigger>
          //         <DropdownMenuContent align="end">
          //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
          //           <DropdownMenuItem
          //             onClick={() => navigator.clipboard.writeText(payment.id)}
          //           >
          //             Copy payment ID
          //           </DropdownMenuItem>
          //           <DropdownMenuSeparator />
          //           <DropdownMenuItem>View customer</DropdownMenuItem>
          //           <DropdownMenuItem>View payment details</DropdownMenuItem>
          //         </DropdownMenuContent>
          //       </DropdownMenu>
          //     )
          //   },
          // },
        ]
    )
}
const QuestionsTable = () => {
    const navigate = useNavigate()

    const handleQuestionClick = (data: any) => {
        console.log("🚀 ~ handleQuestionClick ~ data:", data)
        navigate(`/questions/typescript/${data.id}`)
    }
  return (
    <div className='px-4 md:px-20'>
      <TableComponent
      data = { JSquestions }
      generateColumn ={() => generateColumn({
        handleQuestionClick
      })} 
      handleTableRow={handleQuestionClick}/>
    </div>
  )
}

export default QuestionsTable
