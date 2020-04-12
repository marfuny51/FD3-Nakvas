var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        //return names;
    };
    Scales.prototype.getSumScale = function () {
        var scales = 0;
        for (var i = 0; i < this.products.length; i++) {
            scales += this.products[i].getScale();
        }
        //return scales;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.weight;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _weight) {
        return _super.call(this, _name, _weight) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _weight) {
        return _super.call(this, _name, _weight) || this;
    }
    return Tomato;
}(Product));
var firstScales = new Scales;
var apple1 = new Apple("RedPrince", 10);
var apple2 = new Apple("Gloster", 5);
var apple3 = new Apple("Antonovka", 7);
var tomato1 = new Tomato("Red", 2);
var tomato2 = new Tomato("Yellow", 3);
var tomato3 = new Tomato("Black", 8);
firstScales.add(apple1);
firstScales.add(apple2);
firstScales.add(apple3);
firstScales.add(tomato1);
firstScales.add(tomato2);
firstScales.add(tomato3);
console.log('List of all products: ' + firstScales.getNameList());
console.log('Total weight of all products: ' + firstScales.getSumScale());
//# sourceMappingURL=app.js.map