import keyboardClickEvent from "./KeyboardClickEvent";
import keyboardKeyDownEvent from "./KeyboardKeyDownEvent";
import keyboardKeyUpEvent from "./KeyboardKeyUpEvent";

class KeyboardEvents {
  constructor() {
    this.caps = true;
    this.shift = false;
    this.postion_caret;
  }

  handleEvent(event) {
    const target = event.target;

    switch (event.type) {
      case "click":
        keyboardClickEvent(target, this);
        break;

      case "keydown":
        keyboardKeyDownEvent(event, this);
        break;

      case "keyup":
        keyboardKeyUpEvent(event);
        break;
    }
  }
}

export default KeyboardEvents;
