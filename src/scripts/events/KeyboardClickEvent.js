const keyboardClickEvent = (target, that) => {
  if (target.closest(".keyboard__key")) {
    const textarea = document.querySelector("#keyboard_textarea");
    const code = target.getAttribute("data-code");

    if (code === "Backspace") {
      textarea.innerHTML = textarea.innerHTML.slice(0, -1);
      return;
    }
    if (code === "Space") {
      textarea.innerHTML += " ";
      return;
    }
    if (code === "Tab") {
      textarea.innerHTML += "\t";
      return;
    }
    if (code === "Enter") {
      textarea.innerHTML += "\n";
      return;
    }
    if (code === "ShiftLeft") {
      return;
    }
    if (code === "ShiftRight") {
      return;
    }
    if (code === "AltLeft") {
      return;
    }
    if (code === "AltRight") {
      return;
    }
    if (code === "ControlLeft") {
      return;
    }
    if (code === "ControlRight") {
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

    textarea.innerHTML += target.dataset.first_symbol;
  }
};

export default keyboardClickEvent;
