import express from "express";
import cors from "cors";

import { connectDB } from "./db.js";

const app = express();

const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

function connectToDbAndStartServer() {
  connectDB().catch((err) => console.log(`error: ${err}`));
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

connectToDbAndStartServer();
