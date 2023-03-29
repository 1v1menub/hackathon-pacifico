import {DataTypes} from 'sequelize';

import {sequelize} from '../../../helpers/database';

export const LikePublicacionModel = sequelize.define('likepublicacion', {

	idpublicacion:{type:DataTypes.INTEGER, allowNull:false, primaryKey:true},
  numerodedocumento:{type:DataTypes.INTEGER, allowNull:false, primaryKey:true}
})