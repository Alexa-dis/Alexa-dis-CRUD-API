import { getById } from "../utils/usersModel";

const getUserById = async (req: any, res: any, id: string) => {
  try {
    const user = await getById(id);
    if (!user) {
      res.writeHead(404, { "Content-Type": "aplication/json" });
      res.end(JSON.stringify({ message: "User not found" }));
    } else {
      res.writeHead(200, { "Content-Type": "aplication/json" });
      res.end(JSON.stringify(user));
    }
  } catch (error) {
    console.log(error);
  }
};

export default getUserById;
