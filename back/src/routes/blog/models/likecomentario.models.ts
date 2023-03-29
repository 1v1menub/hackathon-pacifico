import {DataTypes} from 'sequelize';

import {sequelize} from '../../../helpers/database';

export const LikeComentarioModel = sequelize.define('likecomentario', {

	idcomentario:{type:DataTypes.INTEGER, allowNull:false, primaryKey:true},
  numerodedocumento:{type:DataTypes.INTEGER, allowNull:false, primaryKey:true}
})