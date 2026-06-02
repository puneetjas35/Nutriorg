import jwt from 'jsonwebtoken'

const auth = async (request, response, next) => {
  try {
    let token = request.cookies?.accessToken;

    // fallback to Authorization header
    const authHeader = request.headers?.authorization;
    if (!token && authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }

    // If token is missing, throw an error to jump to catch block
    if (!token) throw new Error("No token provided");

    const decode = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);
     console.log("DECODED TOKEN:", decode)
    request.userId = decode.id;
    next(); 

  } catch (error) {
    return response.status(500).json({
      message: "You have not logged in",
      error: true,
      success: false
    });
  }
}

export default auth;