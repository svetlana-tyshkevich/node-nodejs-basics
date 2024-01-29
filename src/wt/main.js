import {
    Worker, isMainThread, parentPort, workerData,
} from 'node:worker_threads';
import * as os from "os";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const workerPath = join(__dirname, 'worker.js')

const createWorker = (dataNum) => {
    return new Promise((resolve) => {
        const worker = new Worker(workerPath, {
            workerData: {number: 10 + dataNum},
        });
        worker.on('message', (message) => resolve({status: 'resolved', data: message}));
        worker.on('error', () => resolve({status: 'error', data: null}));
    })
}

const performCalculations = async () => {
    const cpusNumber = os.cpus().length;
    const promises = [];

    for (let i = 0; i < cpusNumber; i++) {
        promises.push(createWorker(i))
    }

    Promise.all(promises).then(values => {
        console.log(values)
    })

};

await performCalculations();