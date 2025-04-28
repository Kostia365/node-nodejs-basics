import fs from 'fs';

const __dirname = import.meta.dirname;

const read = async () => {
    fs.readFile(__dirname + 'files/fileToRead.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('FS operation failed');
            return;
        }
        console.log(data);
    });

};

await read();