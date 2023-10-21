import ENV from "../configs/env";

interface Logger {
    str: any;
    value?: any;
    type?: "success" | "warning" | "error" | "info";
}

const logger = (params: Logger) => {
    if (ENV.NODE_ENV !== "production") {
        const { str, type = "success", value = "" } = params;
        const message = {
            error: `\x1b[31m${str}\x1b[0m`,
            success: `\x1b[32m${str}\x1b[0m`,
            warning: `\x1b[33m${str}\x1b[0m`,
            info: `\x1b[36m${str}\x1b[0m`,
        }[type];
        console.log(message, value);
    }
};

export default logger;
