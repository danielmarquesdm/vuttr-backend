import "reflect-metadata";
import express from "express";
import winston from "winston";
import expressWinston from "express-winston";
import "./database";
import { routes } from "./routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json(),
    winston.format.prettyPrint()
    ),
    meta: false,
    msg: "HTTP  ",
    expressFormat: true,
    colorize: false,
    ignoreRoute: function (req, res) { return false; }
  }));
  
  app.use(routes);
  app.listen(3000, () => console.log("Server is running on port 3000"));
