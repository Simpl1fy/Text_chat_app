import TextPageContactNav from "./TextPageContactNav"
import TextPageMessageArea from "./TextPageMessageArea"

export default function TextPage() {
  return (
    <div className="w-3/4 bg-gray-200 mt-2 relative">
      <TextPageContactNav />
      <div className="absolute bottom-0 w-full bg-gray-300">
        <TextPageMessageArea />
      </div>
    </div>
  )
}
