const Register=require('../../models/login');
const Employee=require('../../models/employee');
const Workdone=require('../../models/workdone');
const AdminLogin=require('../../models/adminlogin')

const AddUserData=async(req,res,next)=>{
   const {email,password}=req.body;
   const reg1=new Register({
    email,
    password
   })
   reg1.save();
   return res.send("basic Done");
}
const AddEmployee=async(req,res,next)=>{
    const {username,email,password,fullname,phone,address,role,image}=req.body;
    const newEmp=new Employee({
        username,
        email,
        password,
        fullname,
        phone,
        address,
        role,
        image
    })
    try{
        newEmp.save();
    }
    catch(err){
        console.log("exception occured at saving new emplooye");
    }
    return res.status(200).send("added successfully");
}
 const EmpLogin=async(req,res,next)=>{
        const {username,password}=req.body;
       
     let data=await Employee.findOne({username});
        if(data&&req.body.password===data.password)
            return res.status(200).json("true");
        return res.status(200).json("false");
   
 }
const Addwork=async (req,res)=>{
    
    try{
    const {date,username,content}=req.body;
   // console.log(req.body.date)
   const addwork=new Workdone({
    date,
    username,
    content
    })
    //console.log(addwork.date)
    addwork.save();
   return res.status(200).json(addwork);
     }
   catch(err){
      console.log("error at saving the workdata\n"+err);
   }
  
}
const Getinfo = async (req, res) => {
    try {
      const username = req.params.id;
     // console.log(username);
      const [gotData] = await Employee.find({username:username});
    // console.log(gotData);
      return res.status(200).json(gotData); // Return the found object as JSON
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  const Savechanges=async(req,res)=>{
    //const _id=req.params.id;

    const id = req.params.id;
   
   const {phone,address,role,fullname}=req.body;
//    console.log(id+" "+address+" "+role+" "+fullname);
 //console.log(req.body);
 const image=req.file.filename;
 console.log(image);

    let emp;
    try{
        emp=await Employee.findByIdAndUpdate(id,{
            role,
           phone,
            address,
            fullname,
            image
        }) 
    
    return res.send("saved successful")
    }
   catch(err){console.log(err)}
 // return res.send("mood");
  }
  const AdminLoginForm=async(req,res)=>{
    const {username,password}=req.body;
     //  console.log(username+" "+password);
    let data=await AdminLogin.findOne({username});
       if(data&&req.body.password===data.password)
           return res.status(200).json("true");
       return res.status(200).json("false");
  }
  
  
exports.AddUserData = AddUserData;
exports.AddEmployee=AddEmployee;
exports.EmpLogin=EmpLogin;
exports.Addwork=Addwork;
exports.Getinfo=Getinfo;
exports.Savechanges=Savechanges;
exports.AdminLoginForm=AdminLoginForm;