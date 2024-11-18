import express from "express";
import config from "config";
import log from "./logger/logger";

const app = express();

const port = config.get("port") as number;
const host = config.get("host") as string

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
    log.info(`Server listening at http://${host}:${port}`);
})


// const router = express.Router();