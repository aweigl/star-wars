import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractIdFromUrl = (url: string): string | undefined => {
  const array = url.split("/");

  return array[array.length - 2];
};
