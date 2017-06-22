function CalculatorTest() { }

CalculatorTest.prototype.isExpressionValid = function (value) {
    try {
        let result = eval(value);

        if(!isFinite(result)) {
            return false;
        } else {
            return true;
        }
    } catch (err) {
        return false;
    }
}