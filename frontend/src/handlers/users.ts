import { axiosInstance as request } from "@/utils";
import { UserData } from "@/types";

export const getAllUsers = async () => {
  try {
    const response = await request.get("/users");
    const data: UserData[] = await response.data;
    return data.reverse();
  } catch (error) {
    console.log("Error fetching data", error);
  }
};
