
"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

type ThumbProps = {
  selected: boolean;
  onClick: () => void;
  item: {
    type: 'video' | 'image';
    url: string;
    dataAiHint?: string;
  };
};

export const CarouselThumb = ({ selected, onClick, item }: ThumbProps) => {
  return (
    <div
      className={cn(
        "relative aspect-video h-full cursor-pointer overflow-hidden rounded-lg bg-background p-0 transition-opacity",
        !selected && "opacity-60 hover:opacity-100"
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="h-full w-full"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-lg ring-2 ring-offset-2 ring-offset-background transition-all",
            selected ? "ring-primary" : "ring-transparent"
          )}
        />
        {item.type === 'video' ? (
          <div className="relative h-full w-full bg-muted flex items-center justify-center">
            <div className="absolute inset-0 bg-black/30" />
            <FontAwesomeIcon icon={faPlayCircle} className="h-8 w-8 text-white z-10" />
            <Image
                src="/images/projects/video-placeholder.png"
                alt="Video thumbnail"
                fill
                className="object-cover"
                data-ai-hint="video play button"
                sizes="15vw"
            />
          </div>
        ) : (
          <Image
            src={item.url}
            alt="Project thumbnail"
            fill
            className="object-cover"
            data-ai-hint={item.dataAiHint}
            sizes="15vw"
          />
        )}
      </button>
    </div>
  );
};
