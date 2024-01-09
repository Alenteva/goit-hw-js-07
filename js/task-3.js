const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", (event) => {
  //  отримуємо поточне значення з інпуту, очищаємо його від пробілів по краях за допомогою методу trim()
  let inputText = event.target.value.trim();
  nameOutput.textContent = inputText || "Anonymous";
});
