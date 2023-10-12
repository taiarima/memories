import React from "react";
import { useQuery } from "react-query";
import { fetchMemories } from "../api/index.js";

export default function UserMemories() {
  const { data: memories, isLoading } = useQuery({
    queryFn: () => fetchMemories(),
    queryKey: ["memories"],
  });
  return (
    <div className="p-8 text-center text-6xl text-white">
      This is where user memories goes
    </div>
  );
}
