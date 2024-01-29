import fs from "fs";
import { stdout } from 'node:process';
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
    const readableStream = fs.createReadStream(filePath);
    readableStream.on('readable', () => {
       readableStream.read();

    });
    readableStream.pipe(stdout)
};

await read();