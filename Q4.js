
function calculateTax(income) {
  if (income <= 250000) {
    tax = 0;
  } 
  else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } 
  else if (income <= 750000) {
    tax = (income - 500000) * 0.1 + 12500;
  } 
  else if (income <= 1000000) {
    tax = (income - 750000) * 0.15 + 37500;
  } 
  else if (income <= 1250000) {
    tax = (income - 1000000) * 0.2 + 75000;
  }
  return tax;
}

let result = calculateTax(20000);
console.log(result);
