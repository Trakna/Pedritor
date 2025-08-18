import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Contatos } from './contacts';

const meta = {
  component: Contatos,
} satisfies Meta<typeof Contatos>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};