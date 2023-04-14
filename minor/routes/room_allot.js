const express = require('express');
const User = require('../models/user');
const Room = require('../models/room');
var jwt = require('jsonwebtoken');
const {body,validationResult} = require('express-validator');
const JWT_SECRET = 'Harryisagoodb$oy';
const router = express.Router()
const register_verify = require('../middleware/register_verify');
// route 1: to get the room details
router.post('/bookroom',register_verify,[
    body('room', 'Please book a valid Room').isInt({ min:1, max: 2000}),],async (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); //agar empty nahi hain means error hain
          }
        else{
            const usera = await User.findById(req.user)
            console.log(usera._id)
            
            if(usera.room)
            {
                console.log("room is true")
                return res.status(400).json({ errors:'User already had booked a room',response:false});
        }
                

            
            
            try {
                const room = await Room.findOne({ room_no: req.body.room })
                if(room){
                    return res.status(400).json({ errors:'room is already booked',response:false});
                }
                else{
                
                const room_obj = new Room({
                    user:req.user,name:usera.name,room_no:req.body.room
                })
                const room_obj_save = await room_obj.save()
                let student = await User.updateOne({_id:usera._id},{$set: {room: true}});
                res.json({success:'room regestration done , now login again and create fresh session',response:true})
                }
            } catch (error) {
                console.log(error)
                res.status(500).json({ errors:'server error',response:false})
            }

        }
        
})
// router 2 : to get attendance history
router.get('/detailsroom',register_verify,async (req,res)=>{
    try {
        const roomdetails = await Room.find(({ "room_no" : { $gt: 0, $lt: 500 } } ))
        res.json(roomdetails)
    } catch (error) {
        console.log(error)
        res.status(500).json({ errors:'server error'})
    }
})
module.exports=router