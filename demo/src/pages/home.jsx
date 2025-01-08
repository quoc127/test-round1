import { Header } from "@/components/home/header";
import { Info } from "@/components/home/info";

export const Home = () => {
  return (
    <div className="bg-black h-screen">
      <Header />
      <div className="mx-8">
        <Info />
      </div>
    </div>
  );
};
