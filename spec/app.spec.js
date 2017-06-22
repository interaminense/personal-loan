describe("CalcTotal", function () {
    var calcTotal;

    beforeEach(function () {
        calcTotal = new CalcTotal();
    });

    it("sould be able to calc PMT", function () {
        expect(calcTotal.getPmt(100000, 24, 7)).toEqual(209232);
    });

    it("sould be able to return currency Format", function () {
        expect(calcTotal.currencyFormat(209232)).toEqual("209,232,00");
    });
    
});