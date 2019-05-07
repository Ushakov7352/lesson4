var numberInput = +prompt('Введите число от 0 до 999');
var number;
number = {
   единицы: 0,
   десятки: 0,
   сотни: 0
};
if (numberInput > 999) {
   console.log(' Вы ввели число больше 999')
}
number.единицы = numberInput % 10;
number.десятки = ((numberInput % 100 - numberInput % 10) / 10);
number.сотни = (numberInput % 1000 - numberInput % 100) / 100;
for (var prop in number) {
   console.log(("'" + prop + "'" + ':' + number[prop]));
}
/////=============
basket = {
    item: {},
    sum: 0,
    sumBasket: function () {
        var sum = 0;
        for (var key in this.item) {
            var elem = this.item[key];
            sum += elem.quant * elem.price;
        }
        this.sum = sum;


        var sum = sum;
        return sum;
    }
};
shirt01 = {
    price: 24,
    quant: 5,
};
shirt02 = {
    price: 30,
    quant: 10,
};

shirt03 = {
    price: 40,
    quant: 5,
};

basket.item = {
    shirt01,
    shirt02,
    shirt03,
};

basket.sumBasket();

console.log(' Total sum    ' + basket.sum);
