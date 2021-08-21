import morgan from "morgan";
import express from "express";
import router from "./routes/";

const servidor = express();

servidor.use(morgan('dev'));
servidor.use(router);

module.exports = servidor;