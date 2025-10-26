import { Planet, ResourcesType, ResourceUnion } from "@/lib/swapi.types";
import { ArrowBigLeftDash } from "lucide-react";
import Link from "next/link";
import { PlanetView } from "./Planet";

export const renderEntityView = (
  entity: ResourceUnion,
  type: ResourcesType
) => {
  switch (type) {
    case ResourcesType.Films:
    case ResourcesType.People:
    case ResourcesType.Species:
    case ResourcesType.Starships:
    case ResourcesType.Vehicles:
      return (
        <div>
          <p className="text-bold text-3xl text-center">Under construction.</p>
          <p className="text-bold text-2xl text-center">Come back later...</p>
          <br />
          <div className="flex flex-1 justify-center">
            <Link
              className="flex items-center gap-2 text-sw-saber-green"
              href="/"
            >
              <ArrowBigLeftDash />
              Back to Hyperspace
            </Link>
          </div>
        </div>
      );
    case ResourcesType.Planets:
      return <PlanetView planet={entity as Planet} />;
  }
};
