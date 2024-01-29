import {createGzip} from 'node:zlib';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';

const compress = async () => {

    const gzip = createGzip();
    const rawFile = createReadStream('src/zip/files/fileToCompress.txt');
    const result = createWriteStream('src/zip/files/archive.gz');

    rawFile.pipe(gzip).pipe(result)
};

await compress();