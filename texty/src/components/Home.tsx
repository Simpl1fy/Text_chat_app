import Sidebar from "./Sidebar"
import TextPage from "./TextPage"

export default function Home() {
  return (
    <div className="flex flex-1 min-h-[calc(100vh-6rem)] space-x-1 shadow-md">
        <Sidebar />
        <TextPage />
    </div>
  )
}
