import { UserDataExcludeId } from "@/types";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  user: UserDataExcludeId;
  children: React.ReactNode;
  onSubmit: (values: UserDataExcludeId) => void;
}

const UserForm: React.FC<Props> = ({ user, children, onSubmit }) => {
  const router = useRouter();

  return (
    <>
      {children}
      <div className="flex flex-row justify-center">
        <button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          onClick={() => {
            router.push("/");
          }}
        >
          Return
        </button>
      </div>
      <Formik initialValues={user} onSubmit={onSubmit}>
        {({ values, handleSubmit, handleChange }): JSX.Element => (
          <Form
            onSubmit={handleSubmit}
            className="p-4 bg-blue-100 rounded shadow flex flex-col"
          >
            <input
              name="name"
              placeholder="Give us your name :)"
              value={values.name}
              onChange={handleChange}
              className="mb-2 w-full p-2 border border-gray-300 rounded"
            />
            <input
              name="email"
              placeholder="Give us your email :)"
              value={values.email}
              onChange={handleChange}
              className="mb-2 w-full p-2 border border-gray-300 rounded"
            />
            {typeof values.password === "string" && (
              <input
                name="password"
                placeholder="Give us your password :)"
                type="password"
                onChange={handleChange}
                value={values.password}
                className="mb-2 w-full p-2 border border-gray-300 rounded"
              />
            )}
            <input
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded cursor-pointer"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UserForm;
