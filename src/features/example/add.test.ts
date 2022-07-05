import { add } from './add';

describe('足し算', () => {
  it('renders a heading', () => {
    expect(add(1, 1)).toBe(2);
  });
});
