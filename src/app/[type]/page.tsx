"use client";

import { InfoText } from "@/components/InfoText";
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
import { extractIdFromUrl } from "@/lib/utils";
import { ArrowBigLeftDash } from "lucide-react";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";

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
        return { value: (entity as Film).title, label: "Title" };
      case ResourcesType.People:
      case ResourcesType.Species:
      case ResourcesType.Starships:
      case ResourcesType.Vehicles:
      case ResourcesType.Planets:
        return {
          value: (entity as People | Specie | Starship | Vehicle | Planet).name,
          label: "Name",
        };
    }
  };

  const handleOnClick = (url: string) => () => {
    const id = extractIdFromUrl(url);

    return redirect(`/${lowerCasedType}/${id}`);
  };

  return (
    <div className="flex items-center justify-center h-full w-full overflow-auto p-4">
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="w-full grid grid-cols-4 gap-4 font-starwars text-yellow-400">
            {entities.map((entity, index) => {
              const { value, label } = resolvePrimaryNaming(
                entity,
                lowerCasedType
              );

              return (
                <div
                  className="cursor-pointer"
                  key={`${index}-${entity.url}`}
                  onClick={handleOnClick(entity.url)}
                >
                  <div className="group relative border border-yellow-500/10 rounded-2xl p-4 hover:border-yellow-400/40 hover:bg-yellow-400/5 transition-all duration-300">
                    <InfoText label={label} value={value} />
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
