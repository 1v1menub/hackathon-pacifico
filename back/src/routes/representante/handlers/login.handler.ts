import { Request } from 'express';
import { omit } from 'src/helpers/omit';
import { Method } from 'src/types/methods';
import { RepresentanteModel } from '../models/representante.models';
import Logger from 'src/helpers/logger';

const logger = Logger.create('backend:login');

class Login {
  readonly method = Method.POST;
  readonly route = '/login';
  readonly middlewares = [];

  async on(req: Request): Promise<any> {
    const { numerodedocumento, contrasena } = req.body;
    const user = await RepresentanteModel.findByPk(numerodedocumento);
    if (!user) {
      throw new Error('Usuario no existe');
    }

    if (contrasena !== user.contrasena) {
      throw new Error('La contraseña es inválida');
    }

    return {
      user
    }
  }
};

export default new Login();
