describe("Calculator", function () {
    let calculator;

    beforeEach(function () {
        calculator = new Calculator();
        calculator.tempSignal = true;
    });

    it("sould be able to return only numbers or parenthesis of expression", function () {
        expect(calculator.isNumber('a')).toEqual(false);
    });

    it("sould be able to return true if First Signal typed", function () {
        expect(calculator.isFirstSignal('+')).toEqual(true);
    });

    it("sould be able to return true if Repeated Signal", function () {
        expect(calculator.isRepeatedSignal('+')).toEqual(true);
    });

});