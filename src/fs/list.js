import fs from "fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dirPath = join(__dirname, 'files')

const list = async () => {
    fs.readdir(dirPath, {encoding: 'utf-8'}, (err, data) => {
       if (err) throw new Error("FS operation failed");
        console.log(data)
    })
};

await list();