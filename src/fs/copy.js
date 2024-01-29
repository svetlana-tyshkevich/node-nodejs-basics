import fs from "fs";
import {access, constants, mkdir, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filesDirPath = join(__dirname, 'files');
const copyFilesDirPath = join(__dirname, 'copy-files');

const filesDirExist = async () => {
    try {
        await access(filesDirPath, constants.F_OK);
        return true;
    } catch {
        return false
    }
}
const copy = async () => {
    const dirExist = await filesDirExist();
    if (!dirExist) {
        throw new Error("FS operation failed");
    } else {
        try {
            await mkdir(copyFilesDirPath);
            const files = await readdir(filesDirPath);
            files.forEach((file) => fs.copyFile(`${filesDirPath}/${file}`, `${copyFilesDirPath}/${file}`, (err) => {
                    if (err) throw new Error("FS operation failed");
                })
            )
        } catch {
            throw new Error("FS operation failed");
        }
    }
};

await copy();
