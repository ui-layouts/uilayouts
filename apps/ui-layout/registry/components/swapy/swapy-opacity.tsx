"use client";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { SlotItemMapArray, Swapy, utils } from "swapy";
import { DragHandle, SwapyItem, SwapyLayout, SwapySlot } from "@/components/ui/swapy";
import {
  BarChart2,
  Brain,
  DollarSign,
  Heart,
  PlusCircle,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

type Item = {
  id: string;
  title: string;
  icon: ReactNode;
  bgColor: string;
  className?: string;
};

const initialItems: Item[] = [
  {
    id: "1",
    icon: <Zap className="w-7 h-7 text-blue-600" />,
    title: "Streamline Operations",
    bgColor: "bg-blue-50",
  },
  {
    id: "2",
    icon: <BarChart2 className="w-7 h-7 text-pink-600" />,
    title: "Decision Making",
    bgColor: "bg-pink-50",
  },
  {
    id: "3",
    icon: <Users className="w-7 h-7 text-green-600" />,
    title: "Customer Experiences",
    bgColor: "bg-green-50",
  },
  {
    id: "4",
    icon: <Brain className="w-7 h-7 text-yellow-600" />,
    title: "Accelerate Innovation",
    bgColor: "bg-yellow-50",
  },
  {
    id: "5",
    icon: <DollarSign className="w-7 h-7 text-purple-600" />,
    title: "Reduce Costs",
    bgColor: "bg-purple-50",
  },
  {
    id: "6",
    icon: <Sparkles className="w-7 h-7 text-cyan-600" />,
    title: "Future-Proof",
    bgColor: "bg-cyan-50",
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
      onSwap={(event) => {
        console.log("Swap detected!", event.newSlotItemMap.asArray);
      }}
    >
      <div className="w-96 mx-auto  space-y-2">
        {slottedItems.map(({ itemId }) => {
          const item = initialItems.find((i) => i.id === itemId);
          return (
            <SwapySlot
              key={itemId}
              className={`swapyItem rounded-lg  ${item?.className}`}
              id={itemId}
            >
              <SwapyItem
                id={itemId}
                dragItemOpacity={50}
                className={`relative flex p-4 w-full items-center  rounded-lg gap-5 h-full border border-dashed border-gray-300  ${item?.bgColor}`}
              >
                <div
                  className={`rounded-full flex items-center justify-center`}
                >
                  {item?.icon}
                </div>
                <h3 className="text-xl text-neutral-900 font-medium ">{item?.title}</h3>
              </SwapyItem>
            </SwapySlot>
          );
        })}
      </div>
    </SwapyLayout>
  );
}

export default index;
