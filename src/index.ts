import { server } from "./server/server";
const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
