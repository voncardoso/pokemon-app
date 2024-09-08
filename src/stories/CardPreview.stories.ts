import type { Meta, StoryObj } from "@storybook/react";
import { CardPreview } from "../components/CardPreview";
import { pokemonMock } from "../mocks/pokemon";

const meta = {
  title: "Componente/Card",
  component: CardPreview,
  args: {
    pokemon: pokemonMock,
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Este é um componente CardPreview que exibe detalhes do Pokémon.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};
