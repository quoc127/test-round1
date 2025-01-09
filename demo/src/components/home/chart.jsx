import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { time: "10'", currentValue: 10, tranferFee: 22 },
  { time: "13'", currentValue: 7, tranferFee: 22 },
  { time: "14'", currentValue: 38, tranferFee: 22 },
  { time: "16'", currentValue: 47, tranferFee: 22 },
  { time: "17", currentValue: 66, tranferFee: 22 },
  { time: "22'", currentValue: 19, tranferFee: 22 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

export const LineChartContainer = () => {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="currentValue"
              fill="var(--color-desktop)"
              radius={4}
            />
            <Bar dataKey="tranferFee" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm text-[#8D8E92] font-semibold">
        <div className="flex  justify-between font-medium leading-none w-full">
          <span>Current player value</span>
          <span>11.6M $</span>
        </div>
        <div className="flex  justify-between font-medium leading-none w-full">
          <span>Tranfer fee</span>
          <span>(Highest) 66M</span>
        </div>
      </CardFooter>
    </Card>
  );
};
