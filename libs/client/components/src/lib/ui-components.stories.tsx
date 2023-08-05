import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ButtonProps } from 'primereact/button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'UiComponents',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: {
  args: ButtonProps;
} = {
  args: {
    label: 'Wassgud',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UiComponents!/gi)).toBeTruthy();
  },
};
