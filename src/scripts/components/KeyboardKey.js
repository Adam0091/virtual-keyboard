const keyboardKey = (key, index, lang = "ENG") => {
  const firstSymbol = key[lang]?.first_symbol
    ? key[lang].first_symbol
    : key.first_symbol;

  const secondSymbol = key[lang]?.second_symbol
    ? key[lang].second_symbol
    : key.second_symbol || "";

  const anotherLANG = lang === "RU" ? "ENG" : "RU";
  const anotherFirst = key[anotherLANG]?.first_symbol
    ? key[anotherLANG].first_symbol
    : key.first_symbol;
  const anotherSecond = key[anotherLANG]?.second_symbol
    ? key[anotherLANG].second_symbol
    : key.second_symbol || "";

  const { code } = key;
  let classKey = "keyboard__key";
  let symbol = firstSymbol;

  if (index === 0) classKey += " keyboard__key--non_center";
  if (code === "ShiftLeft") classKey += " key_shift_left";
  if (code === "Enter") classKey += " key_enter";
  if (code === "Space") {
    classKey += " keyboard__key--space";
    symbol = "";
  }

  return `
      <div class="${classKey}"
          data-code=${code}
          data-first_symbol="${firstSymbol}"
          ${secondSymbol ? `data-second_symbol="${secondSymbol}"` : ""}
          ${anotherFirst ? `data-another_first="${anotherFirst}"` : ""}
          ${anotherSecond ? `data-another_second='${anotherSecond}'` : ""}>
        ${symbol} 
      </div>`;
};

export default keyboardKey;
