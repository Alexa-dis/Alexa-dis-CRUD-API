import http from "http";
import getAllUsers from "./requests/getAllUsers";
import getUserById from "./requests/getUserById";
import createUser from "./requests/createUser";
import updateUser from "./requests/updateUser";
import deleteUser from "./requests/deleteUser";

const server = http.createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    getAllUsers(req, res);
  } else if (req.url?.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    getUserById(req, res, id);
  } else if (req.url === "/api/users" && req.method === "POST") {
    createUser(req, res)
  } else if (req.url?.match(/\/api\/users\/([0-9]+)/) && req.method === "PUT") {
    const id = req.url.split("/")[3];
    updateUser(req, res, id);
  } else if(req.url?.match(/\/api\/users\/([0-9]+)/) && req.method === "DELETE") {
    const id = req.url.split("/")[3];
    deleteUser(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "aplication/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
