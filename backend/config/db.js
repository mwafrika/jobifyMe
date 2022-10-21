import dotenv from 'dotenv';
dotenv.config();

const connection = {
  development: {
    username: process.env.APP_USERNAME,
    password: process.env.APP_PASSWORD,
    database: process.env.DATABASE,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: process.env.APP_USERNAME,
    password: process.env.APP_PASSWORD,
    database: process.env.DATABASE,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username: process.env.APP_USERNAME,
    password: process.env.APP_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
      ssl: {
        //  ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt'),
      },
    },
  },
};

export default connection;
