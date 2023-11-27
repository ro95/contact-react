import type { Meta, StoryObj } from '@storybook/react';

import Copyright from './Copyright';

const meta = {
  title: 'Contact/Copyright',
  component: Copyright,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Copyright>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    companyName: 'Digital Airline',
  },
};
