const fs = require('fs')


// // reading
// fs.readFile('./docs/blog.txt', (err,data) => {
// if(err){
//     console.log(err)
// }
// console.log(data.toString());
// })
// console.log('last line');
// writing
// fs.writeFile('./docs/blog.txt', 'Hello,world',() =>{
//     console.log('file was made');
// })
// fs.writeFile('./docs/blog2.txt', 'Hello, Again',() =>{
//     console.log('file was made');
// })
// directories
if(!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
    if (err){
        console.log(err);
    }
    console.log('folder created');
})}else{
    fs.rmdir('./assets', (err)=>{
        if (err){
            console.log(err)
        }
        console.log('folder deleted');
    })
}
// deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file gone');
    })
}