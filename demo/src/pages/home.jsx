import { Container } from "@/components/home/container";
import { Header } from "@/components/home/header";
import { Info } from "@/components/home/info";
import { Match } from "@/components/home/match";

export const Home = () => {
  return (
    <div className="bg-black h-auto pb-12">
      <Header />
      <div className="mx-8">
        <Info />
        <Container />
        <Match />
      </div>
    </div>
  );
};
