import { Request } from 'express';
import { omit } from 'src/helpers/omit';
import { Method } from 'src/types/methods';
import { MisionModel } from '../models/mision.models';

class crearMision {

  readonly method = Method.POST;
  readonly route = '/crearMision';
  readonly middlewares = [];

  async on(req: Request): Promise<any> {
    const Mision = req.body;
    console.log(Mision)
    const nuevoRepresentante = await MisionModel.create(
      Mision
    )

    return {
      user: omit(nuevoRepresentante.toJSON(), ''),
    };
  }
}

export default new crearMision();