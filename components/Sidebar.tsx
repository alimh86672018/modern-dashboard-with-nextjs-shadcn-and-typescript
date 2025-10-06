"Use client";

import Link from "next/link";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import UserItem from "./UserItem";
import {
  User,
  Inbox,
  WalletCards,
  Bell,
  Settings,
  Cookie,
  ScrollText,
  Layout,
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    {
      group: "General",
      items: [
        { name: "Dashboard", icon: <Layout />, link: "/" },
        { name: "Profile", icon: <User />, link: "/profile" },
        { name: "Inbox", icon: <Inbox />, link: "/inbox" },
        { name: "Billing", icon: <WalletCards />, link: "billing" },
        { name: "Notifications", icon: <Bell />, link: "/notifications" },
      ],
    },
    {
      group: "Settings",
      items: [
        { name: "General Settings", icon: <Settings />, link: "/settings" },
        { name: "Privacy", icon: <Cookie />, link: "/privacy" },
        { name: "Logs", icon: <ScrollText />, link: "/logs" },
      ],
    },
  ];

  return (
    <div className="hidden lg:flex flex-col min-w-[250px] max-w-[300px] h-screen border-r justify-between px-3 py-4 sticky top-0">
      <div className="flex flex-col gap-4 overflow-y-auto flex-grow">
        <div className="border rounded-md mb-6 overflow-hidden">
          <UserItem
            name="Goerge Graham"
            email="GoergeGraham23780@gamil.com"
            image="https://github.com/shadcn.png"
          />
        </div>
        <div>
          <Command>
            <CommandList className="max-h-[350px]">
              {menuItems.map((group, i: number) => (
                <>
                  <CommandGroup key={i} heading={group.group}>
                    {group.items.map((item, index: number) => (
                      <Link href="/">
                        <CommandItem key={index} className="cursor-pointer">
                          <span>{item.icon}</span>
                          {item.name}
                        </CommandItem>
                      </Link>
                    ))}
                  </CommandGroup>
                  <CommandSeparator />
                </>
              ))}
            </CommandList>
          </Command>
        </div>
      </div>
      {/* Team Settings (pushed to the bottom) */}
      <div className="mt-auto">
        <Command>
          <Link href={"/team"}>
            <CommandItem className="mt-4 pt-4 cursor-pointer bg-muted/50 hover:bg-muted rounded-md relative">
              <span className="text-primary">
                <Settings />
              </span>
              <p className="font-semibold">Team Settings</p>
              <span className="absolute top-1 right-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                NEW
              </span>
            </CommandItem>
          </Link>
        </Command>
      </div>
    </div>
  );
}
