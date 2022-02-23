//app.get('/signIn', (req,res)=>{
//     res.render('signIn')
// })
//
//
// app.post('/signIn' ,( req, res)=>{
//     const { body } = req.body
//     const validData =usersArr.filter( user=> user.email && user.password === body.email && body.password)
//     if(validData.length === 1){
//         res.render('acc', { validData })
//     }else{
//         res.render('err')
//     }
//
// })