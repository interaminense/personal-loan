function CalcTotalTest() {

}

CalcTotalTest.prototype.total = function (loan, numberOfMonths, interest) {
    let i = interest / 100;
    let exp = i / (1 - Math.pow((1 + i), - numberOfMonths)) * loan;
    let result = Math.floor(exp) * numberOfMonths; //arrendodamento para baixo
    return result;
}

CalcTotalTest.prototype.currencyFormat = function (digit) {
    return digit.toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
