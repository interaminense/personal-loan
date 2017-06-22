function Select(loanSelect, buttonSelect, inputSearch, ulSelect, dropdownSelect) {
    this.select = loanSelect;
    this.button = buttonSelect;
    this.input = inputSearch;
    this.ul = ulSelect;
    this.dropdown = dropdownSelect;
    this.options = [
        { month: 24, rate: 7 },
        { month: 36, rate: 9 },
        { month: 48, rate: 15 }
    ];
    this.createList();
}

Select.prototype.success = function () {
    this.button.classList.remove('error');
}

Select.prototype.error = function () {
    this.button.classList.add('error');
}

Select.prototype.createList = function () {

    this.options.forEach(option => {
        let li = document.createElement('li');
        li.className = 'loan__select-li';
        li.textContent = `${option.month} months, rate of ${option.rate}% per month`;
        li.setAttribute('data-month', option.month);
        li.setAttribute('data-interest-rate', option.rate);

        this.ul.appendChild(li);
    });

}

Select.prototype.allList = function () {
    return Array.from(this.ul.querySelectorAll('li'));
}

Select.prototype.searchItem = function (value) {

    if (value.length > 0) {

        this.allList().forEach(li => {

            let exp = new RegExp(value, 'i');

            if (!exp.test(li.textContent)) {
                li.classList.add('loan__select-li--is-hidden');
            } else {
                li.classList.remove('loan__select-li--is-hidden');
            }
        });
    } else {

        this.allList().forEach(li => {
            li.classList.remove('loan__select-li--is-hidden');
        });
    }
}

Select.prototype.selectItem = function (li) {

    this.allList().forEach(li => {
        li.classList.remove('loan__select-li--is-active');
    });

    li.classList.add('loan__select-li--is-active');

    this.button.textContent = li.textContent;

    this.params = {
        month: parseInt(li.getAttribute('data-month')),
        rate: parseInt(li.getAttribute('data-interest-rate'))
    }
}

Select.prototype.get = function () {
    return this.params;
}