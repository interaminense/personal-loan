function CalculatorTest() { }

CalculatorTest.prototype.isExpressionValid = function (value) {
    try {
        eval(value);
        return true;
    } catch (err) {
        return false;
    }
}