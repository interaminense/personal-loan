function CalcTotal() {
  this.inputTotal = form.inputTotal;
}

CalcTotal.prototype.calc = function (calculator, select) {
  
  let loan = calculator;
  let numberOfMonths = select.month;
  let interest = select.rate;
  let result = this.getPmt(loan, numberOfMonths, interest);

  this.inputTotal.value = `R$ ${this.currencyFormat(result)}`;
}

CalcTotal.prototype.getPmt = function(loan, numberOfMonths, interest) {
  return Math.floor(((interest / 100) / (1 - Math.pow((1 + (interest / 100)), - numberOfMonths))) * loan) * numberOfMonths;
}

CalcTotal.prototype.currencyFormat = function(element)  {
  return element.toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}