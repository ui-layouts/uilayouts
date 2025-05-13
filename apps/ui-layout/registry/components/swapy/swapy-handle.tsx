"use client";
import { useMemo, useState } from "react";
import { SlotItemMapArray, utils } from "swapy";
import { DragHandle, SwapyItem, SwapyLayout, SwapySlot } from "@/components/ui/swapy";

type Item = {
  id: string;
  title: string;
  bgColor: string;
  iconBgColor: string;
  className?: string;
};

const initialItems: Item[] = [
  {
    id: "1",
    title: "⚡ Turbocharge Everything",
    bgColor: "bg-blue-400",
    iconBgColor: "bg-blue-100",
    className: "lg:col-span-4 sm:col-span-7 col-span-12",
  },
  {
    id: "2",
    title: "🧠 Brainy Decisions",
    bgColor: "bg-pink-300",
    iconBgColor: "bg-pink-100",
    className: "lg:col-span-3 sm:col-span-5 col-span-12",
  },
  {
    id: "3",
    title: "🌈 Magical Moments",
    bgColor: "bg-green-400",
    iconBgColor: "bg-green-100",
    className: "lg:col-span-5 sm:col-span-5 col-span-12",
  },
  {
    id: "4",
    title: "🚀 Innovate Like Crazy",
    bgColor: "bg-yellow-300",
    iconBgColor: "bg-yellow-100",
    className: "lg:col-span-5 sm:col-span-7 col-span-12",
  },
  {
    id: "5",
    title: "💰 Save Big, Smile More",
    bgColor: "bg-purple-300",
    iconBgColor: "bg-purple-100",
    className: "lg:col-span-4 sm:col-span-6 col-span-12",
  },
  {
    id: "6",
    title: "🔮 AI Vibes Only",
    bgColor: "bg-cyan-300",
    iconBgColor: "bg-cyan-100",
    className: "lg:col-span-3 sm:col-span-6 col-span-12",
  },
];


function index() {
  const [slotItemMap, setSlotItemMap] = useState<SlotItemMapArray>(
    utils.initSlotItemMap(initialItems, "id")
  );

  const slottedItems = useMemo(
    () => utils.toSlottedItems(initialItems, "id", slotItemMap),
    [initialItems, slotItemMap]
  );

  return (
    <SwapyLayout
      id="swapy"
      className="w-full"
      config={{
        swapMode: "hover",
      }}
      onSwap={(event: { newSlotItemMap: { asArray: any; }; }) => {
        console.log("Swap detected!", event.newSlotItemMap.asArray);
      }}
    >
      <div className="grid w-full  grid-cols-12 gap-2 md:gap-4 py-4">
        {slottedItems.map(({ itemId }) => {
          const item = initialItems.find((i) => i.id === itemId);
          return (
            <SwapySlot
              key={itemId}
              className={`swapyItem rounded-lg h-64 ${item?.className}`}
              id={itemId}
            >
              <SwapyItem
                id={itemId}
                className={`relative rounded-lg w-full h-full flex flex-col justify-center items-center gap-2 p-8 ${item?.bgColor}`}
              >
                <DragHandle/>
                <h3 className="text-xl font-bold text-black ">{item?.title}</h3>
              </SwapyItem>
            </SwapySlot>
          );
        })}
      </div>
    </SwapyLayout>
  );
}

export default index;
