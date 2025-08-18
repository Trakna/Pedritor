import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FeatureList } from './feature-list';

const meta = {
  component: FeatureList,
} satisfies Meta<typeof FeatureList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};