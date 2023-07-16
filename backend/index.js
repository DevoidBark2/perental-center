import express from "express";
import cors from "cors";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/api',router)



app.listen(4444);