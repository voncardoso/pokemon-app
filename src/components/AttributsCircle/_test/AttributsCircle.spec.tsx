import { render } from "@testing-library/react";
import { AttributesCircle } from "..";
import "@testing-library/jest-dom";

export const renderAtributsCircle = () => {
  return render(<AttributesCircle title="HP" size="small" value={50} />);
};

jest.mock("../attributsCircle.module.css", () => ({
  small: "small",
  large: "large",
}));

describe("Componente AttributsCircle", () => {
  test("deve renderizar o título e o valor corretamente", () => {
    const { getByText } = renderAtributsCircle();

    expect(getByText("HP")).toBeInTheDocument();
  });

  test("deve aplicar a classe correta para tamanho pequeno", () => {
    const { getByText } = renderAtributsCircle();

    const container = getByText("HP").parentElement;

    expect(container).toHaveClass("small");
  });

  test("deve aplicar a classe correta para tamanho grande", () => {
    const { getByText } = render(
      <AttributesCircle title="HP" size="large" value={50} />
    );

    const container = getByText("HP").parentElement;

    expect(container).toHaveClass("large");
  });

  test("deve renderizar o valor corretamente", () => {
    const { getByText } = renderAtributsCircle();

    expect(getByText("50")).toBeInTheDocument();
  });
});
