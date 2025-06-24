import { Button } from "@/components/ui/button";
export const metadata = {
  title: "Home",
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  await delay(3000);
  return (
    <div>
      <Button>ShadCN!</Button>
      <button>normal</button>
    </div>
  );
};

export default Homepage;
