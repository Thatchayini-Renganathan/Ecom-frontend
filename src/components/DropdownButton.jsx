import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import{Button} from "@/components/ui/button"
import { HiDotsVertical } from "react-icons/hi";
import LogoutButton from './LogoutButton';

function DropdownButton() {
  return (
    <>    
      <DropdownMenu>

          <DropdownMenuTrigger>
           <Button 
            variant="outline" 
            className="bg-white h-8 text-black hover:text-my-colour"> 
            more 
            <HiDotsVertical className='h-5'/>
          </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>

            <DropdownMenuLabel>
              My Account
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem className='hover:underline'>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className='hover:underline'>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogoutButton/>
            </DropdownMenuItem>

          </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}

export default DropdownButton