"use client";

import { ArrowBigLeft } from "lucide-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();

  const handleClick = () => router.back();

  return (
    <Button
      className="absolute top-2 left-2 hover:cursor-pointer hover:translate-px"
      onClick={handleClick}
      variant="ghost"
    >
      <ArrowBigLeft />
    </Button>
  );
};
