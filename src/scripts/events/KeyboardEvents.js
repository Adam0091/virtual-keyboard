import keyboardClickEvent from "./KeyboardClickEvent";
import keyboardKeyDownEvent from "./KeyboardKeyDownEvent";
import keyboardKeyUpEvent from "./KeyboardKeyUpEvent";

function addMouseDownEvent(that) {
  const keys = document.querySelectorAll(".keyboard__key");
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].addEventListener("mousedown", (event) => {
      const codeKey = event.target.dataset.code;

      if (codeKey === "AltLeft" || codeKey === "AltRight") that.alt = true;
      if (codeKey === "ShiftLeft" || codeKey === "ShiftRight") that.shift = true;
      if (codeKey === "ControlLeft" || codeKey === "ControlRight") that.ctrl = true;
    });
  }
}
function changePostionCaret(that) {
  const textarea = document.querySelector("#keyboard_textarea");
  document.querySelector("#keyboard_textarea").blur();

  textarea.value = textarea.value.replace("|", "");
  textarea.value = `${textarea.value.substr(
    0,
    that.caret,
  )}|${textarea.value.substr(that.caret)}`;
}

class KeyboardEvents {
  constructor() {
    this.caps = true;
    this.shift = false;
    this.ctrl = false;
    this.alt = false;
    this.caret = 0;

    addMouseDownEvent(this);
  }

  handleEvent(event) {
    const { target } = event;
    if (typeof target.selectionStart === "number") {
      this.caret = target.selectionStart;
    }

    changePostionCaret(this);
    switch (event.type) {
      case "click":
        keyboardClickEvent(target, this);
        break;

      case "keydown":
        keyboardKeyDownEvent(event, this);
        break;

      case "keyup":
        keyboardKeyUpEvent(event, this);
        break;

      default:
        break;
    }
  }
}

export default KeyboardEvents;
