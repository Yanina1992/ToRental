import { IUser } from "./iuser";

export interface IAccessData {
  access_token: string;
  user:IUser,
  status:string,
}
