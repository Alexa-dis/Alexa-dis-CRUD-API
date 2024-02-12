import { getAll } from "../utils/usersModel";

const getAllUsers = async (req: any, res: any) => {
  try {
    const users = await getAll();
    res.writeHead(200, { "Content-Type": "aplication/json" });
    res.end(JSON.stringify(users));
  } catch (error) {
    console.log(error);
  }
};

export default getAllUsers;
