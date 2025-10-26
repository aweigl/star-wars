"use client";

import { useEntities } from "@/lib/hooks/useEntities";
import {
  Film,
  People,
  Planet,
  ResourcesType,
  ResourceUnion,
  Specie,
  Starship,
  Vehicle,
} from "@/lib/swapi.types";
import { ArrowBigLeftDash } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function EntityListPage() {
  const { type } = useParams() as { type: keyof typeof ResourcesType };
  const lowerCasedType = type.toLowerCase() as ResourcesType;

  const { entities, isLoading, isError } = useEntities(lowerCasedType);

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen w-full overflow-auto">
        <div className="flex flex-col gap-4">
          There seems to be a disturbance in the force...
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
      </div>
    );
  }

  const resolvePrimaryNaming = (entity: ResourceUnion, type: ResourcesType) => {
    switch (type) {
      case ResourcesType.Films:
        return (entity as Film).title;
      case ResourcesType.People:
      case ResourcesType.Species:
      case ResourcesType.Starships:
      case ResourcesType.Vehicles:
      case ResourcesType.Planets:
        return (entity as People | Specie | Starship | Vehicle | Planet).name;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full overflow-auto">
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          entities.map((entity, index) => {
            return (
              <ol
                key={`${index}-${entity.url}`}
                className="list-none space-y-4 font-starwars text-yellow-400"
              >
                <li>{resolvePrimaryNaming(entity, lowerCasedType)}</li>
              </ol>
            );
          })
        )}
      </div>
    </div>
  );
}
