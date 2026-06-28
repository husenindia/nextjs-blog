"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type ImageModalProps = {
  children: ReactNode;
}
export default function ModalBackDrop({ children }: ImageModalProps) {
    const router = useRouter();
    return (
        <>
            <div
            onClick={router.back}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-sm">
                {/* Close Button */}
                <button                
                    className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-[#D9907A]">
                    ×
                </button>
                {/* Image */}
                <div 
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-lg shadow-2xl">
                    {children}
                </div>
            </div>
        </>
    );   
}