import keyboardKeysChange from "../components/KeyboardKeysChange";

const keyboardKeyDownEvent = (event, that) => {
  const keys = document.querySelectorAll(".keyboard__key");
  const textarea = document.querySelector("#keyboard_textarea");

  if (event.keyCode === 9 || event.keyCode === 8 || event.keyCode === 17) event.preventDefault();

  for (let i = 0; i < keys.length; i += 1) {
    const code = keys[i].getAttribute("data-code");
    let symbol = keys[i].getAttribute("data-first_symbol");
    const secondSymbol = keys[i].getAttribute("data-second_symbol");

    if (event.code === code) {
      keys[i].classList.add("active");

      if (code === "Space") {
        symbol = " ";
      }
      if (code === "Backspace") {
        if (that.caret !== 0) {
          textarea.value = textarea.value.replace("|", "");
          textarea.value = `${textarea.value.substr(
            0,
            that.caret - 1,
          )}|${textarea.value.substr(that.caret)}`;
          that.caret -= 1;
        }
        return;
      }
      if (code === "Tab") {
        symbol = "\t";
      }
      if (code === "Enter") {
        symbol = "\n";
      }
      if (code === "ShiftRight" || code === "ShiftLeft") {
        that.shift = true;
        symbol = "";
      }
      if (code === "AltLeft" || code === "AltRight") {
        that.alt = true;
        symbol = "";
      }
      if (code === "ControlLeft" || code === "ControlRight") {
        that.ctrl = true;
        symbol = "";
      }
      if (code === "MetaLeft") {
        return;
      }
      if (code === "CapsLock") {
        const keyLayout = document.querySelectorAll(".keyboard__key");

        for (let k = 0; k < keyLayout.length; k += 1) {
          if (keyLayout[k].dataset.first_symbol.length === 1) {
            keyLayout[k].innerText = that.caps
              ? String(keyLayout[k].innerText).toLowerCase()
              : String(keyLayout[k].innerText).toUpperCase();

            keyLayout[k].dataset.first_symbol = that.caps
              ? String(keyLayout[k].innerText).toLowerCase()
              : String(keyLayout[k].innerText).toUpperCase();
          }
        }
        that.caps = !that.caps;

        return;
      }
      if (that.shift) {
        if (secondSymbol) symbol = secondSymbol;
        else symbol = that.caps ? symbol.toLowerCase() : symbol.toUpperCase();
      }
      if (that.ctrl && that.alt) keyboardKeysChange(that.caps);

      textarea.value = textarea.value.replace("|", "");
      textarea.value = `${
        textarea.value.substr(0, that.caret) + symbol
      }|${textarea.value.substr(that.caret)}`;
      that.caret += 1;
    }
  }
};

export default keyboardKeyDownEvent;
