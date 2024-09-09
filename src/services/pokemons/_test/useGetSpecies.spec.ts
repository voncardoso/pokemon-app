import { renderHook } from "@testing-library/react-hooks";
import { useGetSpecies } from "../service";
import useFetch from "../../../hooks/useFetch";
import { pokemonMock } from "../../../mocks/pokemon";

jest.mock("../../../hooks/useFetch");

describe("useGetSpecies", () => {
  it("deve fazer a chamada correta à API", () => {
    (useFetch as jest.Mock).mockReturnValue({ data: pokemonMock });

    const { result } = renderHook(() => useGetSpecies("bulbasaur"));

    expect(useFetch).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon-species/bulbasaur/"
    );

    expect(result.current.data).toEqual(pokemonMock);
  });
});
