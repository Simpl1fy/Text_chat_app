import TextPageContactNav from "./TextPageContactNav"
import TextPageMessageArea from "./TextPageMessageArea"
import DefaultTextArea from "./DefaultTextArea";

interface TextAreaProps {
  selectedContact: {
    name: string;
    id: number
  }
}

export default function TextPage({ selectedContact }: TextAreaProps) {
  return (
    <div className="w-3/4 bg-gray-200 mt-2 relative">
      {selectedContact.name === "" && selectedContact.id === 0 ?
      <>
        <DefaultTextArea />
      </> : 
      <>
        <TextPageContactNav />
        <div className="absolute bottom-0 w-full bg-gray-300">
          <TextPageMessageArea />
        </div>
      </>}
    </div>
  )
}
