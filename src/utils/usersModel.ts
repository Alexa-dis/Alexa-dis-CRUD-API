import users from "../users.json";
import { User } from "./user";
import { v4 as uuidv4 } from "uuid";
import writeDataToFile from "./writeDataToFile";

export const getAll = () => {
  return new Promise((resolve, reject) => {
    resolve(users);
  });
};

export const getById = (id: string) => {
  return new Promise((resolve, reject) => {
    const user = users.find((u: User) => u.id === id);
    resolve(user);
  });
};

export const create = (user: User) => {
  return new Promise((resolve, reject) => {
    const newUser: User = { id: uuidv4(), ...user };
    users.push(newUser);
    writeDataToFile("./src/users.json", user);
    resolve(newUser);
  });
};

export default { getAll, getById, create };
