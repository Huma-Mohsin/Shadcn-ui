import React from 'react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"


     export function CommandDemoCustomized() {
        let data=[{name:"Huma Mohsin" , course:"GenAI"},{name:"Zaira" , course:"Block Chain"},{name:"Alaya" , course:"Web Developer"},{name:"Sana" , course:"MERN Developer"},{name:"Saira" , course:"Robotics AI"}];
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px] mt-20">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Courses">
            {
            data.map(val=>
                <CommandItem>{val.course}</CommandItem>)
            }
          
        </CommandGroup>
      </CommandList>
    </Command>
  )
} 
   

export default CommandDemoCustomized
