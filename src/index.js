import dotenv from "dotenv"
import connectDb from "./db/DB.js";

dotenv.config({
  path : "./env"
})


connectDb()

