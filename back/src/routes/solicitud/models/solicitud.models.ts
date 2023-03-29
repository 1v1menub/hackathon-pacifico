import {DataTypes} from 'sequelize';

import {sequelize} from '../../../helpers/database';

export const SolicitudModel = sequelize.define('solicitud', {

	idsolicitud:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
  idmision:{type:DataTypes.INTEGER, allowNull:false},
  numerodedocumento:{type:DataTypes.INTEGER, allowNull:false},
  descripcion:{type:DataTypes.TEXT, allowNull:false},
  urlsfotossolicitud:{type:DataTypes.JSON, allowNull:true},
  estado:{type:DataTypes.BOOLEAN, allowNull:true}
})