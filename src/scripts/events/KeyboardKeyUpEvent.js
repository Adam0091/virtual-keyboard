const keyboardKeyUpEvent = (event) => {
  const keys = document.querySelectorAll(".keyboard__key");

  for (let i = 0; i < keys.length; i++) {
    const code = keys[i].getAttribute("data-code");
    if (event.code === code) keys[i].classList.remove("active");
  }
};

export default keyboardKeyUpEvent;
