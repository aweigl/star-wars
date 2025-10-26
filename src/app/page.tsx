import { IntroCrawl } from "@/components/IntroCrawl";
import { Stars } from "@/components/Stars";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

export default function HomePage() {
  return (
    <div>
      <div className="overflow-hidden">
        <Stars />
      </div>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <AudioPlayer />
          <IntroCrawl />
        </main>
      </div>
    </div>
  );
}
