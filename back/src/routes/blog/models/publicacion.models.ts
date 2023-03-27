import {DataTypes} from 'sequelize';

import {sequelize} from '../../../helpers/database';

export const PublicacionModel = sequelize.define('publicacion', {

	idpublicacion:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
  numerodedocumento:{type:DataTypes.INTEGER, allowNull:false},
  descripcion:{type:DataTypes.TEXT, allowNull:false},
  tags:{type:DataTypes.JSON, allowNull:true},
  urlfotopublicacion:{type:DataTypes.TEXT, defaultValue:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Logo_oficial_de_Universitario.png/640px-Logo_oficial_de_Universitario.png'}
})