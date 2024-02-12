import getPostData from "../utils/getPostData";
import { User } from "../utils/user";
import { getById, remove, update } from "../utils/usersModel";

const deleteUser = async (req: any, res: any, id: any) => {
  try {
    const user = await getById(id);
    if (!user) {
      res.writeHead(404, { "Content-Type": "aplication/json" });
      res.end(JSON.stringify({ message: "User not found" }));
    } else {
      await remove(id);
      res.writeHead(200, { "Content-Type": "aplication/json" });
      res.end(JSON.stringify({ message: "User deleted" }));
    }
  } catch (error) {
    console.log(error);
  }
};

export default deleteUser;
