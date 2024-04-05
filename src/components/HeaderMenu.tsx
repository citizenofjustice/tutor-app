import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface MenuProps {
  children: React.ReactNode;
}

const HeaderMenu: React.FC<MenuProps> = ({ children }) => {
  return (
    <>
      <div className="max-sm:hidden">{children}</div>
      <Sheet>
        <SheetTrigger className="hidden max-sm:block">
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent className="max-vsm:w-full w-[16rem]">
          {children}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default HeaderMenu;
