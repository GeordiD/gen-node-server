import L from '@/common/logger';
import { Example } from '@/models/example';
import { _examplesRepo } from '@/repos/examples.repo';
import { ObjectId } from 'mongodb';

const examples: Example[] = [];

export class ExamplesService {
  async all(): Promise<Example[]> {
    const result = await _examplesRepo.getAll();

    L.info(result, 'fetch all examples');

    return result;
  }

  byId(id: number): Promise<Example> {
    L.info(`fetch example with id ${id}`);
    return this.all().then((r) => r[id]);
  }

  create(name: string): Promise<Example> {
    L.info(`create example with name ${name}`);
    const example: Example = {
      _id: new ObjectId(),
      name,
    };
    examples.push(example);
    return Promise.resolve(example);
  }
}

export const _examplesService = new ExamplesService();
