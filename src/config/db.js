import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', // Use appropriate dialect (e.g., 'mysql')
  logging: false,
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Database connection failed:', err));

export default sequelize;