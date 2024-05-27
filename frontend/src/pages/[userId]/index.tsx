import UserForm from "@/common/userForm";
import { getUser } from "@/handlers";
import { UserData } from "@/types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

interface Props {
  user: UserData;
}

const UserDetails = () => {
  const router = useRouter();

  const [user, setUser] = useState<UserData | null>(null);

  const { userId } = router.query;

  if (typeof userId !== "string") {
    throw new Error("The user id is not provided");
  }

  // const handleCreateUser = async (values: UserDataExcludeId) => {
  //   createUser(values);
  //   toast("Usuario Editado");
  // };

  useEffect(() => {
    const fetchUser = async () => {
      const userFetched = await getUser(userId);
      if (userFetched) {
        setUser(userFetched); // Avoid the undefined promise resolved
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <>
      <ToastContainer />
      {user ? (
        <UserForm
          user={{ name: user.name, email: user.email }}
          onSubmit={() => {}}
        >
          <p>You can edit your information</p>
        </UserForm>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  if (typeof context.query.userId !== "string") {
    throw new Error("The user id is not provided");
  }

  const user = await getUser(context.query.userId);

  if (!user) {
    throw new Error("The user id is not found");
  }

  const props = {
    user,
  };

  return { props };
};

export default UserDetails;
