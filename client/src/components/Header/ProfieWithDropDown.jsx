import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch} from "react-redux";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { logout } from "@/redux/slices/profileSlice";
function ProfieWithDropDown({user}) {
  const dispatch=useDispatch()
  const [position, setPosition] = React.useState("bottom");
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button  className="!ring-0"  >
            <Avatar >
              <AvatarImage src={user?.profile_picture} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44   ">
          <DropdownMenuLabel>Hi.. {user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <hr className="mb-3" />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem className="hover:bg-lightblue hover:text-white rounded-md  "   value='Dashboard'  >
              <Link to='/dashboard/my-profile' className="font-semibold  " >
                Dashboard
              </Link>
            </DropdownMenuRadioItem>
           
            <DropdownMenuRadioItem className="hover:bg-lightblue font-semibold hover:text-white rounded-md  " value='log-out'  >
              <button  onClick={()=>{dispatch(logout())}}  >
                Log-out
              </button>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default ProfieWithDropDown;
