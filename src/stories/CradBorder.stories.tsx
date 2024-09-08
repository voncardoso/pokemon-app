import type { Meta, StoryObj } from "@storybook/react";
import { CardBorder } from "../components/CardBorder";
import { AttributesCircle } from "../components/AttributsCircle";

const meta = {
  title: "Componente/CardBorder",
  component: CardBorder,
  args: {
    children: <AttributesCircle size="small" title="HP" value={50} />,
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardBorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};
