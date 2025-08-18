import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { DynamicHeader } from './dynamic-header';

const meta = {
  component: DynamicHeader,
} satisfies Meta<typeof DynamicHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};