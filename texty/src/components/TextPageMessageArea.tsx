import SendIcon from '@mui/icons-material/Send';

export default function TextPageMessageArea() {
  return (
    <div>
      <div className="p-4 flex align-middle">
        <input type="text" name="message" id="message" className="w-full outline-none p-2 rounded-lg me-3 shadow-sm" placeholder="Enter your message" />
        <div className='hover:cursor-pointer bg-gray-500 rounded-full p-2'>
            <SendIcon />
        </div>
      </div>
    </div>
  )
}
