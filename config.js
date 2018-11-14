module.exports = {
	port: 8000,
	saltRounds: 2,
	jwtSecret: 'yo-its-a-secret',
	tokenExpireTime: '6h',
	database: 'dbname',
type: 'postgres',
name: 'tulasi'
 myPostgres: {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  }
}
//don't store this file in repository, it's unsecure
