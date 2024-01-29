import fs from "fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const oldPilePath = join(__dirname, 'files', 'wrongFilename.txt');
const newPilePath = join(__dirname, 'files', 'properFilename.txt');

const rename = async () => {

    fs.rename(oldPilePath, newPilePath, (err) => {
        if (err) throw new Error("FS operation failed");
    });
};

await rename();