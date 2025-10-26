import { fetchEntity } from "@/lib/swapi";
import { People } from "@/lib/swapi.types";
import { extractIdFromUrl } from "@/lib/utils";
import Link from "next/link";

export const Resident = async ({
  id,
  resident: residentProp,
}: {
  id?: string;
  resident?: People;
}) => {
  let resident: People | undefined = residentProp;

  if (!residentProp && id) {
    resident = await fetchEntity<People>("people", id);
  }

  if (!resident) {
    return null;
  }

  const residentId = extractIdFromUrl(resident.url);

  return (
    <Link className="font-bold text-amber-700" href={`/people/${residentId}`}>
      {resident.name}
    </Link>
  );
};
