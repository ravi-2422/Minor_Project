var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Harryisagoodb$oy';
const fetchuser = (req, res, next) => {
    const token2 = req.cookies.access_token;
    console.log(token2)
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please login" })
    }
    try {const data =  jwt.verify(token, JWT_SECRET);
        if (data.id && !data.room){
            res.send({ error: "Please book room " })
        }
        else if (!data.id){res.send({ error: "invalid Session" })}
        else{
            id=data.id
            req.user = id;
            req.room_no=data.room.room_no
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(401).send({ error: "invalid Session" })
    }

}
module.exports = fetchuser;