import jwt from 'jsonwebtoken';

function generateToken(id) {
  const payLoad = {
    id: id,
  };
  return jwt.sign(payLoad, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
}

export default generateToken;
