const keyboardClickEvent = (target, that) => {
  if (target.closest(".keyboard__key")) {
    const textarea = document.querySelector("#keyboard_textarea");
    const code = target.getAttribute("data-code");
    let symbol = target.getAttribute("data-first_symbol");
    const secondSymbol = target.getAttribute("data-second_symbol");

    if (code === "Backspace") {
      textarea.value = textarea.value.replace("|", "");
      textarea.value = `${textarea.value.substr(
        0,
        that.caret - 1,
      )}|${textarea.value.substr(that.caret)}`;
      that.caret -= 1;
      return;
    }
    if (code === "Space") {
      symbol += " ";
    }
    if (code === "Tab") {
      symbol = "\t";
    }
    if (code === "Enter") {
      symbol = "\n";
    }
    if (code === "ShiftLeft" || code === "ShiftRight") {
      that.shift = false;
      return;
    }
    if (code === "AltLeft" || code === "AltRight") {
      that.alt = false;
      return;
    }
    if (code === "ControlLeft" || code === "ControlRight") {
      that.ctrl = false;
      return;
    }
    if (code === "MetaLeft") {
      return;
    }
    if (code === "CapsLock") {
      const keys = document.querySelectorAll(".keyboard__key");

      for (let i = 0; i < keys.length; i += 1) {
        if (keys[i].innerText.length === 1) {
          keys[i].innerText = that.caps
            ? String(keys[i].innerText).toLowerCase()
            : String(keys[i].innerText).toUpperCase();

          keys[i].dataset.first_symbol = that.caps
            ? String(keys[i].innerText).toLowerCase()
            : String(keys[i].innerText).toUpperCase();
        }
      }
      that.caps = !that.caps;
      return;
    }

    if (that.shift) {
      if (secondSymbol) symbol = secondSymbol;
      else symbol = that.caps ? symbol.toLowerCase() : symbol.toUpperCase();
    }

    textarea.value = textarea.value.replace("|", "");
    textarea.value = `${
      textarea.value.substr(0, that.caret) + symbol
    }|${textarea.value.substr(that.caret)}`;
    that.caret += 1;
  }
};

export default keyboardClickEvent;
