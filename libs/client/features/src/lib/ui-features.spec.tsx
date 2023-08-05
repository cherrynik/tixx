import { render } from '@testing-library/react';

import UiFeatures from './ui-features';

describe('UiFeatures', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiFeatures />);
    expect(baseElement).toBeTruthy();
  });
});
