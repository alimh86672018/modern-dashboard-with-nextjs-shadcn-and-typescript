"use client";

import { Command, CommandInput } from "./ui/command";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Header = () => {
  const [notifications, setNotifications] = useState([
    {
      text: "Notification One",
      date: "2024-06-10",
      read: false,
    },
    { text: "Notification Two", date: "2024-06-11", read: true },
    { text: "Notification Three", date: "2024-06-11", read: false },
  ]);

  return (
    <div className="grid grid-cols-2 justify-between items-center border-b px-6 py-2">
      <Command className="border rounded-lg [&_[cmdk-input-wrapper]]:border-b-0">
        <CommandInput placeholder="Type a command or search..." />
      </Command>
      <div className="flex justify-end cursor-pointer">
        <DropdownMenu>
          <div className="relative flex items-center">
            {notifications.filter((notif) => !notif.read).length > 0 && (
              <Badge
                className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums items-center justify-center absolute -left-3 -bottom-2 z-10"
                variant="destructive"
              >
                {notifications.filter((notif) => !notif.read).length}
              </Badge>
            )}
            <DropdownMenuTrigger asChild>
              <Bell />
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent className="w-56" align="end">
            {notifications.map((notif, index) => (
              <>
                <DropdownMenuItem key={index} className="cursor-pointer">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      notif.read ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <div className="flex flex-col">
                    <span>{notif.text}</span>
                    <span className="text-gray-500">{notif.date}</span>
                  </div>
                </DropdownMenuItem>
              </>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
