import { Planet } from "@/lib/swapi.types";
import { Card, CardContent } from "./ui/card";
import { Resident } from "./Resident";
import { extractIdFromUrl } from "@/lib/utils";
import { FilmLink } from "./FilmLink";

const PlanetInfo = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex flex-col">
      <span className="text-yellow-500 text-xs uppercase tracking-widest">
        {label}
      </span>
      <span className="font-semibold text-yellow-300">{value}</span>
    </div>
  );
};

export const PlanetView = ({ planet }: { planet: Planet }) => {
  return (
    <Card className="bg-white/5 border border-yellow-500/30 text-yellow-300 rounded-2xl shadow-lg max-w-2xl w-full mt-16">
      <CardContent className="p-6 space-y-6 w-fit">
        <h1 className="text-5xl font-bold text-center mb-8">{planet.name}</h1>
        <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
          <PlanetInfo
            label="Rotation Period"
            value={`${planet.rotation_period} hours`}
          />
          <PlanetInfo
            label="Orbital Period"
            value={`${planet.orbital_period} days`}
          />
          <PlanetInfo label="Diameter" value={`${planet.diameter} km`} />
          <PlanetInfo label="Climate" value={planet.climate} />
          <PlanetInfo label="Gravity" value={planet.gravity} />
          <PlanetInfo label="Terrain" value={planet.terrain} />
          <PlanetInfo
            label="Surface Water"
            value={`${planet.surface_water}%`}
          />
          <PlanetInfo
            label="Population"
            value={Intl.NumberFormat("de-DE").format(Number(planet.population))}
          />
        </div>

        <div className="border-t border-yellow-500/20 pt-4 space-y-2">
          <h2 className="text-xl font-semibold text-yellow-400 tracking-wide">
            Appearances
          </h2>
          <ul className="grid grid-cols-2 gap-2 text-yellow-200 text-sm">
            {planet.films.length > 0 ? (
              planet.films.map((item) => {
                if (typeof item === "string") {
                  const id = extractIdFromUrl(item);

                  return <FilmLink key={item} id={id} />;
                }

                return <FilmLink key={item.title} film={item} />;
              })
            ) : (
              <li>None</li>
            )}
          </ul>
        </div>

        <div className="border-t border-yellow-500/20 pt-4 space-y-2">
          <h2 className="text-xl font-semibold text-yellow-400 tracking-wide">
            Known Residents
          </h2>
          <ul className="grid grid-cols-2 gap-2 text-yellow-200 text-sm">
            {planet.residents.length ? (
              planet.residents.map((item) => {
                if (typeof item === "string") {
                  const id = extractIdFromUrl(item);

                  return <Resident key={item} id={id} />;
                }

                return <Resident key={item.name} resident={item} />;
              })
            ) : (
              <li>No known residents</li>
            )}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
