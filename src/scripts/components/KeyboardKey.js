const keyboardKey = (key, index) => {
  const first_symbol = key.first_symbol;
  const second_symbol = key.second_symbol ? key.second_symbol : "";
  const code = key.code;
  let classKey = "keyboard__key";
  let symbol = first_symbol;

  if (index === 0) classKey += " keyboard__key--non_center";

  switch (code) {
    case "Space":
      classKey += " keyboard__key--space";
      symbol = "";
      break;

    case "Quote":
      symbol = "'";
      break;

    case "ShiftLeft":
      classKey += " key_shift_left";
      break;

    case "Enter":
      classKey += " key_enter";
      break;
  }

  return `
      <div class="${classKey}"
          data-code=${code}
          data-first_symbol=${first_symbol}
          data-second_symbol=${second_symbol}
      >
        ${symbol} 
      </div>`;
};

export default keyboardKey;
