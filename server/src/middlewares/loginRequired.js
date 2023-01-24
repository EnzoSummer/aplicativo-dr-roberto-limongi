import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' ');
  console.log(token);
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const administrador = await Admin.findOne({
      where: {
        id,
        email,
      },
    });

    if (!administrador) {
      return res.status(401).json({
        errors: ['Usuário inválido.'],
      });
    }

    req.administradorId = id;
    req.administradorEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
