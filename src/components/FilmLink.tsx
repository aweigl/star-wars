import { fetchEntity } from "@/lib/swapi";
import { Film } from "@/lib/swapi.types";
import { extractIdFromUrl } from "@/lib/utils";
import Link from "next/link";

export const FilmLink = async ({
  id,
  film: filmProp,
}: {
  id?: string;
  film?: Film;
}) => {
  let film: Film | undefined = filmProp;

  if (!filmProp && id) {
    film = await fetchEntity<Film>("films", id);
  }

  if (!film) {
    return null;
  }

  const filmId = extractIdFromUrl(film.url);

  return (
    <Link className="font-bold text-amber-700" href={`/films/${filmId}`}>
      {film.title}
    </Link>
  );
};
