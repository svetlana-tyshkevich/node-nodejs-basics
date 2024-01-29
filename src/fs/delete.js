import fs from "fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToRemove.txt')

const remove = async () => {
    fs.rm(filePath, (err) => {
        if (err) throw new Error("FS operation failed");
    });
};

await remove();