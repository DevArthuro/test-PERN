export interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UserDataExcludeId extends Omit<UserData, "id"> {}
