import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { fetchMemories } from "../api/index.js";
import Memory from "../components/Memory.js";
import LoadingScreen from "../components/LoadingScreen.js";
import { userSelector } from "../slices/user";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function UserMemories() {
  const { data: memories, isLoading } = useQuery({
    queryFn: () => fetchMemories(),
    queryKey: ["memories"],
  });

  const navigate = useNavigate();

  const user = useSelector(userSelector);
  useEffect(() => {
    if (!user.loggedIn) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="p-8 text-center text-6xl text-white">
      {isLoading ? (
        <div className="mx-auto -mt-48 flex items-center">
          <LoadingScreen />
        </div>
      ) : (
        <div className="m-4 grid grid-cols-1 gap-4 bg-customRed/70 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {memories?.map((memory) => (
            <Memory memory={memory} key={memory.id} />
          ))}
        </div>
      )}
    </div>
  );
}
