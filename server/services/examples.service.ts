import dbClientConnection from '@/common/db-client';
import L from '@/common/logger';

let id = 0;
interface Example {
  id: number;
  name: string;
}

const examples: Example[] = [
  { id: id++, name: 'example 0' },
  { id: id++, name: 'example 1' },
];

export class ExamplesService {
  async all(): Promise<Example[]> {
    const client = await dbClientConnection;
    const cursor = await client
      .db()
      .collection('examples')
      .find<Example>({})
      .limit(10);
    const result = await cursor.toArray();

    L.info(result, 'fetch all examples');

    return Promise.resolve(result);
  }

  byId(id: number): Promise<Example> {
    L.info(`fetch example with id ${id}`);
    return this.all().then((r) => r[id]);
  }

  create(name: string): Promise<Example> {
    L.info(`create example with name ${name}`);
    const example: Example = {
      id: id++,
      name,
    };
    examples.push(example);
    return Promise.resolve(example);
  }
}

// export default new ExamplesService();
