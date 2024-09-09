import { render } from "@testing-library/react";
import { CardBorder } from "..";
import "@testing-library/jest-dom";

test("deve renderizar children no CardBorder", () => {
  const { getByText } = render(
    <CardBorder>
      <div>teste</div>
    </CardBorder>
  );

  expect(getByText("teste")).toBeInTheDocument();
});
