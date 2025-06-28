import { Button } from "@/components/ui/button";
export const metadata = {
  title: "Home",
};

//const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  //await delay(2000);
  return (
    <div className="max-w-7xl mx-auto px-5 py-8">
      <Button>ShadCN!</Button>
      <button>normal</button>
    </div>
  );
};

export default Homepage;
