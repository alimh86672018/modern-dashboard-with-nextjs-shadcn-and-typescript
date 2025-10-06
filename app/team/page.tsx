/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import UserItem from "@/components/UserItem";
import { useState } from "react";

type Member = {
  email: string;
  full_name: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "Pending" | "Active" | "Inactive" | "Invited";
};

export default function TeamSettings() {
  const [members, setMembers] = useState<Member[]>([
    {
      email: "reza@gmail.com",
      full_name: "reza mohammadi",
      role: "Admin",
      status: "Active",
    },
    {
      email: "javad@gmail.com",
      full_name: "javad javan",
      role: "Editor",
      status: "Active",
    },
    {
      email: "ali@gmail.com",
      full_name: "ali alavi",
      role: "Viewer",
      status: "Pending",
    },
    {
      email: "arash@gmail.com",
      full_name: "arash rezvani",
      role: "Editor",
      status: "Inactive",
    },
    {
      email: "mahshid@gmail.com",
      full_name: "mahshid ahmadi",
      role: "Viewer",
      status: "Invited",
    },
  ]);
  return (
    <>
      <h1 className="text-2xl font-bold mt-6 mb-6">Team Settings</h1>
      <div className="flex justify-between gap-2 mb-8">
        <Command className="border rounded-lg [&_[cmdk-input-wrapper]]:border-b-0">
          <CommandInput placeholder="Type an email to invite..." />
        </Command>
        <Button className="mb-4" variant="secondary">
          Add New Member
        </Button>
      </div>
      <Table>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.email}>
              <TableCell className="font-medium">
                <UserItem name={member.full_name} email={member.email} />
              </TableCell>
              <TableCell>
                <Badge>{member.role}</Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    member.status === "Active"
                      ? "success"
                      : member.status === "Inactive"
                      ? "destructive"
                      : member.status === "Pending"
                      ? "warning"
                      : member.status === "Invited"
                      ? "invite"
                      : "outline"
                  }
                >
                  {member.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
