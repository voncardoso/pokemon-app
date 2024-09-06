import type {Meta, StoryObj} from "@storybook/react";
import {Footer} from "../components/Footer";

const meta = {
    title: 'Componente/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};
