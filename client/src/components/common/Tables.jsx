import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Button } from "../ui/button";
export function Tables({ TableRows, TableColsData,deleteControllers,editControllers }) {
  return (
    <Table className="text-gray" >
      <TableHeader>
        <TableRow>
          {TableRows?.map((ele, index) => (
            <TableHead key={index} className="" >{ele?.name}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {TableColsData?.map((ele) => (
          <TableRow key={ele?._id}>
            <TableCell className="w-[300px]">{ele?.title}</TableCell>
            <TableCell>
              {ele?.tags.slice(0,3).map((ele, index) => (
                <div key={index}>{ele}</div>
              ))}
            </TableCell>
            <TableCell className="text-right   ">
              <img src={ele?.thumbnail} alt="" className="w-[100px]" />
            </TableCell>
            <TableCell className="text-left  ">{ele?.published}</TableCell>
            <TableCell className="text-center">
              <div className="flex gap-5">
                <button className="" onClick={()=>{editControllers(ele)}} >
                  <CiEdit size={20} className="text-lightblue" />
                </button>
                <button onClick={()=>{deleteControllers(ele?._id)}}  >
                  <MdDeleteOutline size={20} className="text-[#ff5555]" />
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
