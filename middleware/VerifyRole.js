const jwt = require("jsonwebtoken");

exports.verifyRole = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) { console.log(err); return res.sendStatus(403); }

        if (decoded.role === "admin") {
            next();
        }
        else {
            return res.sendStatus(403);
        }
    })
}
