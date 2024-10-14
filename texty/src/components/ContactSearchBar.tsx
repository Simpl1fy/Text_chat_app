import SearchIcon from '@mui/icons-material/Search';

export default function ContactSearchBar() {
    return (
        <div className="flex  items-center rounded-lg border-2 border-zinc-600 bg-sky-50">
          <div className='px-2'><SearchIcon/></div>
          <input type="text" placeholder="Search in your contacts" className="w-full h-full py-2 px-3 outline-none rounded-r-lg" />
        </div>
    )
}