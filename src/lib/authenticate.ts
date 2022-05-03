import * as jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

export const authenticate = (req) => {
  // get token from cookies
  const token = req.cookies.token;
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        reject(new Error(`Unauthorized`));
      } else {
        prisma.user.findUnique({ where: { id: decoded.sub } }).then((user) => {
          if (user) {
            return resolve(user);
          } else {
            reject(new Error(`Unauthorized`));
          }
        });
      }
    });
  });
};
