import { axiosInstance as request } from "@/utils";
import { UserData, UserDataExcludeId } from "@/types";

export const getAllUsers = async () => {
  try {
    const response = await request.get("/users");
    const data: UserData[] = await response.data;
    return data.reverse();
  } catch (error) {
    console.log("Error fetching data", error);
  }
};

export const getUser = async (id_user: string) => {
  try {
    const response = await request.get(`/users/${id_user}`);
    const data: UserData = await response.data;
    return data;
  } catch (error) {
    console.log("Error fetching data", error);
  }
};

export const createUser = async (
  userData: UserDataExcludeId
): Promise<{ data?: UserData; status: boolean }> => {
  try {
    const response = await request.post("/users", userData);
    const data: UserData = await response.data;
    return { status: true, data };
  } catch (error) {
    console.log("Error fetching data", error);
    return { status: false };
  }
};

export const deleteUser = async (
  id_user: number
): Promise<{ data?: UserData; status: boolean }> => {
  try {
    const response = await request.delete(`/users/${id_user}`);
    const data: UserData = await response.data;
    return { status: true, data };
  } catch (error) {
    console.log("Error fetching data", error);
    return { status: false };
  }
};

export const editUser = async (
  id_user: number,
  dataChange: UserDataExcludeId
): Promise<{ data?: UserData; status: boolean }> => {
  try {
    const response = await request.patch(`/users/${id_user}`, dataChange);
    const data: UserData = await response.data;
    return { status: true, data };
  } catch (error) {
    console.log("Error fetching data", error);
    return { status: false };
  }
};
