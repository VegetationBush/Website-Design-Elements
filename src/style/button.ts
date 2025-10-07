// Select all buttons with class "btn"
const buttons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".button");

buttons.forEach((button) => {
	button.addEventListener("mouseup", () => {
		if (button.style.getPropertyValue("--disableButtonListeners") == "true"){
			return;
		}
		button.style.transition = "background-color 0.2s ease-out";
		button.style.backgroundColor =
			"color-mix(in srgb, var(--button-bg) 90%, white)";
	});
	button.addEventListener("mousedown", () => {
		if (button.style.getPropertyValue("--disableButtonListeners") == "true"){
			return;
		}
		button.style.transition = "none";
		button.style.backgroundColor =
			"color-mix(in srgb, var(--button-bg) 90%, black)";
	});
	button.addEventListener("mouseout", () => {
		if (button.style.getPropertyValue("--disableButtonListeners") == "true"){
			return;
		}
		button.style.transition = "background-color 0.2s ease-out";
		button.style.backgroundColor = "var(--button-bg)";
	});
	button.addEventListener("mouseenter", () => {
		if (button.style.getPropertyValue("--disableButtonListeners") == "true"){
			return;
		}
		button.style.transition = "none";
		button.style.backgroundColor =
			"color-mix(in srgb, var(--button-bg) 90%, white)";
	});
});
