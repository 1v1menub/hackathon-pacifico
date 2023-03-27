import {DataTypes} from 'sequelize';

import {sequelize} from '../../../helpers/database';

export const MisionModel = sequelize.define('mision', {

	idmision:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
  titulo:{type:DataTypes.STRING(100), allowNull:false},
  descripcion:{type:DataTypes.TEXT, allowNull:false},
	puntajerecompensa:{type:DataTypes.INTEGER, allowNull:false},
})