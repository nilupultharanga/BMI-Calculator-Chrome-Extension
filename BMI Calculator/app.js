document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get height and weight values
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Calculate BMI
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    // Display the result
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `Your BMI is ${bmi}`;

    // Clear input fields
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
});
