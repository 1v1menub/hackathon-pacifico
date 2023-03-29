import { Request } from 'express';
import { omit } from 'src/helpers/omit';
import { Method } from 'src/types/methods';
import { ComentarioModel } from '../models/comentario.models';

class crearComentario {

  readonly method = Method.POST;
  readonly route = '/crearComentario';
  readonly middlewares = [];

  async on(req: Request): Promise<any> {
    const Comentario = req.body;
    console.log(Comentario)
    const nuevoComentario = await ComentarioModel.create(
      Comentario
    )

    return {
      user: omit(nuevoComentario.toJSON(), ''),
    };
  }
}

export default new crearComentario();