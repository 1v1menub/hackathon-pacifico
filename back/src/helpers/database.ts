import {Sequelize} from 'sequelize'
  
// Creating new Object of Sequelize
export const sequelize = new Sequelize(
    'test',
    'root',
    '', {
        dialect: 'mysql',       
        host: 'localhost'
    }
);

