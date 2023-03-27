import { Request } from 'express';
import { omit } from 'src/helpers/omit';
import { Method } from 'src/types/methods';
import { PublicacionModel } from '../models/publicacion.models';

class crearPublicacion {

  readonly method = Method.POST;
  readonly route = '/crearPublicacion';
  readonly middlewares = [];

  async on(req: Request): Promise<any> {
    const Publicacion = req.body;
    console.log(Publicacion)
    const nuevaPublicacion = await PublicacionModel.create(
      Publicacion
    )

    return {
      user: omit(nuevaPublicacion.toJSON(), ''),
    };
  }
}

export default new crearPublicacion();