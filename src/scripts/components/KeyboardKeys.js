import keyboardKey from "./KeyboardKey";
const keyboard_data = require("../data/lang_ENG.json");

const keyboardKeys = () => {
  const keyboardKeysElement = document.createElement("div");

  keyboard_data.forEach((row, indexRow) => {
    const keyboardKeysRow = document.createElement("div");
    keyboardKeysRow.classList.add("keyboard__row");

    row.forEach((key) => {
      keyboardKeysRow.innerHTML += keyboardKey(key, indexRow);
    });

    keyboardKeysElement.append(keyboardKeysRow);
  });

  return keyboardKeysElement;
};
export default keyboardKeys;
