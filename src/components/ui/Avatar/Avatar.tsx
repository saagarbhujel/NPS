"use client";
import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import { Size, State } from "@/lib/Enum";
import AvatarImage from "./AvatarImage";
import AvatarFallback from "./AvatarFallback";

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  state: "DEFAULT" | "HOVER" | "FOCUSED";
  status: "ONLINE" | "OFFLINE";
  text?: string;
  placeholder?: string | JSX.Element;
  src?: string;
}

const sizeMap = {
  [Size.XS]: "h-4 w-4",
  [Size.SM]: "h-6 w-6",
  [Size.MD]: "h-8 w-8",
  [Size.LG]: "h-9 w-9",
  [Size.XL]: "h-10 w-10",
  [Size.XXL]: "h-12 w-12",
  [Size.XXXL]: "h-16 w-16",
};

const statusSizeMap = {
  [Size.XS]: "w-1.5 h-1.5",
  [Size.SM]: "w-1.5 h-1.5",
  [Size.MD]: "w-2 h-2",
  [Size.LG]: "w-2.5 h-2.5",
  [Size.XL]: "w-3 h-3",
  [Size.XXL]: "w-3 h-3",
  [Size.XXXL]: "w-3.5 h-3.5",
};

const statusPositionMap = {
  [Size.XS]: "top-[7px] left-[8px]",
  [Size.SM]: "top-[13.5px] left-[15px]",
  [Size.MD]: "top-[19px] left-[22px]",
  [Size.LG]: "top-[21px] left-[24px]",
  [Size.XL]: "top-[24px] left-[28px]",
  [Size.XXL]: "top-[30px] left-[34px]",
  [Size.XXXL]: "top-[42px] left-[47px]",
};

const statusBorderSize = {
  [Size.XS]: "border-[1px]",
  [Size.SM]: "border-[1px]",
  [Size.MD]: "border-[1.5px]",
  [Size.LG]: "border-[1.5px]",
  [Size.XL]: "border-2",
  [Size.XXL]: "border-2",
  [Size.XXXL]: "border-2",
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ children, status, state,src, text, placeholder, size, ...props }, ref) => (
    <AvatarPrimitive.Root
      className={cn("relative flex shrink-0  rounded-full  ", sizeMap[size], {
        "border-2 border-transparent hover:border-[#FFFFFF]": state === "HOVER",
        "border-2 border-[#FFFFFF]": state === "FOCUSED",
        "border-2 border-transparent": state === "DEFAULT",
      })}
      {...props}
      ref={ref}
    >
      {
        src ? (
          <AvatarImage src={src} alt={"Image"} />
        ) : (
          <AvatarFallback size={size} >{placeholder} </AvatarFallback>
        )
      }
      {status === "ONLINE" && (
        <span
          className={cn(
            "absolute  bg-green-500 border-[#FFFFFF] rounded-full ",
            statusSizeMap[size],
            statusPositionMap[size],
            statusBorderSize[size]
          )}
        ></span>
      )}
    </AvatarPrimitive.Root>
  )
);

Avatar.displayName = AvatarPrimitive.Root.displayName;

export default Avatar;
