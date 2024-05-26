import CardComponent from "@/components/cardComponent";
import { getAllUsers } from "@/handlers/users";
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
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="space-y-4 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          User Management App
        </h1>
        <div className="space-y-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
            >
              <CardComponent user={user} />
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                Borrar
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
