"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

interface UserItemProps {
  name: string;
  email: string;
  image?: string;
}

export default function UserItem({ name, email, image }: UserItemProps) {
  const avatarFallback = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const randomColor = React.useMemo(
    () => `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`,
    []
  );

  return (
    <div className="flex items-center gap-2 px-2 py-1">
      <Avatar>
        <AvatarImage src={image} alt={name} />
        <AvatarFallback
          style={{ backgroundColor: randomColor }}
          className="text-white font-semibold"
        >
          {avatarFallback}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className="font-sans font-bold text-sm">{name}</p>
        <p className="text-neutral-500 text-xs">{email}</p>
      </div>
    </div>
  );
}
