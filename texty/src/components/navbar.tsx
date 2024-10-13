import { Button } from "@/components/ui/button"
import { Menubar, MenubarTrigger, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator } from "@/components/ui/menubar"
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
          <nav className="w-full px-4 py-4 bg-white shadow-md flex items-center justify-between">
            {/* Logo */}
            <div className="flex space-x-4">
              <div className="text-xl font-bold">
                Texty
              </div>
              {/* Menu Links for desktop */}
              <div className="hidden md:block">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>Home</MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>About</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Submenu 1</MenubarItem>
                      <MenubarItem>Submenu 2</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Profile</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>Account</MenubarItem>
                      <MenubarItem>Logout</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </div>
            </div>

            {/* Login button for desktop */}
            <div className="hidden md:block">
              <Button>Login</Button>
            </div>


            {/* Menu for Mobile */}
            <div className="md:hidden flex space-x-2">
              <div>
                <Button>Login</Button>
              </div>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger asChild>
                    <Button>
                      <MenuIcon />
                    </Button>
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Home</MenubarItem>
                    <MenubarItem>About</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Profile</MenubarItem>
                    <MenubarItem>Logout</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </nav>
          <Outlet />
        </div>
    )
}