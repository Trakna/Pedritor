import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import FeatureCard from './feature-card';

const meta = {
  component: FeatureCard,
} satisfies Meta<typeof FeatureCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};