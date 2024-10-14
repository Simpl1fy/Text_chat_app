import AddCircleIcon from '@mui/icons-material/AddCircle';
import ContactSearchBar from './ContactSearchBar';

export default function Sidebar() {
  return (
    <>
      <div className="w-1/4 bg-gray-200 mt-2 relative">
        <nav className="py-3.5 px-4 bg-white shadow-md">
          <ContactSearchBar />
        </nav>
        <div className='absolute bottom-4 right-2 hover:cursor-pointer'>
          <AddCircleIcon fontSize='large' />
        </div>
      </div>
    </>
  )
}
