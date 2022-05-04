const keyboardClickEvent = (target, that) => {
  if (target.closest(".keyboard__key")) {
    const textarea = document.querySelector("#keyboard_textarea");
    const code = target.getAttribute("data-code");
    let symbol = target.getAttribute("data-first_symbol");
    const second_symbol = target.getAttribute("data-second_symbol");

    if (code === "Backspace") {
      textarea.value = textarea.value.slice(0, -1);
      return;
    }
    if (code === "Space") {
      textarea.value += " ";
      return;
    }
    if (code === "Tab") {
      textarea.value += "\t";
      return;
    }
    if (code === "Enter") {
      textarea.value += "\n";
      return;
    }
    if (code === "ShiftLeft" || code === "ShiftRight") {
      that.shift = true;
      return;
    }
    if (code === "AltLeft" || code === "AltRight") {
      that.alt = true;
      return;
    }
    if (code === "ControlLeft" || code === "ControlRight") {
      that.ctrl = true;
      return;
    }
    if (code === "MetaLeft") {
      return;
    }
    if (code === "CapsLock") {
      const keys = document.querySelectorAll(".keyboard__key");

      for (let i = 0; i < keys.length; i++) {
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
      if (second_symbol) symbol = second_symbol;
      else symbol = that.caps ? symbol.toLowerCase() : symbol.toUpperCase();
    }

    textarea.value += symbol;
  }
};

export default keyboardClickEvent;
