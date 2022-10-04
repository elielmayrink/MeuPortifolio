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
