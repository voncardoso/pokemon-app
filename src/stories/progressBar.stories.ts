import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "../components/ProgressBar";

const meta = {
  title: "Componente/ProgressBar",
  component: ProgressBar,
  args: {
    progress: 50,
    maxValue: 100,
    title: "HP",
    type: "primary",
  },
  argTypes: {
    type: {
      options: ["primary", "second"],
      control: { type: "inline-radio" },
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
  },
};

export const Secundary: Story = {
  args: {
    type: "second",
  },
};
