describe("Calculator", function () {
    let calculator;

    beforeEach(function () {
        calculator = new CalculatorTest();
    });

    it("sould be able if is valid expression", function () {
        expect(calculator.isExpressionValid('1/100')).toEqual(true);
        expect(calculator.isExpressionValid('1+5-10*50-100/(1*10)+(5-1000)')).toEqual(true);
        expect(calculator.isExpressionValid('1989/(10*12)')).toEqual(true);
    });

    it("sould be able if is invalid expression", function () {
        expect(calculator.isExpressionValid('1989/(10*12')).toEqual(false);
        expect(calculator.isExpressionValid('-(100')).toEqual(false);
        expect(calculator.isExpressionValid('((5+3)')).toEqual(false);
    });

});

describe("CalcTotalTest", function () {
    let calcTotal;

    beforeEach(function () {
        calcTotal = new CalcTotalTest();
    });

    it("sould be able to calc total", function () {
        expect(calcTotal.total(100000, 24, 7)).toEqual(209232);
    });

    it("sould be able to return currency Format", function () {
        expect(calcTotal.currencyFormat(1)).toEqual("1,00");
        expect(calcTotal.currencyFormat(100)).toEqual("100,00");
        expect(calcTotal.currencyFormat(1000)).toEqual("1,000,00");
        expect(calcTotal.currencyFormat(10000)).toEqual("10,000,00");
        expect(calcTotal.currencyFormat(100000)).toEqual("100,000,00");
        expect(calcTotal.currencyFormat(1000000)).toEqual("1,000,000,00");
    });

});