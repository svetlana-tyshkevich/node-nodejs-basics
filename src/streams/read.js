import fs from "fs";
import { stdout } from 'node:process';

const read = async () => {
    const readableStream = fs.createReadStream('src/streams/files/fileToRead.txt');
    readableStream.on('readable', () => {
       readableStream.read();

    });
    readableStream.pipe(stdout)
};

await read();