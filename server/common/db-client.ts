import { MongoClient } from 'mongodb';

class DbClient {
  private connection?: Promise<MongoClient>;

  getClient(): Promise<MongoClient> {
    if (!this.connection) {
      const uri = process.env['MONGODB_URI'];

      if (!uri) {
        throw new Error('Please add your Mongo URI to .env.local');
      }

      const client = new MongoClient(uri);
      this.connection = client.connect();
    }

    return this.connection;
  }
}

export const _dbClient = new DbClient();
