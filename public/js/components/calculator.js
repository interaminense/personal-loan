function Calculator(form, calculator) {
    this.display = form.display;
    this.calculator = loanCalculator;
    this.tempSignal = false;
    this.calcTest = new CalculatorTest();

    console.log("Calculator", this);
}

Calculator.prototype.success = function () {
    this.calculator.classList.remove('loa__calculator--invalid');
    this.display.classList.remove('error');
}

Calculator.prototype.error = function () {
    this.calculator.classList.add('loa__calculator--invalid');
    this.display.classList.add('error');
}

Calculator.prototype.addDigit = function (digit) {
    if (!this.isFirstSignal(digit) && !this.isRepeatedSignal(digit)) {
        this.display.value += digit;
        return true;
    } else {
        return false;
    }
}

Calculator.prototype.removeDigit = function () {

    let str = this.display.value;
    let length = str.length;

    length--;
    this.display.value = str.substr(0, length);

    this.isRepeatedSignal(this.display.value.charAt(this.display.value.length - 1));

    if (this.display.value == '') {
        this.success();
    }
}

Calculator.prototype.removeAllDigit = function () {

    this.display.value = '';

    this.isRepeatedSignal(this.display.value.charAt(this.display.value.length - 1));

    if (this.display.value == '') {
        this.success();
    }
}

Calculator.prototype.calcExp = function () {

    if (this.calcTest.isExpressionValid(this.display.value)) {

        this.success();
        let str = this.display.value;
        let result = eval(str);

        if (str != '') {
            this.display.value = result;

            return parseInt(str);
        } else {

            return undefined;
        }

    } else {

        this.error();
    }
}

Calculator.prototype.isExpValid = function (digit) {
    return /(^[0-9]|\(|\))/.test(digit);
}

Calculator.prototype.isFirstSignal = function (digit) {
    return !this.isExpValid(digit) && this.display.value == '';
}

Calculator.prototype.isRepeatedSignal = function (digit) {
    let isSignal = !this.isExpValid(digit);
    let flag = isSignal && this.tempSignal;

    this.tempSignal = isSignal;

    return flag;
}

Calculator.prototype.get = function () {
    return this.calcExp();
}