import UserForm from "@/common/userForm";
import { createUser } from "@/handlers";
import { UserDataExcludeId } from "@/types";
import { ToastContainer, toast } from "react-toastify";

const CreateUser = () => {
  const handleCreateUser = async (values: UserDataExcludeId) => {
    createUser(values);
    toast("Usuario creado");
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
