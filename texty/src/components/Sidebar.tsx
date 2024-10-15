import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

interface SidebarProps {
  selectedContact: {
    name: string;
    id: number
  };
  setSelectedContact: React.Dispatch<React.SetStateAction<{name: string; id: number}>>
}

export default function Sidebar({ selectedContact, setSelectedContact }: SidebarProps) {
  return (
    <>
      <div className="w-1/4 bg-gray-200 mt-2 relative">

        {/* Search Bar at the top of the contact list */}
        <nav className="py-3.5 px-4 bg-white shadow-md">
          <div className="flex  items-center rounded-lg border-2 border-zinc-600 bg-sky-50">
            <div className='px-2'><SearchIcon/></div>
            <input type="text" placeholder="Search in your contacts" className="w-full h-full py-2 px-3 outline-none rounded-r-lg" />
          </div>
        </nav>
        
        {/* Currently keeping this a button */}
        <button className='p-4 bg-red-500 border-2 rounded-xl' onClick={() => {setSelectedContact({name: "New Contact", id: 1}); console.log(selectedContact)}}>
          Change Contact
        </button>
        <button className='p-4 bg-red-700 border-2 rounded-xl' onClick={() => {setSelectedContact({name: "", id: 0}); console.log(selectedContact)}}>
          Remove Contact
        </button>
        
        <div className='absolute bottom-4 right-2 hover:cursor-pointer'>
          <AddCircleIcon fontSize='large' />
        </div>
      </div>
    </>
  )
}
