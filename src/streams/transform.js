import {stdin, stdout} from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedString =  chunk.toString().split('').reverse().join('')
            callback(null, reversedString);
        },
    });
    stdin.pipe(reverseTransform).pipe(stdout)

};

await transform();