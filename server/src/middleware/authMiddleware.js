import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    console.log("================================");
    console.log("Authorization Header:", req.headers.authorization);

    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    console.log("Extracted Token:", token);
    console.log("JWT Secret Loaded:", process.env.JWT_SECRET);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("Decoded Token:", decoded);

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    console.log("JWT Verify Error:");
    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};