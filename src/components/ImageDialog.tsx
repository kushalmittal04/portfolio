
"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { ReactNode } from "react";
import { useId } from "react";

interface ImageDialogProps {
  imageUrl: string;
  alt: string;
  dataAiHint: string;
  children: ReactNode;
}

export function ImageDialog({
  imageUrl,
  alt,
  children,
  dataAiHint,
}: ImageDialogProps) {
  const descriptionId = useId();

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent 
        className="w-full max-w-4xl p-2"
        aria-describedby={descriptionId}
      >
        <DialogHeader>
            <DialogTitle className="sr-only">{alt}</DialogTitle>
            <DialogDescription id={descriptionId} className="sr-only">A larger, zoomable view of the image: {alt}</DialogDescription>
        </DialogHeader>
        <div className="relative aspect-[4/3] md:aspect-[16/9]">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            className="rounded-md object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={dataAiHint}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
