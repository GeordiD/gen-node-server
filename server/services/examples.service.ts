import { prisma } from '@/common/db';
import { Example } from '@prisma/client';

export class ExamplesService {
  async all(): Promise<Example[]> {
    const result = await prisma.example.findMany();
    return result;
  }

  byId(id: number): Promise<Example> {
    return this.all().then((r) => r[id]);
  }

  async create(name: string): Promise<Example> {
    return await prisma.example.create({
      data: {
        name,
      },
    });
  }
}

export const _examplesService = new ExamplesService();
