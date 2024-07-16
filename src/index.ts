import { server } from "./server/server";
const PORT = 3333;

server.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
