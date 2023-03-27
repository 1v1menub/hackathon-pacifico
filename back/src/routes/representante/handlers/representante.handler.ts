import { Request } from 'express';
import { omit } from 'src/helpers/omit';
import { Method } from 'src/types/methods';
import {RepresentanteModel} from '../models/representante.models';

class crearRepresentante {

  readonly method = Method.POST;
  readonly route = '/crearRepresentante';
  readonly middlewares = [];

  async on(req: Request): Promise<any> {
    const Representante = req.body;
    console.log(Representante)
    const nuevoRepresentante = await RepresentanteModel.create(
      Representante
    )

    return {
      user: omit(nuevoRepresentante.toJSON(), 'numerodedocumento'),
    };
  }
}

export default new crearRepresentante();