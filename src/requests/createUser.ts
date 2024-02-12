import getPostData from "../utils/getPostData";
import { create } from "../utils/usersModel";

const createUser = async (req: any, res: any) => {
  try {
    const body: any = await getPostData(req);
    const { name, age, hobbies } = JSON.parse(body);
    const user = { name, age, hobbies };
    const newUser = await create(user);
    res.writeHead(201, { "Content-Type": "aplication/json" });
    return res.end(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
};

export default createUser;
