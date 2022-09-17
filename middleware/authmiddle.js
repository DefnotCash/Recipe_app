import jwt from "jsonwebtoken";
import {UserModel} from "../models/Usermodel.js";


const verifyToken = async (req, res, next) => {
     let token;
  
     if (
       req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
     ) {
       try {
         token = req.headers.authorization.split(" ")[1];
         const decoded = jwt.verify(token, process.env.JWT_PASSCODE);
         req.user = await user.findById(decoded.id).select("-password");
         next();
       } catch (error) {
         console.error(error);
       }
     }
  
     if (!token) {
       res.status(401);
       throw new Error(`Not Authorized`);
     }
   };

   export default verifyToken;

//export const user = mongoose.model('user', userSchema)