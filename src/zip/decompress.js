import {createReadStream, createWriteStream} from "node:fs";
import {createGunzip} from "node:zlib";

const decompress = async () => {
    const toUnzip = createGunzip();
    const zippedFile = createReadStream('src/zip/files/archive.gz');
    const result = createWriteStream('src/zip/files/fileToCompress.txt');

    zippedFile.pipe(toUnzip).pipe(result);
};

await decompress();