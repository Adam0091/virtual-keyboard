const keyboardKeyDownEvent = (event, that) => {
  const keys = document.querySelectorAll(".keyboard__key");
  const textarea = document.querySelector("#keyboard_textarea");
  console.log(event.code);

  for (let i = 0; i < keys.length; i++) {
    const code = keys[i].getAttribute("data-code");
    const symbol = keys[i].getAttribute("data-first_symbol");

    if (event.code === code) {
      keys[i].classList.add("active");

      if (code === "Space") {
        symbol = " ";
      }
      if (code === "Backspace") {
        textarea.innerHTML = textarea.innerHTML.slice(0, -1);
        return;
      }
      if (code === "Tab") {
        symbol = "\t";
      }
      if (code === "Enter") {
        symbol = "\n";
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

      textarea.innerHTML += symbol;
    }
  }
};

export default keyboardKeyDownEvent;
