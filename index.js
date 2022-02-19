//1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу,
// дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так

const path = require('path');
const fs = require('fs');
//
// fs.writeFile(path.join(__dirname,'first.txt'),'first',(err)=>{
//     if(err){
//         console.log(err);
//         throw err;
//     }
//     fs.readFile(path.join(__dirname,'first.txt'),(err,data)=>{
//         if (err){
//             console.log(err);
//             throw err;
//         }
//         fs.writeFile(path.join(__dirname,'new_first.txt'),data+'---it is from first',(err)=>{
//             if(err){
//                 console.log(err);
//                 throw err;
//             }
//         })
//     })
// })
//----------------------------------------------------------
//2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній,
// старий файл видаліть після того як все завершиться. Також вийде callback hel

// fs.writeFile(path.join(__dirname,'second.txt'),'second',(err)=>{
//     if(err){
//         console.log(err)
//         throw err;
//     }
//     fs.readFile(path.join(__dirname,'second.txt'),(err,data)=>{
//         if (err){
//             console.log(err)
//             throw err;
//         }
//         const info=data
//         fs.mkdir(path.join(__dirname,'new_second'),(err)=>{
//             if (err){
//                 console.log(err);
//                 throw   err;
//             }
//             fs.writeFile(path.join(__dirname,'new_second','new_second.txt'),data,(err)=>{
//                 if (err)   {
//                     console.log(err);
//                     throw err;
//                 }
//                 fs.unlink(path.join(__dirname,'second.txt'),(err)=>{
//                     if(err){
//                         console.log(err);
//                         throw err;
//                     }
//                 })
//             })
//         })
//     })
// })

//-------------------------------------
//3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані
// (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані
// які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти,
// якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

// fs.mkdir(path.join(__dirname,'third'),(err)=>{
//     if (err){
//         console.log(err);
//         throw err;
//     }
//     fs.mkdir(path.join(__dirname,'third','one'),(err)=>{
//         if (err){
//             console.log(err);
//             throw err;
//         }
//         fs.writeFile(path.join(__dirname,'third','one','one.txt'),'one',(err)=>{
//             if(err){
//                 console.log(err)
//                 throw err;
//             }
//         })
//
//         fs.mkdir(path.join(__dirname,'third','two'),(err)=>{
//             if (err){
//                 console.log(err);
//                 throw err;
//             }
//
//             fs.mkdir(path.join(__dirname,'third','two','inTwo'),(err)=>{
//                 if (err){
//                     console.log(err);
//                     throw err;
//                 }
//
//             })
//         })
//     })
// })

//- функція, що очищує дані в файлі, якщо це файл і міняє назву папки,якшо це папка
const refactor = (dir) => {
    fs.stat(dir, (err, stats) => {
        if (err) {
            console.log(err)
            throw err;
        }
        if (stats.isFile()) {
            fs.writeFile(dir, '', (err) => {
                if (err) {
                    console.log(err)
                    throw err;
                }
            })
        } else {
            fs.rename(path.join(__dirname, 'third', 'two', 'inTwo'), path.join(__dirname, 'third', 'two', 'inTwo_new'),
                (err) => {
                    if (err) {
                        console.log(err)
                        throw  err;
                    }
                })
        }
    })

}

refactor(path.join(__dirname, 'third', 'two', 'inTwo'))




















