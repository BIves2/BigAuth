const jwt = require('jsonwebtoken')
const SECRET = 'sk_123i4veppps'

function verifyToken(req, res, next){
    const header = req.headers['autorization'];
    if(!header){
        return res.status(403).send("token required")
    } 
    const token = header.split(" ")[1];
    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) return res.status(401).send("Invalid token");
        req.user = decoded;
        next();
    })
}

module.exports = verifyToken;