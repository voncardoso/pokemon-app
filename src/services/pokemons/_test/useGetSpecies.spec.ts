import { renderHook } from "@testing-library/react-hooks";
import { useGetSpecies } from "../service";
import { pokemonMock } from "../../../mocks/pokemon";

import useFetch from "../../../hooks/useFetch";
jest.mock("../../../hooks/useFetch");

describe("useGetSpecies", () => {
  test("deve fazer a chamada correta à API", () => {
    (useFetch as jest.Mock).mockReturnValue({ data: pokemonMock });

    const { result } = renderHook(() => useGetSpecies("bulbasaur"));

    expect(useFetch).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon-species/bulbasaur/"
    );

    expect(result.current.data).toEqual(pokemonMock);
  });
});
