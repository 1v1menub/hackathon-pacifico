import {Sequelize} from 'sequelize'
  
// Creating new Object of Sequelize
export const sequelize = new Sequelize(
    'hackathon',
    'root',
    '', {
        dialect: 'mysql',       
        host: 'localhost',
        logging: false,
    }
);

