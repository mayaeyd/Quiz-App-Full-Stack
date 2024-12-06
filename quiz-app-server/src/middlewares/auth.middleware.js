export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({
      message: "Unauthorized",
    });
  }

  const splitted = authHeader.split(" ");

  if (splitted.length !== 2 || splitted[0] !== "Bearer") {
    return res.status(401).send({
      message: "Unauthorized",
    });
  }

  const token = splitted[1];

  try {
    //verify jwt token
    console.log("Auth middleware passed ", token);
    next();
  } catch (error) {
    return res.status(401).send({
      message: "Unauthorized",
    });
  }
};