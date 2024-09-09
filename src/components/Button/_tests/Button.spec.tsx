import { fireEvent, render } from "@testing-library/react";
import { Button } from "..";
import "@testing-library/jest-dom";

export const renderButton = (props = {}) => {
  return render(
    <Button title="See pokemons" color="primary" type="primary" {...props} />
  );
};

jest.mock("../button.module.css", () => ({
  primary: "primary",
  second: "second",
}));

describe("Componente Button", () => {
  test("deve renderizar o título do botão corretamente", () => {
    const { getByText } = renderButton();

    expect(getByText("See pokemons")).toBeInTheDocument();
  });

  test("deve aplicar a classe correta para tipo primary", () => {
    const { getByText } = renderButton();
    const button = getByText("See pokemons");

    expect(button).toHaveClass("primary");
  });

  test("deve aplicar a classe correta para tipo second", () => {
    const { getByText } = renderButton({
      type: "second",
    });

    const button = getByText("See pokemons");

    expect(button).toHaveClass("second");
  });

  test("deve chamar a função onClick quando o botão é clicado", () => {
    const handleClick = jest.fn();

    const { getByText } = renderButton({ onClick: handleClick });

    const button = getByText("See pokemons");

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
