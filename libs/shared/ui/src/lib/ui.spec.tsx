import { render } from '@testing-library/react';

import MonorepoUi from './ui';

describe('MonorepoUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MonorepoUi />);
    expect(baseElement).toBeTruthy();
  });
});
