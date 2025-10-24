import { Sequelize } from 'sequelize-typescript';
import { FeedItem } from './controllers/v0/feed/models/FeedItem'; // UPDATED PATH

console.log('DB Config: Hardcoded credentials');

export const sequelize = new Sequelize({
  'username': 'justin',
  'password': 'Y13071745n55xa',
  'database': 'postgres',
  'host': 'cdr.ca6foouvcma7.us-east-1.rds.amazonaws.com',
  'dialect': 'postgres',
  'port': 5432,
  'models': [FeedItem],
  'dialectOptions': {
    'ssl': {
      'require': true,
      'rejectUnauthorized': false
    }
  }
});

sequelize.authenticate()
  .then(() => console.log('Database connection successful'))
  .catch((err) => console.error('Database connection failed:', err));