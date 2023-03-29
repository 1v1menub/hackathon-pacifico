import {DataTypes} from 'sequelize';

import {sequelize} from '../../../helpers/database';

export const RecompensaModel = sequelize.define('recompensa', {

	idrecompensa:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
  titulo:{type:DataTypes.STRING(100), allowNull:false},
  descripcion:{type:DataTypes.TEXT, allowNull:false},
  urlfotorecompensa:{type:DataTypes.TEXT, defaultValue:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Logo_oficial_de_Universitario.png/640px-Logo_oficial_de_Universitario.png'},
	puntosrequeridos:{type:DataTypes.INTEGER, allowNull:false},
})