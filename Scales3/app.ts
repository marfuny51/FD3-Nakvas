interface IStorageEngine {

    addItem(product:Product):void; // добавление продукта на весы
    getItem(index:number):Product; // нахождение продукта по индексу
    getCount():number; // количество продуктов на весах

}

class Scales<StorageEngine extends IStorageEngine> {

    engine:IStorageEngine; // место для хранения продуктов на весах

    constructor(_engine:IStorageEngine) {
        this.engine = _engine;
    }

    add(product:Product):void {
        this.engine.addItem(product);
    }

    getNameList():string[] {
        let names:string[]=[];
        for(let i:number=0; i<this.engine.getCount(); i++) {
            names.push(this.engine.getItem(i).getName());
        }
        return names;
    }

    getSumScale():number {
        let scales:number=0;
        for(let i:number=0; i<this.engine.getCount(); i++) {
            scales += this.engine.getItem(i).getScale();
        }
        return scales;
    }  
}

class Product {

    private name:string;
    private weight:number;
    
    constructor(_name:string, _weight:number) {
        this.name=_name;
        this.weight=_weight;
    }

    getName():string {
        return this.name;
    }

    getScale():number {
        return this.weight;
    }
}

class ScalesStorageEngineArray implements IStorageEngine {

    products: Product[];

    constructor() {
        this.products = [];
    }
    
    addItem(product:Product):void {
        this.products.push(product);
    }

    getItem(index:number):Product {
        return this.products[index];
    }

    getCount():number {
        return this.products.length;
    }

}

class ScalesStorageEngineLocalStorage implements IStorageEngine {
    
    key:string = 'scales';

    constructor() {
        localStorage.clear();
    }

    addItem(product:Product):void {
        let products:any[];
        if(!localStorage.getItem(this.key)) {
            products=[];
        }
        else {
            products = JSON.parse(localStorage.getItem(this.key));
        }
        products.push(product);
        localStorage.setItem(this.key, JSON.stringify(products));
    }

    getItem(index:number):Product {
        let products:any[] = JSON.parse(localStorage.getItem(this.key));
        return new Product(products[index].name, products[index].weight);
    }

    getCount():number {
        let products:any[] = JSON.parse(localStorage.getItem(this.key));
        return products.length;
    }

}

let storageArray = new ScalesStorageEngineArray();
let locStorage = new ScalesStorageEngineLocalStorage();
let newScalesArray = new Scales(storageArray);
let newScalesLocStorage = new Scales(locStorage);

let apple1:Product = new Product ("RedPrince", 10);
let apple2:Product = new Product ("Gloster", 5);
let apple3:Product = new Product ("Antonovka", 7);

let tomato1:Product = new Product ("Red", 2);
let tomato2:Product = new Product ("Yellow", 3);
let tomato3:Product = new Product ("Black", 8);

newScalesArray.add(apple1);
newScalesArray.add(apple2);
newScalesArray.add(tomato1);
newScalesArray.add(tomato3);

console.log('Array:');
console.log('List of all products: ' + newScalesArray.getNameList());
console.log('Total weight of all products: ' + newScalesArray.getSumScale());

newScalesLocStorage.add(apple2);
newScalesLocStorage.add(apple3);
newScalesLocStorage.add(tomato2);

console.log('LocalStorage:');
console.log('List of all products: ' + newScalesLocStorage.getNameList());
console.log('Total weight of all products: ' + newScalesLocStorage.getSumScale());