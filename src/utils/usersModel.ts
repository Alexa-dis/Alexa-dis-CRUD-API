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
    const newUser: any = { id: uuidv4(), ...user };
    users.push(newUser);
    writeDataToFile("./src/users.json", users);
    resolve(newUser);
  });
};

export const update = (id: string, user: User) => {
  return new Promise((resolve, reject) => {
    const index = users.findIndex((u: User) => u.id === id);
    users[index] = { id, ...user };
    writeDataToFile("./src/users.json", users);
    resolve(user);
  });
};

export const remove = (id: string) => {
  return new Promise((resolve, reject) => {
    const filteredUsers = users.filter((u) => u.id !== id)
    writeDataToFile("./src/users.json", filteredUsers);
    resolve(filteredUsers);
  });
};

export default { getAll, getById, create, update, remove };
