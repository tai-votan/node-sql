export function removeScriptTag(str = "") {
    if (typeof str !== "string") return str;
    return str.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
}

export function stripHTML(str = "") {
    if (typeof str !== "string") return str;
    return removeScriptTag(str)
        .replace(/<[^>]+>/g, " ")
        .replace(/ +/g, " ")
        .trim();
}

export function toSlug(str = "") {
    if (typeof str !== "string") return str;
    return stripHTML(str)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[đĐ]/g, "d")
        .replace(/([^0-9a-z-\s])/g, "-")
        .replace(/(\s+)/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export function removeEmptyValue(obj: object) {
    for (const key in obj) {
        if (obj[key as keyof typeof obj] === null || obj[key as keyof typeof obj] === undefined) {
            delete obj[key as keyof typeof obj];
        }
    }
    return obj;
}
