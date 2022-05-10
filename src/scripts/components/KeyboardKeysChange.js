const keyboardKeysChange = (caps) => {
  const keys = document.querySelectorAll(".keyboard__key");

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    const LANG = localStorage.getItem("lang");
    const AnotherLANG = LANG === "RU" ? "ENG" : "RU";
    localStorage.setItem("lang", AnotherLANG);

    let {
      first_symbol: firstSymbol,
      second_symbol: secondSymbol,
      another_first: anotherFirst,
      another_second: anotherSecond,
    } = key.dataset;

    firstSymbol = firstSymbol || "";
    secondSymbol = secondSymbol || "";
    anotherFirst = anotherFirst || "";
    anotherSecond = anotherSecond || "";

    if (firstSymbol.length === 1) {
      firstSymbol = caps
        ? firstSymbol.toLocaleUpperCase()
        : firstSymbol.toLocaleLowerCase();
    }
    if (secondSymbol.length === 1) {
      secondSymbol = caps
        ? secondSymbol.toLocaleUpperCase()
        : secondSymbol.toLocaleLowerCase();
    }
    if (anotherFirst.length === 1) {
      anotherFirst = caps
        ? anotherFirst.toLocaleUpperCase()
        : anotherFirst.toLocaleLowerCase();
    }
    if (anotherSecond.length === 1) {
      anotherSecond = caps
        ? anotherSecond.toLocaleUpperCase()
        : anotherSecond.toLocaleLowerCase();
    }

    let symbol = anotherFirst || firstSymbol;
    if (symbol === "Space") symbol = "";

    key.dataset.first_symbol = anotherFirst || firstSymbol;
    key.dataset.second_symbol = anotherSecond;
    key.dataset.another_first = firstSymbol;
    key.dataset.another_second = secondSymbol;
    key.innerHTML = symbol;
  }
};

export default keyboardKeysChange;
