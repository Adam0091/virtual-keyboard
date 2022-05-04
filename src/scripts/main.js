import KeyboardKeys from "./components/KeyboardKeys";
import KeyboardEvents from "./events/KeyboardEvents";

const root = document.createElement("div");
root.classList.add("root");

root.innerHTML = `
<div class="page">
    <div class="keyboard">
        <div class="container keyboard__container">
            <h1 class="keyboard__title">Virtual keyboard</h1>
            <h2 class="keyboard__subtitle">Made on Windows</h2>
            <h2 class="keyboard__subtitle">Combination change keyboard layout: CTRL + ALT</h2>
            <textarea class="keyboard__textarea" name="" id="keyboard_textarea"></textarea>
            <div class="keyboard__keys">${KeyboardKeys().innerHTML}</div>
        </div>
    </div>
</div>
`;

document.body.append(root);

document.querySelector(".keyboard__textarea").onkeypress = () => false;

const keyboardEvents = new KeyboardEvents();
document.addEventListener("click", keyboardEvents);
document.addEventListener("keydown", keyboardEvents);
document.addEventListener("keyup", keyboardEvents);
