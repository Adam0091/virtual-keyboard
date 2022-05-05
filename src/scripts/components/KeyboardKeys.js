import keyboardKey from "./KeyboardKey";

const keyboardData = require("../data/lang_ENG.json");

const keyboardKeys = () => {
  if (!localStorage.getItem("lang")) localStorage.setItem("lang", "ENG");
  const LANG = localStorage.getItem("lang");
  const keyboardKeysElement = document.createElement("div");

  keyboardData.forEach((row, indexRow) => {
    const keyboardKeysRow = document.createElement("div");
    keyboardKeysRow.classList.add("keyboard__row");

    row.forEach((key) => {
      keyboardKeysRow.innerHTML += keyboardKey(key, indexRow, LANG);
    });

    keyboardKeysElement.append(keyboardKeysRow);
  });

  return keyboardKeysElement;
};
export default keyboardKeys;
