import keyboardClickEvent from "./KeyboardClickEvent";
import keyboardKeyDownEvent from "./KeyboardKeyDownEvent";
import keyboardKeyUpEvent from "./KeyboardKeyUpEvent";

class KeyboardEvents {
  constructor() {
    this.caps = true;
    this.shift = false;
    this.ctrl = false;
    this.alt = false;
  }

  handleEvent(event) {
    const { target } = event;

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
    }
  }
}

export default KeyboardEvents;
