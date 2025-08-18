import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import BooleanTable from './boolean-table';

const meta = {
  component: BooleanTable,
} satisfies Meta<typeof BooleanTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};