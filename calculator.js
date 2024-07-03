window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount:20000, rate:7.5, years:4};
  const defaultAmount = document.getElementById('loan-amount');
  defaultAmount.value = values.amount;
  const defaultRate = document.getElementById('loan-rate');
  defaultRate.value = values.rate
  const defaultYears = document.getElementById('loan-years');
  defaultYears.value = values.years
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = values.rate /100 / 12;
  const paymentsPerYear = values.years * 12;
  const costPerMonth = values.amount * monthlyRate /
   (1 - Math.pow(1 + monthlyRate, -paymentsPerYear));

   
  return (costPerMonth).toFixed(2);
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById('monthly-payment');

  monthlyPayment.innerText = '$' + monthly;
}
