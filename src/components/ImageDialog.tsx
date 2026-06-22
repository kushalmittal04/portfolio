"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { ReactNode } from "react";

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
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent 
        className="w-full max-w-4xl p-2"
        aria-describedby={undefined}
      >
        <DialogHeader>
            <DialogTitle className="sr-only">{alt}</DialogTitle>
            <DialogDescription className="sr-only">A larger view of the image: {alt}</DialogDescription>
        </DialogHeader>
        <div className="relative aspect-[4/3] md:aspect-[16/9]">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            className="rounded-md object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            data-ai-hint={dataAiHint}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
