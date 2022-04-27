import * as jwt from 'jsonwebtoken';

export const authenticate = (req, res) => {
  // get token from cookies
  const token = req.cookies.token;
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).send(`Unauthorized`);
    } else {
      res.status(200).send(decoded);
    }
  });
};
