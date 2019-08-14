module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DATABASE_URL || 'postgres://coreymoore@localhost/makersplace',
  JWT_SECRET: process.env.JWT_DECRET || 'this-is-a-secret'
};