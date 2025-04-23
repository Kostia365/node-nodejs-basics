const rename = async () => {
    // Write your code here 
    fs.rename('node-nodejs-basics/src/fs/files/wrongFilename.txt', 'node-nodejs-basics/src/fs/files/properFilename.md', (err) => {
        if (err) {
            console.error('Error renaming file:', err);
            return;
        }
        console.log('File renamed successfully!');
    });
};

await rename();