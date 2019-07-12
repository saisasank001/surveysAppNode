const env = {
  database: 'Feedback',
  username: 'feedback',
  password: 'Feedback123!@#',
  host: '13.234.144.50',
  dialect: 'mysql',
    port:'19178',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
module.exports = env;
