import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

import logger from "./src/utils/logger";
import routes from "./src/routes";
import ENV from "./src/configs/env";

dotenv.config();

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

app.use("/api", routes);

app.listen(ENV.PORT, () => {
    logger({ str: `Server is running at http://localhost:${ENV.PORT}` });
});
