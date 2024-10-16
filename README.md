# PPF.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PPF Calculator</title>
  <link rel="stylesheet" href="ppf.css">
</head>
<body>
  <div class="container">
    <h2>PPF Calculator</h2>
    <div class="input-group">
      <label for="investment">Annual Investment (₹):</label>
      <input type="number" id="investment" placeholder="Enter annual investment">
    </div>
    <div class="input-group">
      <label for="interestRate">Interest Rate (%):</label>
      <input type="number" id="interestRate" placeholder="Enter interest rate">
    </div>
    <div class="input-group">
      <label for="years">Investment Period (years):</label>
      <input type="number" id="years" placeholder="Enter investment period">
    </div>
    <button onclick="calculatePPF()">Calculate</button>
    <div id="result"></div>
  </div>
  <script src="ppf.js"></script>
</body>
</html>
