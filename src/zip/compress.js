import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import{ createGzip } from 'zlib';

const __dirname = import.meta.dirname;

const compress = async () => {
    const readable = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const writable = fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
    pipeline(readable, createGzip(),writable, (err) => {
        if (err) throw new Error(err);
    });
};

await compress();