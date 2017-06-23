function GetQuot() {
  this.btnGetQuot = form.btnGetQuot;
}

GetQuot.prototype.send = function (interest, loan, numberOfMonths, totalDebt) {

  let self = this;

  let params = {
    interest,
    loan,
    numberOfMonths,
    totalDebt
  }

  let callback = function () {
    console.log("params", params);
    self.success();
  };

  $.post('/json', params, callback, 'json');
}

GetQuot.prototype.success = function () {

  let btn = this.btnGetQuot;

  btn.classList.remove('loan__btn-default');
  btn.classList.add('loan__btn-success');
  btn.textContent = 'successfully';
  btn.setAttribute('disabled', true);

  setTimeout(function () {
    btn.classList.remove('loan__btn-success');
    btn.classList.add('loan__btn-default');
    btn.textContent = 'Get Quot';
    btn.removeAttribute('disabled');
  }, 2000);

}
