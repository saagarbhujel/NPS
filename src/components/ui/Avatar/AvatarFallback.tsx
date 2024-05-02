"use client"

import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import { Size } from "@/lib/Enum";

interface AvatarFallbackProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

const sizeMap = {
  [Size.XS]: "text-[8px] ",
  [Size.SM]: "text-[12px]",
  [Size.MD]: "text-[12px]",
  [Size.LG]: "text-[14px]",
  [Size.XL]: "text-[16px]",
  [Size.XXL]: "text-[20px]",
  [Size.XXXL]: "text-[24px]",
};

const Fallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(({className, size, ...props}, ref) => {
    return (
        <AvatarPrimitive.Fallback 
        ref={ref}
        className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", sizeMap[size])}
        {...props}
        />

    );
});

Fallback.displayName = AvatarPrimitive.Fallback.displayName;

export default Fallback;