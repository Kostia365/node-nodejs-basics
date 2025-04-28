import fs from'fs';

const __dirname = import.meta.dirname;

const remove = async () => {
  fs.unlink(__dirname + '/files/fileToRemove.txt', (err) => {
    if (err) {
      console.error('FS operation failed');
      return;
    }
    console.log('File removed successfully!');
  }
  ); 
};

await remove();