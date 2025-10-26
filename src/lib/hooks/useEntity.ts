import useSWR from "swr";
import { ResourcesType } from "../swapi.types";
import { fetchEntity, SWAPI_DICT } from "../swapi";

export const useEntity = <T>(entityType: ResourcesType, id?: string) => {
  const { data, error, isLoading } = useSWR(SWAPI_DICT[entityType], () =>
    fetchEntity<T>(entityType, id)
  );

  return {
    entity: data,
    isLoading,
    isError: error,
  };
};
