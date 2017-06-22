function CalcTotal(form) {
  this.inputTotal = form.inputTotal;
  this.calcTotalTest = new CalcTotalTest();
}

CalcTotal.prototype.calc = function (calculator, select) {

  let loan = calculator;
  let numberOfMonths = select.month;
  let interest = select.rate;
  let result = this.calcTotalTest.total(loan, numberOfMonths, interest);

  this.inputTotal.value = `R$ ${this.calcTotalTest.currencyFormat(result)}`;
}