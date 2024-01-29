import fs from "fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
    fs.readFile(filePath, {encoding: 'utf8'}, (err, data) => {
        if (err) throw new Error("FS operation failed");
        console.log(data)
    })
};

await read();