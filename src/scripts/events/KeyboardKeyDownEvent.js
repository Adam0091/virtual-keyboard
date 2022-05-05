import keyboardKeysChange from "../components/KeyboardKeysChange";

const keyboardKeyDownEvent = (event, that) => {
  const keys = document.querySelectorAll(".keyboard__key");
  const textarea = document.querySelector("#keyboard_textarea");

  if (event.keyCode === 9 || event.keyCode === 8 || event.keyCode === 17)
    event.preventDefault();

  for (let i = 0; i < keys.length; i++) {
    const code = keys[i].getAttribute("data-code");
    let symbol = keys[i].getAttribute("data-first_symbol");
    const second_symbol = keys[i].getAttribute("data-second_symbol");

    if (event.code === code) {
      keys[i].classList.add("active");

      if (code === "Space") {
        symbol = " ";
      }
      if (code === "Backspace") {
        if (that.caret !== 0) {
          textarea.value = textarea.value.replace("|", "");
          textarea.value =
            textarea.value.substr(0, that.caret - 1) +
            "|" +
            textarea.value.substr(that.caret);
          that.caret--;
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
        const keys = document.querySelectorAll(".keyboard__key");

        for (let i = 0; i < keys.length; i++) {
          if (keys[i].dataset.first_symbol.length === 1) {
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
      if (that.ctrl && that.alt) keyboardKeysChange(that.caps);

      textarea.value = textarea.value.replace("|", "");
      textarea.value =
        textarea.value.substr(0, that.caret) +
        symbol +
        "|" +
        textarea.value.substr(that.caret);
      that.caret++;
    }
  }
};

export default keyboardKeyDownEvent;
