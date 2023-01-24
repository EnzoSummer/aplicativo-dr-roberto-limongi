require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'dt_criacao',
    updatedAt: 'dt_atualizacao',
  },
  dialectOptions: {
    timezone: '-03:00',
  },
  timezone: '-03:00',
};
