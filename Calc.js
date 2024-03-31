function calculateTime() {
    const originalDateTime = document.getElementById('originalDateTime').value;
    const originTimezone = document.getElementById('originTimezone').value;
    const validityHours = parseInt(document.getElementById('validityHours').value, 10);
    const targetTimezone = document.getElementById('targetTimezone').value;

    // Your calculation logic here
    const resultElement = document.getElementById('result');
    const adjustedDateTime = `Calculated time (placeholder): ${originalDateTime} + ${validityHours} hours`;

    resultElement.textContent = adjustedDateTime;
}
