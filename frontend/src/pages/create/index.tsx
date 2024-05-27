import UserForm from "@/common/userForm";
import { createUser } from "@/handlers";
import { UserDataExcludeId } from "@/types";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

const CreateUser = () => {
  const router = useRouter();

  const handleCreateUser = async (values: UserDataExcludeId) => {
    const userData = await createUser(values);
    if (userData.status) {
      router.push(`/${userData.data?.id}`);
    }
    toast("We can create the user");
  };

  return (
    <>
      <ToastContainer />
      <UserForm
        user={{ name: "", email: "", password: "" }}
        onSubmit={handleCreateUser}
      >
        <p>You can create user and interact later with him later</p>
      </UserForm>
    </>
  );
};

export default CreateUser;
