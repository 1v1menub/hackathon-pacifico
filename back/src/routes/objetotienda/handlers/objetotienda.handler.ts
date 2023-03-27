import { Request } from 'express';
import { omit } from 'src/helpers/omit';
import { Method } from 'src/types/methods';
import { ObjetoTiendaModel } from '../models/objetotienda.models';

class crearObjetoTienda {

  readonly method = Method.POST;
  readonly route = '/crearObjetoTienda';
  readonly middlewares = [];

  async on(req: Request): Promise<any> {
    const ObjetoTienda = req.body;
    console.log(ObjetoTienda)
    const nuevoObjetoTienda = await ObjetoTiendaModel.create(
      ObjetoTienda
    )

    return {
      user: omit(nuevoObjetoTienda.toJSON(), ''),
    };
  }
}

export default new crearObjetoTienda();