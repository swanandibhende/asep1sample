document.getElementById('simulateButton').addEventListener('click', () => {
  const output = document.getElementById('simulationOutput');
  output.textContent = "Running simulation...";

  setTimeout(() => {
    output.textContent = "Simulation complete! Check your graph outputs for detailed results.";
  }, 2000);
});
