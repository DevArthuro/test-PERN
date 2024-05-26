import { axiosInstance as request } from "@/utils";
import { UserData, UserDataExcludeId } from "@/types";

export const getAllUsers = async () => {
  try {
    const response = await request.get("/users");
    const data: UserData[] = await response.data;
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
