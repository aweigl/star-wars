import useSWR from "swr";
import { ResourcesType } from "../swapi.types";
import { fetchEntities, SWAPI_DICT } from "../swapi";

export const useEntities = (entityType: ResourcesType) => {
  const { data, error, isLoading } = useSWR(SWAPI_DICT[entityType], () =>
    fetchEntities(entityType, true)
  );

  return {
    entities: data || [],
    isLoading,
    isError: error,
  };
};
