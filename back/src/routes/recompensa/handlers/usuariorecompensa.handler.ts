import { Request } from 'express';
import { omit } from 'src/helpers/omit';
import { Method } from 'src/types/methods';
import { UsuarioRecompensaModel } from '../models/usuariorecompensa.models';

class crearUsuarioRecompensa {

  readonly method = Method.POST;
  readonly route = '/crearUsuarioRecompensa';
  readonly middlewares = [];

  async on(req: Request): Promise<any> {
    const UsuarioRecompensa = req.body;
    console.log(UsuarioRecompensa)
    const nuevoUsuarioRecompensa = await UsuarioRecompensaModel.create(
      UsuarioRecompensa
    )

    return {
      user: omit(nuevoUsuarioRecompensa.toJSON(), ''),
    };
  }
}

export default new crearUsuarioRecompensa();