function rollDice() {
  const numOfDice = document.getElementById("number-of-dice").value;
  const diceResult = document.getElementById("dice-result");
  const diceImages = document.getElementById("dice-images");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(
      `<img src="imgs/dice${value}.webp" alt="Dice ${value}" width="100" height="100">`
    );
  }

  diceResult.textContent = `dice: ${values.join(", ")}`;
  diceImages.innerHTML = images.join("");
}
