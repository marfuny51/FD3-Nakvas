var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (product) {
        this.products.push(product);
    };
    Scales.prototype.getNameList = function () {
        var names = [];
        for (var i = 0; i < this.products.length; i++) {
            names.push(this.products[i].getName());
        }
        return names;
    };
    Scales.prototype.getSumScale = function () {
        var scales = 0;
        for (var i = 0; i < this.products.length; i++) {
            scales += this.products[i].getScale();
        }
        return scales;
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Apple.prototype.getName = function () {
        return this.name;
    };
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Tomato.prototype.getName = function () {
        return this.name;
    };
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    return Tomato;
}());
var firstScales = new Scales;
var apple1 = new Apple("Antonovka", 10);
var apple2 = new Apple("Gloster", 5);
var apple3 = new Apple("RedPrince", 7);
var apple4 = new Apple("Djonagored", 10);
var tomato1 = new Tomato("Red", 2);
var tomato2 = new Tomato("Yellow", 3);
var tomato3 = new Tomato("Black", 8);
var tomato4 = new Tomato("Cherry", 0.5);
firstScales.add(apple1);
firstScales.add(apple2);
firstScales.add(apple3);
firstScales.add(apple4);
firstScales.add(tomato1);
firstScales.add(tomato2);
firstScales.add(tomato3);
firstScales.add(tomato4);
console.log('List of all products: ' + firstScales.getNameList());
console.log('Total weight of all products: ' + firstScales.getSumScale());
//# sourceMappingURL=app.js.map