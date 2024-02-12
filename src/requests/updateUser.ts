import getPostData from "../utils/getPostData";
import { User } from "../utils/user";
import { getById, update } from "../utils/usersModel";

const updateUser = async (req: any, res: any, id: any) => {
  try {
    const user: any = getById(id);

    if (!user) {
      res.writeHead(404, { "Content-Type": "aplication/json" });
      res.end(JSON.stringify({ message: "User not found" }));
    } else {
      const body: any = await getPostData(req);
      const { name, age, hobbies } = JSON.parse(body);
      const userData: User = {
        name: name || user.name,
        age: age || user.age,
        hobbies: hobbies || user.hobbies,
      };
      const updUser = await update(id, userData);
      res.writeHead(200, { "Content-Type": "aplication/json" });
      return res.end(JSON.stringify(updUser));
    }
  } catch (error) {
    console.log(error);
  }
};

export default updateUser;
