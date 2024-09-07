import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta = {
  title: "Componente/Button",
  component: Button,
  args: {
    title: "Veja pokemons",
    color: "primary",
    type: "primary",
  },
  argTypes: {
    color: {
      options: ["primary", "second", "blue"],
      control: {
        type: "inline-radio",
      },
    },
    type: {
      options: ["primary", "second"],
      control: {
        type: "inline-radio",
      },
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    color: "second",
    type: "second",
  },
};
