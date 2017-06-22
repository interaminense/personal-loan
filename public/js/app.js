const form = document.querySelector('#form');
const loanCalculator = document.querySelector('#loanCalculator');
const loanSelect = document.querySelector('#select');
const buttonSelect = document.querySelector('#loanSelect_button');
const inputSearch = document.querySelector('#loanSelect_inputSearch');
const ulSelect = document.querySelector('#loanSelect_ul');
const dropdownSelect = document.querySelector('#loanSelect_dropdown');
const btnCalcTotal = form.btnCalcTotal;

const calculator = new Calculator();
const select = new Select();
const calcTotal = new CalcTotal();
const getQuot = new GetQuot();

loanCalculator.addEventListener('click', function (e) {

    if (e.target.name == 'addDigit') {
        calculator.addDigit(e.target.textContent);
    } else if (e.target.name == 'removeDigit') {
        calculator.removeDigit();
    } else if (e.target.name == 'calcExp') {
        calculator.calcExp();
    }

});

buttonSelect.addEventListener('click', function () {
    dropdownSelect.classList.toggle('loan__select-dropdown--is-visible');
});

document.addEventListener('click', function (e) {
    if (e.target != inputSearch && e.target != buttonSelect) {
        dropdownSelect.classList.remove('loan__select-dropdown--is-visible');
    }
});

inputSearch.addEventListener('keyup', function () {
    select.searchItem(this.value);
});

ulSelect.addEventListener('click', function (e) {
    select.selectItem(e.target);
    buttonSelect.classList.remove('error');
});

btnCalcTotal.addEventListener('click', function () {
    calculator.calcExp();

    if (calculator.get() != undefined && select.get() != undefined) {
        calcTotal.calc(calculator.get(), select.get());
    }

    calculator.get() == undefined ? calculator.error() : calculator.success();
    select.get() == undefined ? select.error() : select.success();
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    calculator.calcExp();

    if (calculator.get() != undefined && select.get() != undefined) {
        
        calcTotal.calc(calculator.get(), select.get());

        let interest = select.get().rate;
        let loan = calculator.get();
        let numberOfMonths = select.get().month;
        let totalDebit = calcTotal.getPmt(loan, numberOfMonths, interest);

        getQuot.send(interest, loan, numberOfMonths, totalDebit);
    }

    calculator.get() == undefined ? calculator.error() : calculator.success();
    select.get() == undefined ? select.error() : select.success();
});