const keyboardKey = (key, index, lang = "ENG") => {
  const first_symbol = key[lang]?.first_symbol
    ? key[lang].first_symbol
    : key.first_symbol;

  const second_symbol = key[lang]?.second_symbol
    ? key[lang].second_symbol
    : key.second_symbol
    ? key.second_symbol
    : "";

  const anotherLANG = lang === "RU" ? "ENG" : "RU";
  const anotherFirst = key[anotherLANG]?.first_symbol
    ? key[anotherLANG].first_symbol
    : key.first_symbol;
  const anotherSecond = key[anotherLANG]?.second_symbol
    ? key[anotherLANG].second_symbol
    : key.second_symbol
    ? key.second_symbol
    : "";

  const { code } = key;
  let classKey = "keyboard__key";
  let symbol = first_symbol;

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
          data-first_symbol="${first_symbol}"
          ${second_symbol ? `data-second_symbol="${second_symbol}"` : ""}
          ${anotherFirst ? `data-another_first="${anotherFirst}"` : ""}
          ${anotherSecond ? `data-another_second='${anotherSecond}'` : ""}>
        ${symbol} 
      </div>`;
};

export default keyboardKey;
