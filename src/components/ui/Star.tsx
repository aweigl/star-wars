"use client";

import { Planet } from "@/lib/swapi.types";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import Link from "next/link";
import { extractIdFromUrl } from "@/lib/utils";

export const Star = ({
  item,
  top,
  left,
  duration,
}: {
  item?: Planet;
  top: number;
  left: number;
  duration: number;
}) => {
  const entityId = item ? extractIdFromUrl(item.url) : undefined;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          // Crawl intro overlay overlaps stars -> zindex needed
          className={`absolute rounded-full animate-twinkle z-50`}
          style={
            {
              top: `${top}%`,
              left: `${left}%`,
              ["--anim-duration"]: duration + "s",
              width: item ? 6 : 1,
              height: item ? 6 : 1,
              backgroundColor: "white",
              cursor: item ? "pointer" : "default",
            } as React.CSSProperties
          }
        ></div>
      </PopoverTrigger>
      {item ? (
        <PopoverContent className="bg-transparent text-amber-300 border-amber-300 rounded-xl shadow-lg backdrop-blur-sm p-4">
          <h5 className="text-2xl font-bold mb-2 text-center">{item.name}</h5>
          <p className="pb-1">Diameter: {item.diameter}</p>
          <p className="pb-1">Population: {item.population}</p>
          <p className="pb-1">Terrain: {item.terrain}</p>
          <p className="pb-1">Gravity: {item.gravity}</p>
          <div className="mt-1 flex w-full justify-end">
            <Link
              href={`/planets/${entityId}`}
              className="text-amber-600 font-bold hover:translate-x-0.5"
            >
              Details
            </Link>
          </div>
        </PopoverContent>
      ) : null}
    </Popover>
  );
};
