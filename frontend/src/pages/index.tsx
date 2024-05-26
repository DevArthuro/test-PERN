import CardComponent from "@/components/cardComponent";
import { getAllUsers } from "@/handlers";
import { UserData } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersFetched = await getAllUsers();
      setUsers(usersFetched ?? []); // Avoid the undefined promise resolved
    };

    fetchUsers();
  }, []);

  return (
    <div className="space-y-2">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
        >
          <CardComponent user={user} />
          <div className="flex flex-row justify-center gap-3">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
              Edit
            </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
            Borrar
          </button>
</div>
        </div>
      ))}
    </div>
  );
}
