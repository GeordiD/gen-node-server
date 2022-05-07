import { _dbClient } from '@/common/db-client';
import { Example } from '@/models/example';

export class ExamplesRepo {
  async getAll(): Promise<Example[]> {
    const client = await _dbClient.getClient();
    const cursor = await client
      .db()
      .collection('examples')
      .find<Example>({})
      .limit(10);

    return await cursor.toArray();
  }
}

export const _examplesRepo = new ExamplesRepo();
