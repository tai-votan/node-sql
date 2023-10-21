import express from "express";
import user from "./user";

const routes = () => {
    const router = express.Router();

    router.use("/user", user);

    return router;
};

export default routes();
