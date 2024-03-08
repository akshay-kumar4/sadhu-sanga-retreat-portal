import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <UserRound className="h-6 w-6 mr-2" />
          Admin Dashboard
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 font-bold">
          Sadhu Sanga Retreat Portal
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Hare Krsna
        </div>
      </div>
      <div>
        <Button className="mt-6 mr-2" size="lg" variant="outline">
          Login
        </Button>
        <Button className="mt-6 mr-2" size="lg">
          Register
        </Button>
      </div>
    </div>
  );
};

export default Hero;
