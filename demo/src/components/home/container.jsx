import { LineChartContainer } from "./chart";
import Chelsea from "../../assets/chelsea.png";

const ContainerContent = [
  {
    title: "Chelsea",
    date: "30 Jun 2000",
    image: Chelsea,
  },
  {
    title: "Chelsea",
    date: "30 Jun 2000",
    image: Chelsea,
  },
  {
    title: "Chelsea",
    date: "30 Jun 2000",
    image: Chelsea,
  },
  {
    title: "Chelsea",
    date: "30 Jun 2000",
    image: Chelsea,
  },
  {
    title: "Chelsea",
    date: "30 Jun 2000",
    image: Chelsea,
  },
];

export const Container = () => {
  return (
    <div className="grid grid-cols-2 h-auto bg-[#020c20] text-white mt-12 pb-12">
      <div className="p-4">
        <h1 className="font-bold">TRANSFER VALUE</h1>
        <div className="max-w-lg pt-4">
          <LineChartContainer />
        </div>
      </div>
      <div className="grid grid-cols-1 border-l border-gray-600 p-4">
        {ContainerContent.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-row gap-3 items-center justify-between ${
                index >= ContainerContent.length - 1
                  ? "border-b-0"
                  : "border-b border-gray-600"
              }`}
            >
              <div className="flex flex-row gap-3 items-center">
                <img src={item.image} className="w-9 h-9" alt="Logo" />
                <div className="flex flex-col">
                  <span>{item.title}</span>
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="text-right text-[#48FF5A]">
                <p>-</p>
                <p>End of loan</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
