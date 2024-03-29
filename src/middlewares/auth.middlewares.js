// importamos jwt
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
  try {
    // recuperar el token en postgres:
    // const token = req.headers["access-token"];

    // recuperar token en swagger:
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return next({
        status: 401,
        name: "not token",
        message: "token is not present on request headers",
      });
    }

    // decodificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_LOGIN, {
      algorithms: "HS512",
    });

    // el token esta expirado
    // el token es invalido

    req.user = decoded;
    next();
  } catch (err) {
    return next({
      status: 498,
      name: "Invalid or expired token",
      message:
        "Token is not valid or is expired, please check it out and try again",
    });
  }
};

module.exports = authenticate;
