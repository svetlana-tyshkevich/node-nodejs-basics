import fs from "fs";
import { stdin } from 'node:process';
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToWrite.txt')

const write = async () => {
    const writableStream = fs.createWriteStream(filePath);

    stdin.pipe(writableStream)
};

await write();