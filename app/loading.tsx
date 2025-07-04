import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <Image src={loader} alt="loading" height={100} width={100} />
    </div>
  );
};

export default LoadingPage;
