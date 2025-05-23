const nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  nameOutput.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
})
