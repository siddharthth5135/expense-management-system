import jwt from "jsonwebtoken";

export const authmiddleware =  async(req, res,next);
{
  try {

    //check token exist or not
    const token  = req.cookies.token

     if (!token) {
        return res.status(401).json({ message: "Unauthorized. No token found.", isSuccess: false });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = decoded.user;
    next();

    } catch (error) {
        return res.status(401).json({ message: "Invalid Token", success: false });
    }

}