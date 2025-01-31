// Function to append a value to the display
function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

// Function to delete the last character
function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
  const display = document.getElementById("display");
  try {
      // Evaluate the expression in the display
      display.value = eval(display.value);
  } catch (error) {
      // Handle errors (e.g., invalid expressions)
      display.value = "Error";
  }
}
