const keyboardKeysChange = (caps) => {
  const keys = document.querySelectorAll(".keyboard__key");

  for (const key of keys) {
    const LANG = localStorage.getItem("lang");
    const AnotherLANG = LANG === "RU" ? "ENG" : "RU";
    localStorage.setItem("lang", AnotherLANG);

    let { first_symbol, second_symbol, another_first, another_second } =
      key.dataset;
    // let second_symbol = key.getAttribute("data-second_symbol");
    // let another_first = key.getAttribute("data-another_first");
    // let another_second = key.getAttribute("data-another_second");

    first_symbol = first_symbol || "";
    second_symbol = second_symbol || "";
    another_first = another_first || "";
    another_second = another_second || "";

    if (first_symbol.length === 1) {
      first_symbol = caps
        ? first_symbol.toLocaleUpperCase()
        : first_symbol.toLocaleLowerCase();
    }
    if (second_symbol.length === 1) {
      second_symbol = caps
        ? second_symbol.toLocaleUpperCase()
        : second_symbol.toLocaleLowerCase();
    }
    if (another_first.length === 1) {
      another_first = caps
        ? another_first.toLocaleUpperCase()
        : another_first.toLocaleLowerCase();
    }
    if (another_second.length === 1) {
      another_second = caps
        ? another_second.toLocaleUpperCase()
        : another_second.toLocaleLowerCase();
    }

    let symbol = another_first || first_symbol;
    if (symbol === "Space") symbol = "";

    key.dataset.first_symbol = another_first || first_symbol;
    if (second_symbol) key.dataset.second_symbol = another_second;
    key.dataset.another_first = first_symbol;
    key.dataset.another_second = second_symbol;
    key.innerHTML = symbol;
  }
};

export default keyboardKeysChange;
