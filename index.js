//ДЗ:
//
// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user
// ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)

const path = require('path');
const fs = require('fs')


// fs.mkdir(path.join(__dirname,'main'),(err)=>{
//     if(err){
//         console.log(err)
//         throw err;
//     }
// })
//
// fs.mkdir(path.join(__dirname,'main','onLine'),(err)=>{
//     if(err){
//         console.log(err)
//         throw err;
//     }
// })
// fs.mkdir(path.join(__dirname,'main','inPerson'),(err)=>{
//     if(err){
//         console.log(err)
//         throw err;
//     }
// })
//
// fs.writeFile(path.join(__dirname,'main','main.js'),
//     'const OnlineUsersArr=[{user1:{name: "Andrii", age: 22, city: "Lviv" }}]' +'\n'+
//     'const  inPersonUsersArr=[{user2:{name: "Olrg", age: 23, city: "Lviv" }}]',
//     (err)=>{
//     if(err){
//         console.log(err);
//         throw  err;
//     }
//     })

// fs.writeFile(path.join(__dirname,'main','inPerson','inPerson.txt'),'name: "Andrii",\nage: 22,\ncity: "Lviv"',
//     (err)=>{
//     if (err){
//         console.log(err);
//         throw err;
//     }
//     })
//
// fs.writeFile(path.join(__dirname,'main','onLine','onLine.txt'),'name: "Oleg",\nage: 23,\ncity: "Lviv"',
//     (err)=>{
//         if (err){
//             console.log(err);
//             throw err;
//         }
//     })
//----------------------------------------------
//- функція міняє місцями юзерів
const onLinePath = path.join(__dirname, 'main', 'onLine', 'onLine.txt');
const inPersonPath= path.join(__dirname,'main','inPerson','inPerson.txt');

const replace = (route) => {
   if(route === onLinePath||route === inPersonPath){
       fs.readFile(onLinePath, 'utf8',(err,data)=>{
           if(err){
               console.log(err);
               throw err;
           }
           let onLineData = data;

           fs.readFile(inPersonPath,'utf8',(err,data)=>{
               if(err){
                   console.log(err);
                   throw err;
               }
               let inPersonData = data;


               fs.writeFile(inPersonPath,onLineData,(err)=>{
                   if(err){
                       console.log(err)
                       throw err;
                   }
               })
               fs.writeFile(onLinePath,inPersonData,(err)=>{
                   if(err){
                       console.log(err)
                       throw err;
                   }
               })
           })

       })
   }
}

replace(path.join(__dirname, 'main', 'onLine', 'onLine.txt'))




