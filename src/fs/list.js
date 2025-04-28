import fs from 'fs';

const __dirname = import.meta.dirname;

const list = async () => {
fs.readdir(__dirname + 'files', (err, files) => {
    if (err) {
        console.error('FS operation failed');
        return;
    }
    for (let file of files) {
        console.log(file);
    }
});
};

await list();