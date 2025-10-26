import { renderEntityView } from "@/components/ResourceUtil";
import { BackButton } from "@/components/ui/BackButton";
import { fetchEntity } from "@/lib/swapi";
import { ResourcesType } from "@/lib/swapi.types";
import { redirect } from "next/navigation";

export default async function EntityPage({
  params,
}: {
  params: {
    type: ResourcesType;
    id: string;
  };
}) {
  const { type, id } = await params;

  const entity = await fetchEntity(type, id);

  if (!entity) {
    return redirect("/");
  }

  return (
    <div className="flex items-center justify-center h-screen w-full overflow-auto">
      <BackButton />
      {renderEntityView(entity, type)}
    </div>
  );
}
