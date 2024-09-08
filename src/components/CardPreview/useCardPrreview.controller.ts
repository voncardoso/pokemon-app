import { CardPreviewProps } from "./types";

export const useCardPreviewController = ({ pokemon }: CardPreviewProps) => {
  const stats = pokemon.stats.reduce(
    (
      acc: Record<string, number>,
      stat: { stat: { name: string }; base_stat: number }
    ) => {
      acc[stat.stat.name] = stat.base_stat;
      return acc;
    },
    {}
  );
  return {
    stats,
  };
};
