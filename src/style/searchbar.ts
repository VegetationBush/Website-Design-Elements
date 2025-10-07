const button = document.getElementById('searchbar-button') as HTMLButtonElement;
const textbox = document.getElementById('searchbar-text') as HTMLInputElement;

button.addEventListener('mousedown', () => {
  textbox.style.display = "inline-block";
  textbox.focus();
});