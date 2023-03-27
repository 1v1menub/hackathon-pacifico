import {Sequelize} from 'sequelize'
  
// Creating new Object of Sequelize
export const sequelize = new Sequelize(
    'test',
    'root',
    '12345', {
        dialect: 'mysql',       
        host: 'localhost'
    }
);

