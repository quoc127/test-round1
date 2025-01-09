import { Container } from "@/components/home/container";
import { Header } from "@/components/home/header";
import { Info } from "@/components/home/info";

export const Home = () => {
  return (
    <div className="bg-black h-auto">
      <Header />
      <div className="mx-8">
        <Info />
        <Container />
      </div>
    </div>
  );
};
