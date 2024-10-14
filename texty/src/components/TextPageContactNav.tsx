import { Menubar, MenubarTrigger, MenubarContent, MenubarItem, MenubarMenu } from "@/components/ui/menubar"
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TextPageContactNav() {
  return (
    <div>
      <nav className="w-full p-4 bg-white shadow-md flex items-center justify-between">
        <div>
          Name of the user
        </div>
        <div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger><VideoCallIcon /></MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger><SettingsIcon /></MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="bg-red-600 font-semibold text-white hover:bg-red-700 hover:text-white !important">
                  Delete
                </MenubarItem>
                <MenubarItem>
                  Save
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </nav>
    </div>
  )
}
