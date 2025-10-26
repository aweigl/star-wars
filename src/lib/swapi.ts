import { ApiResponse, EntityApiResponse, ResourceUnion } from "./swapi.types";

export const SWAPI_DICT = {
  people: "https://swapi.py4e.com/api/people/",
  planets: "https://swapi.py4e.com/api/planets/",
  films: "https://swapi.py4e.com/api/films/",
  species: "https://swapi.py4e.com/api/species/",
  vehicles: "https://swapi.py4e.com/api/vehicles/",
  starships: "https://swapi.py4e.com/api/starships/",
};

export const fetchEntities = async <T = ResourceUnion>(
  entityType: keyof typeof SWAPI_DICT,
  fecthAll?: boolean
) => {
  const data = await fetch(SWAPI_DICT[entityType]);
  const response = (await data.json()) as ApiResponse<T>;

  let results: T[] = [];

  if (response.results) {
    results = response.results;
  }

  if (fecthAll && response.next) {
    const nextData = await fetch(SWAPI_DICT[entityType], {
      cache: "force-cache",
    });

    const nextResponse = (await nextData.json()) as ApiResponse<T>;

    results.push(...nextResponse.results);
  }

  return results;
};

export const fetchEntity = async <T = ResourceUnion>(
  entityType: keyof typeof SWAPI_DICT,
  entityId?: string
) => {
  if (!entityId) {
    return undefined;
  }

  const data = await fetch(`${SWAPI_DICT[entityType]}/${entityId}`, {
    cache: "force-cache",
  });
  const response = (await data.json()) as EntityApiResponse<T>;

  if (response.detail === "Not found") {
    return undefined;
  }

  return response as T;
};
