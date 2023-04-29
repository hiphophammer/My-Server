import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
console.log(import.meta.url);

app.listen(8080, () => {
  console.log(`listening on 8080`);
});

app.get("/pet", (res, req) => {
  req.send("ㅇㅅㅇ");
});

app.get("/", (res, req) => {
  req.sendFile(__dirname + "/index.html");
});
