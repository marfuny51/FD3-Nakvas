var Scales = /** @class */ (function () {
    function Scales(_engine) {
        this.engine = _engine;
    }
    Scales.prototype.add = function (product) {
        this.engine.addItem(product);
    };
    Scales.prototype.getNameList = function () {
        var names = [];
        for (var i = 0; i < this.engine.getCount(); i++) {
            names.push(this.engine.getItem(i).getName());
        }
        return names;
    };
    Scales.prototype.getSumScale = function () {
        var scales = 0;
        for (var i = 0; i < this.engine.getCount(); i++) {
            scales += this.engine.getItem(i).getScale();
        }
        return scales;
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
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (product) {
        this.products.push(product);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.products[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.products.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.key = 'Scales';
        this.storage = [];
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (product) {
        this.storage.push(product);
        localStorage.setItem(this.key, JSON.stringify(this.storage));
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        return this.storage[index];
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return this.storage.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var storageArray = new ScalesStorageEngineArray();
var locStorage = new ScalesStorageEngineLocalStorage();
var newScalesArray = new Scales(storageArray);
var newScalesLocStorage = new Scales(locStorage);
var apple1 = new Product("RedPrince", 10);
var apple2 = new Product("Gloster", 5);
var apple3 = new Product("Antonovka", 7);
var tomato1 = new Product("Red", 2);
var tomato2 = new Product("Yellow", 3);
var tomato3 = new Product("Black", 8);
newScalesArray.add(apple1);
newScalesArray.add(apple2);
newScalesArray.add(apple3);
newScalesArray.add(tomato1);
newScalesArray.add(tomato2);
newScalesArray.add(tomato3);
console.log('Array:');
console.log('List of all products: ' + newScalesArray.getNameList());
console.log('Total weight of all products: ' + newScalesArray.getSumScale());
newScalesLocStorage.add(apple1);
newScalesLocStorage.add(apple2);
newScalesLocStorage.add(apple3);
newScalesLocStorage.add(tomato1);
newScalesLocStorage.add(tomato2);
newScalesLocStorage.add(tomato3);
console.log('LocalStorage:');
console.log('List of all products: ' + newScalesLocStorage.getNameList());
console.log('Total weight of all products: ' + newScalesLocStorage.getSumScale());
//# sourceMappingURL=app.js.map