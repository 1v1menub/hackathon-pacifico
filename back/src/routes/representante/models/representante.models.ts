import {DataTypes} from 'sequelize';

import {sequelize} from '../../../helpers/database';

export const RepresentanteModel = sequelize.define('representante', {

	tipodedocumento:{type:DataTypes.STRING(10), allowNull:false},
	numerodedocumento: {type: DataTypes.INTEGER, allowNull:false, primaryKey:true},
	nombres:{type:DataTypes.STRING(80), allowNull:false},
	apellidos:{type:DataTypes.STRING(80), allowNull:false},
	direccion:{type:DataTypes.STRING(150), allowNull:false},
	ciudad:{type:DataTypes.STRING(50), allowNull:false},
	telefono:{type:DataTypes.INTEGER, allowNull:false},
	correoelectronico:{type:DataTypes.STRING(80), allowNull:false},
	puntosacumulados:{type:DataTypes.INTEGER, defaultValue: 0},
	puntosactuales:{type:DataTypes.INTEGER, defaultValue: 0},
	urlfoto:{type:DataTypes.TEXT, defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Logo_oficial_de_Universitario.png/640px-Logo_oficial_de_Universitario.png'},
	rucdeempresa:{type:DataTypes.INTEGER, allowNull:false},
	fecharegistro:{type:DataTypes.DATE, defaultValue: DataTypes.NOW},
	tiposeguropyme:{type:DataTypes.STRING(50), allowNull:false},
})

export const EmpresaModel = sequelize.define('empresa', {
  nombrecomercial:{type:DataTypes.STRING(100), allowNull:false},
	razonsocial:{type:DataTypes.STRING(100), allowNull:false},
	ruc:{type:DataTypes.INTEGER, allowNull:false, primaryKey:true},
	direccion:{type:DataTypes.STRING(150), allowNull:false},
	ciudad:{type:DataTypes.STRING(50), allowNull:false},
	descripcion:{type:DataTypes.TEXT, allowNull:false},
	tipoempresa:{type:DataTypes.STRING(50), allowNull:false},
	urlfoto:{type:DataTypes.TEXT, defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Logo_oficial_de_Universitario.png/640px-Logo_oficial_de_Universitario.png'}
})