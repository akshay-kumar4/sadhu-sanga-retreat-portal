import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-20 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline">
            Login
          </Button>
          <Button size="sm">Register</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
