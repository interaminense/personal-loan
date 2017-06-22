function CalcTotalTest() {

}

CalcTotalTest.prototype.total = function (loan, numberOfMonths, interest) {
    return Math.floor(((interest / 100) / (1 - Math.pow((1 + (interest / 100)), - numberOfMonths))) * loan) * numberOfMonths;
}

CalcTotalTest.prototype.currencyFormat = function (digit) {
    return digit.toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}