export const SEARCH_HEROS = "SEARCH_HEROS";

export function searchHeros(heros) {
  return {
    type: SEARCH_HEROS,
    heros,
  };
}
