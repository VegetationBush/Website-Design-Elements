const button = document.getElementById('searchbar-button') as HTMLButtonElement;
const input = document.getElementById('searchbar-input') as HTMLInputElement;

input.style.background = "transparent";
input.className = "";
input.style.pointerEvents = "none";

button.addEventListener('mousedown', () => {
    requestAnimationFrame(() => {
        input.focus();
        input.className = "frame-negative";
        input.style.background = "var(--dark2)";
        input.style.pointerEvents = "all";
        button.style.setProperty("--disableButtonListeners", "true");
        button.style.background = "var(--dark4)";
    });
});

input.addEventListener('blur', () => {
    input.className = "";
    input.style.background = "transparent";
    input.style.pointerEvents = "none";
    button.style.setProperty("--disableButtonListeners", "false");
    button.style.background = "var(--dark3)";
});