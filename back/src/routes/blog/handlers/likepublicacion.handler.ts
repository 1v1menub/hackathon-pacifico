import { Request } from 'express';
import { omit } from 'src/helpers/omit';
import { Method } from 'src/types/methods';
import { LikePublicacionModel } from '../models/likepublicacion';

class crearLikePublicacion {

  readonly method = Method.POST;
  readonly route = '/crearLikePublicacion';
  readonly middlewares = [];

  async on(req: Request): Promise<any> {
    const LikePublicacion= req.body;
    console.log(LikePublicacion)
    const nuevoLikePublicacion = await LikePublicacionModel.create(
      LikePublicacion
    )

    return {
      user: omit(nuevoLikePublicacion.toJSON(), ''),
    };
  }
}

export default new crearLikePublicacion();