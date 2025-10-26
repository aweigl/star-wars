import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ResourcesType } from "@/lib/swapi.types";
import { Rocket } from "lucide-react";
import Link from "next/link";

const resources = Object.keys(ResourcesType) as ResourcesType[];

export const Menu = () => {
  return (
    <div className="absolute top-2 right-2 hover:cursor-pointer hover:translate-px">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            <Rocket />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="bg-transparent text-amber-300 border-amber-300 rounded-xl shadow-lg backdrop-blur-sm p-4"
        >
          {resources.map((item, index) => (
            <div key={item}>
              <DropdownMenuItem>
                <Link href={`/${item}/`}>{item}</Link>
              </DropdownMenuItem>

              {index === resources.length - 1 ? null : (
                <DropdownMenuSeparator />
              )}
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
