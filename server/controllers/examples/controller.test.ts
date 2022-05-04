import { ExamplesService } from '@/services/examples.service';
import { getMockReq, getMockRes } from '@jest-mock/express';
import { ExamplesController } from './examples.controller';

jest.mock('@/services/examples.service');
jest.mock('pino');

const { res } = getMockRes();

describe('Examples', () => {
  it('should do a thing', () => {
    const mockedExamplesService = jest.mocked(new ExamplesService());
    mockedExamplesService.all.mockResolvedValue([]);
    const controller = new ExamplesController({
      examplesService: mockedExamplesService,
    });

    controller.all(getMockReq(), res);
    expect(mockedExamplesService.all).toBeCalled();
  });
});
