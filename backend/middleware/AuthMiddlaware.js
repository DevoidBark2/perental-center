import jwt from "jsonwebtoken";

const authCheck = (req,res,next) => {
    if(req.method === "OPTIONS"){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            res.status(401).json({message:"Не авторизован"})
        }
        const decoded = jwt.verify(token,"sECRET_kEY");
        req.user = decoded
        next()
    } catch (e){
        res.status(400).json({message:"Не авторизован"})
    }
}

module.exports = authCheck