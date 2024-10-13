import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Sidebar() {
  return (
    <>
      <div className="w-1/4 bg-gray-200 mt-2 relative">
        <div className="m-2 flex items-center rounded-lg border-2 border-zinc-600 bg-sky-50">
          <div className='px-2'><SearchIcon/></div>
          <input type="text" placeholder="Search in your contacts" className="w-full h-full py-2 px-3 outline-none rounded-r-lg" />
        </div>
        <div className='absolute bottom-2 right-2 hover:cursor-pointer'>
          <AddCircleIcon fontSize='large' />
        </div>
      </div>
    </>
  )
}
