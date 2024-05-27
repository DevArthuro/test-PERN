import CardComponent from "@/components/cardComponent";
import { deleteUser, getAllUsers } from "@/handlers";
import { UserData } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [users, setUsers] = useState<UserData[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      const usersFetched = await getAllUsers();
      setUsers(usersFetched ?? []); // Avoid the undefined promise resolved
    };

    fetchUsers();
  }, []);

  const handlerDelete = async (id_user: number) => {
    const userDeleted = await deleteUser(id_user);
    if (userDeleted && userDeleted.data) {
      toast("User has been deleted");
      const usersUpdated = users.filter((user) => {
        if (userDeleted.data && user.id !== userDeleted.data.id) {
          return user;
        }
      });
      setUsers(usersUpdated);
      return;
    }
    toast("User not has delete");
  };

  return (
    <>
      <ToastContainer />
      <div className="space-y-2">
        <div className="flex flex-row justify-center">
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            onClick={() => {
              router.push("/create");
            }}
          >
            Create new user
          </button>
        </div>
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
          >
            <CardComponent user={user} />
            <div className="flex flex-row justify-center gap-3">
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
                onClick={() => {
                  router.push(`/${user.id}`);
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                onClick={async () => {
                  handlerDelete(user.id);
                }}
              >
                Borrar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
