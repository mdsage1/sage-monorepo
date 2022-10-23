import * as nock from 'nock';

import { ChallengeApp, logger } from '../src/challenge-app';
import { version } from '../package.json';

nock.disableNetConnect();

beforeAll(() => {
  // jest.mock('../package.json', () => {
  //   return {
  //     version: '1.1.0',
  //   };
  // });
});

test('ChallengeApp should instantiate child logger', () => {
  const child = jest.spyOn(logger, 'child');

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const app = new ChallengeApp({} as any);
  expect(child).toHaveBeenCalledWith({
    version,
  });
});

// describe('Challenge app', () => {

// });
