import app from "./app";
import config from "config";
import log from "./utils/logger/logger";

const port = config.get("port") as number;
const host = config.get("host") as string

app.listen(port, host, () => {
    log.info(`Server listening at http://${host}:${port}`);
})

