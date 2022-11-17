import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;
const URI = process.env.URI || "mongodb://localhost";
const DB = process.env.DB || "MEM";
const BASE = process.env.BASE || "recuperatorio";

export default {
  PORT,
  URI,
  DB,
  BASE,
};
