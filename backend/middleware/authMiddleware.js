import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    // check token existence (assuming you're using cookie-parser)
    const token = req.cookies?.token;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized. No token found.", isSuccess: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // attach decoded user to request
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Invalid Token", isSuccess: false });
  }
};
