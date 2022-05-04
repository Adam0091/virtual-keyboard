const keyboardKeyUpEvent = (event, that) => {
  const keys = document.querySelectorAll(".keyboard__key");

  for (let i = 0; i < keys.length; i++) {
    const code = keys[i].getAttribute("data-code");
    if (event.code === code) {
      keys[i].classList.remove("active");

      if (code === "ShiftLeft" || code === "ShiftRight") that.shift = false;
      if (code === "AltLeft" || code === "AltRight") that.alt = false;
      if (code === "ControlLeft" || code === "ControlRight") that.ctrl = false;
    }
  }
};

export default keyboardKeyUpEvent;
