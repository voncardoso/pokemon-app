import { renderHook } from "@testing-library/react-hooks";
import { useSearchPokemons } from "../service";
import { act } from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: "bulbasaur", id: 1 }),
  })
) as jest.Mock;

describe("useSearchPokemons", () => {
  test("deve ter o estado inicial correto", () => {
    const { result } = renderHook(() => useSearchPokemons("bulbasaur"));

    expect(result.current.pokemonSearch).toBeUndefined();
    expect(result.current.pokemonDetail).toBeUndefined();
    expect(result.current.loading).toBe(false);
  });

  test("deve atualizar o estado após a chamada da API", async () => {
    const { result } = renderHook(() => useSearchPokemons("bulbasaur"));

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.pokemonSearch).toEqual([
      { name: "bulbasaur", id: 1 },
    ]);
    expect(result.current.pokemonDetail).toEqual({ name: "bulbasaur", id: 1 });
    expect(result.current.loading).toBe(false);
  });

  test("deve lidar com erros corretamente", async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error("API Error"))
    );

    const { result } = renderHook(() => useSearchPokemons("bulbasaur"));

    await act(async () => {
      await result.current.fetchData();
    });

    expect(result.current.pokemonSearch).toBeUndefined();
    expect(result.current.pokemonDetail).toBeUndefined();
    expect(result.current.loading).toBe(false);
  });
});
