"use client";

import { Pause, Play } from "lucide-react";
import { Button } from "./button";
import { useEffect, useRef, useState } from "react";

const SRC_URL =
  "https://soundfxcenter.com/movies/star-wars/8d82b5_Star_Wars_Main_Theme_Song.mp3";

export const AudioPlayer = () => {
  const audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(SRC_URL) : undefined
  );
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audio.current) return;
    const current = audio.current;

    if (playing) {
      current.pause();
    } else {
      current.play();
      current.volume = 0.2;
      current.loop = true;
    }

    setPlaying(!playing);
  };

  useEffect(() => {
    const current = audio.current;
    if (!current) return;

    return () => {
      current.pause();
    };
  }, [audio]);

  return (
    <Button
      className="absolute top-2 left-2 hover:cursor-pointer hover:translate-px"
      onClick={toggle}
      variant="ghost"
    >
      {!playing ? <Play /> : <Pause />}
    </Button>
  );
};
