import { IconType } from "react-icons"
import { Dispatch, FC, SetStateAction } from "react"
import { Listbox } from "@headlessui/react"
import { IconSelector } from "../Icons"

export interface SortOption {
   id: string
   name: string
   icon: IconType
}

interface SortListboxProps {
   selected: SortOption
   setSelected: Dispatch<SetStateAction<SortOption>>
   options: SortOption[]
}

export const SortListBox:FC<SortListboxProps> = ({
   selected,
   setSelected,
   options
}) => {
   return (
      <div className="w-full max-w-[200px]">
         <Listbox 
            value={selected}
            onChange={setSelected}
         >
            <div className="relative">
               <Listbox.Button className="w-full rounded-md bg-light py-2 pl-3 pr-10 text-left font-medium sm:text-sm focus:outline-none focus-visible:ring focus-visible:ring-accent-dark dark:focus-visible:ring-accent-light border border-gray-300 dark:border-gray-600 scale-100 transform-gpu hover:scale-[1.03] active:scale-[0.97] transition duration-100 animate-shadow">
                  <span className="block truncate">
                     <span className="inline-flex items-center gap-2">
                        <selected.icon />
                        {selected.name}
                     </span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                     <IconSelector 
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                     />
                  </span>
               </Listbox.Button>
               
            </div>
         </Listbox>
      </div>
   )
}