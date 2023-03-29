import { Request } from 'express';
import { omit } from 'src/helpers/omit';
import { Method } from 'src/types/methods';
import { UsuarioMisionModel } from '../models/usuariomision.models';

class crearUsuarioMision {

  readonly method = Method.POST;
  readonly route = '/crearUsuarioMision';
  readonly middlewares = [];

  async on(req: Request): Promise<any> {
    const UsuarioMision = req.body;
    console.log(UsuarioMision)
    const nuevoUsuarioMision = await UsuarioMisionModel.create(
      UsuarioMision
    )

    return {
      user: omit(nuevoUsuarioMision.toJSON(), ''),
    };
  }
}

export default new crearUsuarioMision();