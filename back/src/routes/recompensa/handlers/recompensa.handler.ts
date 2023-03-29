import { Request } from 'express';
import { omit } from 'src/helpers/omit';
import { Method } from 'src/types/methods';
import { RecompensaModel } from '../models/recompensa.models';

class crearRecompensa {

  readonly method = Method.POST;
  readonly route = '/crearRecompensa';
  readonly middlewares = [];

  async on(req: Request): Promise<any> {
    const Recompensa = req.body;
    console.log(Recompensa)
    const nuevaRecompensa = await RecompensaModel.create(
      Recompensa
    )

    return {
      user: omit(nuevaRecompensa.toJSON(), ''),
    };
  }
}

export default new crearRecompensa();