import type { Meta, StoryObj } from "@storybook/react";
import { CardLoading } from "../components/CardLoading";

const meta = {
  title: "Componente/CardLoading ",
  component: CardLoading,
  args: {
    height: 160,
  },
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};
