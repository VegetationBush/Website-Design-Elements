// Select all buttons with class "btn"
const buttons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".button");

buttons.forEach((button) => {
	button.addEventListener("mouseup", () => {
		button.style.transition = "background-color 0.2s ease-out";
		button.style.backgroundColor =
			"color-mix(in srgb, var(--button-bg) 90%, white)";
	});
	button.addEventListener("mousedown", () => {
		button.style.transition = "none";
		button.style.backgroundColor =
			"color-mix(in srgb, var(--button-bg) 90%, black)";
	});
	button.addEventListener("mouseout", () => {
		button.style.transition = "background-color 0.2s ease-out";
		button.style.backgroundColor = "var(--button-bg)";
	});
	button.addEventListener("mouseenter", () => {
		button.style.transition = "none";
		button.style.backgroundColor =
			"color-mix(in srgb, var(--button-bg) 90%, white)";
	});
});
