const __dirname = import.meta.dirname;

const rename = async () => {


    fs.rename(__dirname + 'files/wrongFilename.txt', __dirname + 'files/properFilename.md', (err) => {
        if (err) {
            console.error('Error renaming file:', err);
            return;
        }
        console.log('File renamed successfully!');
    });
};

await rename();