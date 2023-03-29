import { Request } from 'express';
import { omit } from 'src/helpers/omit';
import { Method } from 'src/types/methods';
import { LikeComentarioModel } from '../models/likecomentario.models';

class crearLikeComentario {

  readonly method = Method.POST;
  readonly route = '/crearLikeComentario';
  readonly middlewares = [];

  async on(req: Request): Promise<any> {
    const LikeComentario = req.body;
    console.log(LikeComentario)
    const nuevoLikeComentario = await LikeComentarioModel.create(
      LikeComentario
    )

    return {
      user: omit(nuevoLikeComentario.toJSON(), ''),
    };
  }
}

export default new crearLikeComentario();