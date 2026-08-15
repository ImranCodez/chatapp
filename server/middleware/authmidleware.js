const sendResponse = require("../helpers/responsehandler");
const { verifyToken } = require("../helpers/token");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) return sendResponse(res, 400, "Invalid request");
    const decoded = verifyToken(token);
    if (!decoded) return sendResponse(res, 400, "Invalid request");
    req.user = decoded;
   next();
  } catch (error) {
   sendResponse(res, 400, "Invalid  request");
    console.log(error);
  }
};
module.exports = { authMiddleware };
