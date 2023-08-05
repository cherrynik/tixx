import { render } from '@testing-library/react';

import UiBlocks from './ui-blocks';

describe('UiBlocks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiBlocks />);
    expect(baseElement).toBeTruthy();
  });
});
