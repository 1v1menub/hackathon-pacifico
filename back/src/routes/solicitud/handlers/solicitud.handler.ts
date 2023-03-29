import { Request } from 'express';
import { omit } from 'src/helpers/omit';
import { Method } from 'src/types/methods';
import { SolicitudModel } from '../models/solicitud.models';

class crearSolicitud {

  readonly method = Method.POST;
  readonly route = '/crearSolicitud';
  readonly middlewares = [];

  async on(req: Request): Promise<any> {
    const Solicitud = req.body;
    console.log(Solicitud)
    const nuevaSolicitud = await SolicitudModel.create(
      Solicitud
    )

    return {
      user: omit(nuevaSolicitud.toJSON(), ''),
    };
  }
}

export default new crearSolicitud();