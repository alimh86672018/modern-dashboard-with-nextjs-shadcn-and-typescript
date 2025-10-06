"use client";

import { ResponsiveLine } from "@nivo/line";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MyLine = ({ data }: any) => (
  <ResponsiveLine
    data={data}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    curve="basis"
    axisBottom={{ legend: "transportation", legendOffset: 36 }}
    axisLeft={{ legend: "count", legendOffset: -40 }}
    lineWidth={3}
    pointSize={8}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "seriesColor" }}
    pointLabelYOffset={-12}
    enableTouchCrosshair={true}
    useMesh={true}
    enableGridX={false}
    enablePoints={false}
  />
);
const Lines = () => {
  const data = [
    {
      id: "japan",
      data: [
        {
          x: "plane",
          y: 51,
        },
        {
          x: "helicopter",
          y: 134,
        },
        {
          x: "boat",
          y: 230,
        },
        {
          x: "train",
          y: 234,
        },
        {
          x: "subway",
          y: 289,
        },
        {
          x: "bus",
          y: 95,
        },
        {
          x: "car",
          y: 198,
        },
        {
          x: "moto",
          y: 50,
        },
        {
          x: "bicycle",
          y: 110,
        },
        {
          x: "horse",
          y: 208,
        },
        {
          x: "skateboard",
          y: 114,
        },
        {
          x: "others",
          y: 120,
        },
      ],
    },
    {
      id: "france",
      data: [
        {
          x: "plane",
          y: 161,
        },
        {
          x: "helicopter",
          y: 283,
        },
        {
          x: "boat",
          y: 162,
        },
        {
          x: "train",
          y: 28,
        },
        {
          x: "subway",
          y: 215,
        },
        {
          x: "bus",
          y: 159,
        },
        {
          x: "car",
          y: 135,
        },
        {
          x: "moto",
          y: 44,
        },
        {
          x: "bicycle",
          y: 108,
        },
        {
          x: "horse",
          y: 119,
        },
        {
          x: "skateboard",
          y: 34,
        },
        {
          x: "others",
          y: 86,
        },
      ],
    },
    {
      id: "us",
      data: [
        {
          x: "plane",
          y: 94,
        },
        {
          x: "helicopter",
          y: 84,
        },
        {
          x: "boat",
          y: 227,
        },
        {
          x: "train",
          y: 7,
        },
        {
          x: "subway",
          y: 208,
        },
        {
          x: "bus",
          y: 285,
        },
        {
          x: "car",
          y: 28,
        },
        {
          x: "moto",
          y: 114,
        },
        {
          x: "bicycle",
          y: 59,
        },
        {
          x: "horse",
          y: 171,
        },
        {
          x: "skateboard",
          y: 12,
        },
        {
          x: "others",
          y: 0,
        },
      ],
    },
    {
      id: "germany",
      data: [
        {
          x: "plane",
          y: 88,
        },
        {
          x: "helicopter",
          y: 54,
        },
        {
          x: "boat",
          y: 245,
        },
        {
          x: "train",
          y: 78,
        },
        {
          x: "subway",
          y: 35,
        },
        {
          x: "bus",
          y: 3,
        },
        {
          x: "car",
          y: 290,
        },
        {
          x: "moto",
          y: 200,
        },
        {
          x: "bicycle",
          y: 69,
        },
        {
          x: "horse",
          y: 178,
        },
        {
          x: "skateboard",
          y: 242,
        },
        {
          x: "others",
          y: 221,
        },
      ],
    },
    {
      id: "norway",
      data: [
        {
          x: "plane",
          y: 239,
        },
        {
          x: "helicopter",
          y: 269,
        },
        {
          x: "boat",
          y: 5,
        },
        {
          x: "train",
          y: 94,
        },
        {
          x: "subway",
          y: 300,
        },
        {
          x: "bus",
          y: 55,
        },
        {
          x: "car",
          y: 89,
        },
        {
          x: "moto",
          y: 142,
        },
        {
          x: "bicycle",
          y: 269,
        },
        {
          x: "horse",
          y: 68,
        },
        {
          x: "skateboard",
          y: 269,
        },
        {
          x: "others",
          y: 129,
        },
      ],
    },
  ];
  return (
    <Card>
      <CardHeader className="px-6 py-4">
        <CardTitle>Lines</CardTitle>
        <CardDescription>These are the stats of this year.</CardDescription>
      </CardHeader>
      <CardContent className="h-[200px]">
        <MyLine data={data} />
      </CardContent>
    </Card>
  );
};

export default Lines;
