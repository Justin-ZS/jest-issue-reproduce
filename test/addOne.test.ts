import { addOne } from '../src/utils/addOne';

describe('tests', () => {
  it('test', () => {
    expect(addOne(1)).toEqual(2);
  })
})