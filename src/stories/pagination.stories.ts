import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../components/Pagination";

const meta = {
  title: "Componente/Pagination",
  component: Pagination,
  args: {
    page: "1",
    seachPage: "",
    next: () => {},
    previous: () => {},
    handlePage: () => {},
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};
