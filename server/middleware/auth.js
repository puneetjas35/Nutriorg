import jwt from 'jsonwebtoken'

const auth = async (request, response, next) => {
  try {
    let token = request.cookies?.accessToken;

    const authHeader = request.headers?.authorization;
    if (!token && authHeader?.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    console.log("TOKEN:", token);

    if (!token) {
      return response.status(401).json({
        message: "No token provided"
      });
    }

    const decode = jwt.verify(
      token,
      process.env.SECRET_KEY_ACCESS_TOKEN
    );

    console.log("DECODED TOKEN:", decode);

    request.userId = decode.id;
    next();

  } catch (error) {
    console.log("AUTH ERROR:", error);

    return response.status(401).json({
      message: error.message,
      error: true,
      success: false
    });
  }
}

export default auth;
