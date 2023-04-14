const express = require('express')
const User = require('../models/user')
const Room = require('../models/room')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const {body,validationResult} = require('express-validator') //this is for the validation
const JWT_SECRET = 'Harryisagoodb$oy';
const router = express.Router()
const fetchuser = require('../middleware/fetchuser')
//Route : 1 create a user using : post  '/api/auth/createuser' does not require auth
router.post('/createuser',[
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); //agar empty nahi hain means error hain
    }
    const salt = await bcrypt.genSalt(10);
    scpass = await bcrypt.hash(req.body.password,salt);
    try{
    let user=await User.findOne({email:req.body.email}); //mongo db ma search kiya hain ki waha pa phale sa user tho nahi hain
    if (user){
        res.status(400).json({error:'sorry user is already there'})
    }
    else{
    const user = await User.create({
            name: req.body.name,
            password: scpass,
            email: req.body.email,
          })
    const data ={
            id:user.id
    }
    const jwtData = jwt.sign(data, JWT_SECRET)
    res.json({jwtData,succes:`${req.body.name} your account is almost done`})}}
    catch(error){
        console.log(error.message)
        res.status(500).send('some error occured')
    }
})
//Router : 2 end point for the login 
router.post('/login',[
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password can not be blank').exists()
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); //agar empty nahi hain means error hain
    }
    else{
    const {email,password}=req.body;
    try{
        let user =await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"please try to login with correct dtails",response:false})
        }
        else{
            const passwordcompare = await bcrypt.compare(password,user.password)
            if (!passwordcompare){
                return res.status(400).json({error:"please try to login with correct dtails",response:false})
            }
            else{
                let room_no =await Room.findOne({user:user._id});
                if(!room_no){
                    const data ={
                        id:user.id,}
                    const jwtData = jwt.sign(data, JWT_SECRET)
                res.cookie("tid",jwtData,{
                    expires:new Date(Date.now()+6000),
                    httpOnly:true
                })  
                res.json({jwtData,succes:`${user.name} This is your jwt token for the today `,action:"room booking is pending",response:true})
                }else{
                    const data ={
                        id:user.id,
                        room:room_no
                    }
                    const jwtData = jwt.sign(data, JWT_SECRET)
                    res.cookie("tid",jwtData,{
                        
                        httpOnly:true
                    }).status(200)
                    res.json({jwtData,succes:`${user.name} This is your jwt token for the today `,action:"No Action Is Needed",response:true})
                }
                
            }
        }
    }
    catch(error){
        console.log(error)
        console.log(error.message)
        res.status(500).send('Internal server error ')
    }
}
})
//Router : 3 end point for the get user details
router.get('/getuser', fetchuser,  async (req, res) => {

    try {
      let userId = req.user;
      const user = await User.findById(userId).select("-password")
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })


module.exports=router