import { useState } from "react"
import Sidebar from "./Sidebar"
import TextPage from "./TextPage"

export default function Home() {

  /* 
    Creating a state for handling contact click to show the text page
    or a default page which includes (select a contact to start typing)
  */
  const [selectedContact, setSelectedContact] = useState<{name: string; id: number}>({name: "",
    id: 0
  })

  return (
    <div className="flex flex-1 min-h-[calc(100vh-6rem)] space-x-1 shadow-md">
        <Sidebar selectedContact={selectedContact} setSelectedContact={setSelectedContact} />
        <TextPage />
    </div>
  )
}
