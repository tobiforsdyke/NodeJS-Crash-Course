const fs = require('fs');
const path = require('path');

// CREATE FOLDER:
// fs.mkdir(path.join(__dirname, '/testfolder'), {}, err => {
//     if(err) throw err;
//     console.log('Folder has been created!');
// });

// CREATE AND WRITE TO A FILE:
// fs.writeFile(path.join(__dirname, '/testfolder', 'hello.txt'), 'Hello, this is some text for the file.', err => {
//     if(err) throw err;
//     console.log('File has been created and written to!');
// });

// APPEND TO FILE:
// fs.appendFile(path.join(__dirname, '/testfolder', 'hello.txt'), 'and this is some more text for the same file!', err => {
//     if(err) throw err;
//     console.log('File has been created and written to!');
// });

// READ FILE:
fs.readFile(path.join(__dirname, '/testfolder', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

// RENAME FILE:
fs.rename(
    path.join(__dirname, '/testfolder', 'hello.txt'),
    path.join(__dirname, '/testfolder', 'hello-renamed.txt'),
    err => {
        if(err) throw err;
        console.log('File was renamed...');
    }
);

