export const auth = {
  headers: {
    accept: "application/json.github.v3+json",
    Authorization: "token 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",
  },
};

export function windDirectionFunction(deg) {
  let direction = [
    "Norte",
    "Norte-Nordeste",
    "Nordeste",
    "Leste-Nordeste",
    "Leste",
    "Leste-Sudeste",
    "Sudeste",
    "Sul-Sudeste",
    "Sul",
    "Sul-Sudoeste",
    "Sudoeste",
    "Oeste-Sudoeste",
    "Oeste",
    "OesteNoreoes",
    "Noroeste",
    "Norte-Noroeste",
  ];
  let interator = parseInt((deg + 11.25) / 22.5);
  return direction[interator % 16];
}
