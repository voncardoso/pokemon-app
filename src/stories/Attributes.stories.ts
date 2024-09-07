import type { Meta, StoryObj } from "@storybook/react";
import { AttributesCircle } from "../components/AttributsCircle";

const meta = {
  title: "Componente/AttributesCircle",
  component: AttributesCircle,
  argTypes: {
    size: {
      options: ["small", "large"],
      control: { type: "radio" },
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AttributesCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    title: "Attack",
    value: 80,
    size: "small",
  },
};
