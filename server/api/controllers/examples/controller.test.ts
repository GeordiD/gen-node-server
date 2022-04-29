import controller from './controller';
import ExamplesService from '../../services/examples.service';
import { getMockReq, getMockRes } from '@jest-mock/express';

// This could probably be turned into a helper funciton
// const _exampleService = mock('../../services/examples.service', ExamplesService);
jest.mock('../../services/examples.service');
const mockedExamplesService = ExamplesService as jest.Mocked<
  typeof ExamplesService
>;

const { res } = getMockRes();

describe('Examples', () => {
  it('should do a thing', () => {
    mockedExamplesService.all.mockResolvedValue([]);

    controller.all(getMockReq(), res);
    expect(mockedExamplesService.all).toBeCalled();
  });
});
