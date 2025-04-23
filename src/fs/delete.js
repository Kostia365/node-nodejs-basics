import fs from'fs';

const remove = async () => {
  fs.unlink('node-nodejs-basics/src/fs/files/fileToRemove.txt', (err) => {
    if (err) {
      console.error('FS operation failed');
      return;
    }
    console.log('File removed successfully!');
  }
  ); 
};

await remove();