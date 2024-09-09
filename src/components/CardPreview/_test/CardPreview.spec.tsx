import { fireEvent, render } from "@testing-library/react";
import { CardPreview } from "..";
import { pokemonMock } from "../../../mocks/pokemon";
import {} from "../../AttributsCircle";
import "@testing-library/jest-dom";

jest.mock("../../CardLoading", () => ({
  CardLoading: ({ height = 500 }) => (
    <div data-testid="card-loading" style={{ height }} />
  ),
}));

jest.mock("../../Button", () => ({
  Button: ({ title = "See pokemons" }) => <button>{title}</button>,
}));

jest.mock("../../AttributsCircle", () => ({
  AttributesCircle: ({ title = "HP", value = 50 }) => (
    <div>
      <span>
        {title}: {value}
      </span>
    </div>
  ),
}));

describe("Componente CardPreview", () => {
  test("deve exibir CardLoading quando loading é true", () => {
    const { getByTestId } = render(
      <CardPreview pokemon={pokemonMock} onClick={() => {}} loading={true} />
    );

    const cardLoading = getByTestId("card-loading");

    expect(cardLoading).toBeInTheDocument();
  });

  test("deve renderizar o conteúdo do cartão quando loading é false", () => {
    const { getByText } = render(
      <CardPreview pokemon={pokemonMock} onClick={() => {}} loading={false} />
    );

    expect(getByText("Bulbasaur")).toBeInTheDocument();
  });

  test("deve renderizar o conteúdo do componente AttributsCircle", () => {
    const { getByText } = render(
      <CardPreview pokemon={pokemonMock} onClick={() => {}} loading={false} />
    );
    const attributeTitleAttack = getByText((content) =>
      content.includes("Attack")
    );
    const attributeTitleDefense = getByText((content) =>
      content.includes("Defense")
    );

    expect(attributeTitleAttack).toBeInTheDocument();
    expect(attributeTitleDefense).toBeInTheDocument();
  });

  test("deve renderizar o conteúdo do Button", () => {
    const { getByText } = render(
      <CardPreview pokemon={pokemonMock} onClick={() => {}} loading={false} />
    );
    const groupOne = getByText((content) => content.includes("grass"));
    const groupTwo = getByText((content) => content.includes("poison"));

    expect(groupOne).toBeInTheDocument();
    expect(groupTwo).toBeInTheDocument();
  });

  test("deve chamar onClick quando o cartão é clicado", () => {
    const handleClick = jest.fn();

    const { getByText } = render(
      <CardPreview
        pokemon={pokemonMock}
        onClick={handleClick}
        loading={false}
      />
    );

    const card = getByText("Bulbasaur").closest("div");
    if (card) {
      fireEvent.click(card);
    }

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("eve renderizar a imagem do Pokémon", () => {
    const { getByAltText } = render(
      <CardPreview pokemon={pokemonMock} onClick={() => {}} loading={false} />
    );

    const image = getByAltText("bulbasaur image");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif"
    );
  });
});
