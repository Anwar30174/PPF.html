function calculatePPF() {
    const investment = parseFloat(document.getElementById('investment').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const years = parseFloat(document.getElementById('years').value);
    
    let totalAmount = 0;
    let interest = 0;
    
    for (let i = 0; i < years; i++) {
      interest = totalAmount * interestRate;
      totalAmount += investment + interest;
    }
    
    document.getElementById('result').innerHTML = `Total amount after ₹${years} years: ₹${totalAmount.toFixed(2)}`;
  }
