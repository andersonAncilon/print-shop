const jwt = require("jsonwebtoken");

module.exports = {

    verifyJWT(req, res, next) {
        const token = req.headers["acces-token"];
        if (!token) return res.status(401).send({auth: false, message: "No token provided!"});

        jwt.verify(token, process.env.SECRET, (error, decoded) => {
            if (err) return res.status(500).send({ auth: false, message: "Failed to authenticate!"})
            
            req.userNanem = decoded.id;
            next();
        })
        
    }
}