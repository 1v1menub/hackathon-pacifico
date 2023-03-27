import {DataTypes} from 'sequelize';

import {sequelize} from '../../../helpers/database';

export const UsuarioRecompensaModel = sequelize.define('usuariorecompensa', {

	numerodedocumento:{type:DataTypes.INTEGER, allowNull:false, primaryKey:true},
	idrecompensa:{type:DataTypes.INTEGER, allowNull:false, primaryKey:true},
	estado:{type:DataTypes.BOOLEAN, defaultValue:false},
  
})