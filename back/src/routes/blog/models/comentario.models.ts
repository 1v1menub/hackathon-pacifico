import {DataTypes} from 'sequelize';

import {sequelize} from '../../../helpers/database';

export const ComentarioModel = sequelize.define('comentario', {

	idcomentario:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
  idpublicacion:{type:DataTypes.INTEGER, allowNull:false},
  numerodedocumento:{type:DataTypes.INTEGER, allowNull:false},
  comentario:{type:DataTypes.TEXT, allowNull:false},
  urlfotocomentario:{type:DataTypes.TEXT, defaultValue:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Logo_oficial_de_Universitario.png/640px-Logo_oficial_de_Universitario.png'}
})