const authorization = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    console.log(req.body);
    console.log("----------");
    if (!token) throw new Error("Authorization token was not found !");
    if (token.split(" ")[1] != process.env.TOKEN)
      throw new Error("Authorization token was wrong !");
    next();
  } catch (e) {
    const err = new Error(e);
    err.code = 403;
    next(err);
  }
};

export { authorization };
