import { Button } from "@/components/ui/button";
import Main from "../pagecomponents/home/Main";

export const Home = () => {
  // const [active,setactive]= useState("")
  return (
    <div className="py-10 ">
      <div className="space-y-6 text-center">
        <h1 className="font-bold dark:text-white text-7xl">
          Problem. Solution. Exit.
        </h1>
        <p className="max-w-3xl mx-auto text-2xl text-black text-wrap dark:text-white">
          A virtual bench of proven SMT professionals. No Contracts. Real
          Impact. Senior Firepower On Demand
        </p>
        <div className="space-x-3">
          <Button
            className={`bg-secondary text-white px-4 py-1.5 rounded hover:bg-transparent border hover:border-2 hover:border-white duration-300`}
          >
            Book a Clarity Call
          </Button>
          <Button
            className={`bg-secondary text-white px-4 py-1.5 rounded hover:bg-transparent border hover:border-2 hover:border-white duration-300`}
          >
            Contact the Team
          </Button>
        </div>
      </div>
      <Main></Main>
    </div>
  );
};
