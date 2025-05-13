"use client";
import { useEffect, useRef } from "react";
import { Swapy } from "swapy";
import { createSwapy } from "swapy";

const slots = [
  { slot: "a", content: "A", bg: "bg-emerald-500", hasHandle: false },
  { slot: "b", content: "B", bg: "bg-rose-500", hasHandle: true },
  { slot: "c", content: "C", bg: "bg-blue-500", hasHandle: false },
  { slot: "d", content: "D", bg: "bg-purple-500", hasHandle: false },
  { slot: "e", content: "E", bg: "bg-pink-500", hasHandle: false },
  { slot: "f", content: "F", bg: "bg-yellow-400", hasHandle: true },
  { slot: "g", content: "G", bg: "bg-green-500", hasHandle: true },
  { slot: "h", content: "H", bg: "bg-orange-500", hasHandle: false },
  { slot: "i", content: "I", bg: "bg-cyan-500", hasHandle: false },
];

function index() {
  const swapyRef = useRef<Swapy | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      swapyRef.current = createSwapy(containerRef.current, {
        // animation: 'dynamic'
        // swapMode: 'drop',
        // autoScrollOnDrag: true,
        // enabled: true,
        // dragAxis: 'x',
        // dragOnHold: true
      });

      // swapyRef.current.enable(false)
      // swapyRef.current.destroy()
      // console.log(swapyRef.current.slotItemMap())

      swapyRef.current.onBeforeSwap((event) => {
        console.log("beforeSwap", event);
        // This is for dynamically enabling and disabling swapping.
        // Return true to allow swapping, and return false to prevent swapping.
        return true;
      });

      swapyRef.current.onSwapStart((event) => {
        console.log("start", event);
      });
      swapyRef.current.onSwap((event) => {
        console.log("swap", event);
      });
      swapyRef.current.onSwapEnd((event) => {
        console.log("end", event);
      });
    }
    return () => {
      swapyRef.current?.destroy();
    };
  }, []);
  return (
    <div
      className="w-full mx-auto grid xl:grid-cols-[3fr_5fr_2fr]  md:grid-cols-[3fr_5fr_2fr] grid-cols-[3fr_5fr_2fr] gap-4"
      ref={containerRef}
    >
      {slots.map(({ slot, content, bg, hasHandle }) => (
        <div
          key={slot}
          className={`slot w-full h-32 rounded-[10px] data-[swapy-highlighted]:bg-neutral-200 data-[swapy-highlighted]:dark:bg-neutral-800`}
          data-swapy-slot={slot}
        >
          {content && (
            <div
              className={`item relative flex flex-col items-center justify-center rounded-[10px] w-full h-full  ${bg}`}
              data-swapy-item={slot}
            >
              {hasHandle && (
                <div
                  className="cursor-grab w-6 h-6 opacity-50 absolute top-[14px] left-[10px]"
                  data-swapy-handle
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-grip-vertical-icon lucide-grip-vertical"
                  >
                    <circle cx="9" cy="12" r="1" />
                    <circle cx="9" cy="5" r="1" />
                    <circle cx="9" cy="19" r="1" />
                    <circle cx="15" cy="12" r="1" />
                    <circle cx="15" cy="5" r="1" />
                    <circle cx="15" cy="19" r="1" />
                  </svg>
                </div>
              )}
              <div>{content}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default index;
