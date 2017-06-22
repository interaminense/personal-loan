const form = document.querySelector('#form');
const loanCalculator = document.querySelector('#loanCalculator');
const loanSelect = document.querySelector('#select');
const buttonSelect = document.querySelector('#loanSelect_button');
const inputSearch = document.querySelector('#loanSelect_inputSearch');
const ulSelect = document.querySelector('#loanSelect_ul');
const dropdownSelect = document.querySelector('#loanSelect_dropdown');
const btnCalcTotal = form.btnCalcTotal;

const calculator = new Calculator(form, loanCalculator);
const select = new Select(loanSelect, buttonSelect, inputSearch, ulSelect, dropdownSelect);
const calcTotal = new CalcTotal(form);
const getQuot = new GetQuot(form);

loanCalculator.addEventListener('click', function (e) {
    switch (e.target.name) {
        case 'addDigit':
            calculator.addDigit(e.target.textContent);
            break;
        case 'removeDigit':
            calculator.removeDigit();
            break;
        case 'calcExp':
            calculator.calcExp();
            break;
    }
});

loanCalculator.addEventListener('dblclick', function (e) {
    if (e.target.name == 'removeDigit') {
        calculator.removeAllDigit();
    }
});

document.addEventListener('keyup', function (e) {
    if (/(\*|\+|\-|\/|\d|\(|\))/.test(e.key)) {
        calculator.addDigit(e.key);
    }
    if (e.keyCode == 13) {
        calculator.calcExp();
    }
    if (e.keyCode == 8) {
        calculator.removeDigit();
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
        let totalDebit = calcTotal.total(loan, numberOfMonths, interest);

        getQuot.send(interest, loan, numberOfMonths, totalDebit);
    }

    calculator.get() == undefined ? calculator.error() : calculator.success();
    select.get() == undefined ? select.error() : select.success();
});