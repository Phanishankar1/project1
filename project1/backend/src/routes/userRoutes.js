const express=require('express');
const Router=express.Router();
const UserController=require('../controllers/userController');
const upload=require('../middleware/upload')
 Router.post('/adddata',UserController.AddUserData);

//    Router.post('/', (req, res) => {
//     console.log("hi");
//     res.send("Received POST request");
// });
 Router.post("/adminform/admin/add_remove",UserController.AddEmployee)
 Router.post("/form",UserController.EmpLogin)
 Router.post('/form/:id',UserController.Addwork)
 Router.get('/form/:id',UserController.Getinfo)
 Router.put('/savechanges/:id',upload.single('file'),UserController.Savechanges)
 Router.post('/adminloginform',UserController.AdminLoginForm)
module.exports=Router;