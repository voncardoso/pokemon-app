import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header';


const meta = {
  title: 'Componente/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};

