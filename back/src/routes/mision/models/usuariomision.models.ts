import {DataTypes} from 'sequelize';

import {sequelize} from '../../../helpers/database';

export const UsuarioMisionModel = sequelize.define('usuariomision', {

	numerodedocumento:{type:DataTypes.INTEGER, allowNull:false, primaryKey:true},
	idmision:{type:DataTypes.INTEGER, allowNull:false, primaryKey:true},
	estado:{type:DataTypes.BOOLEAN, defaultValue:false},
  
})