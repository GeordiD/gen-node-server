import dbClientConnection from '@/common/db-client';
import { Example } from '@/models/example';

export class ExamplesRepo {
  async getAll(): Promise<Example[]> {
    const client = await dbClientConnection;
    const cursor = await client
      .db()
      .collection('examples')
      .find<Example>({})
      .limit(10);

    return await cursor.toArray();
  }
}
