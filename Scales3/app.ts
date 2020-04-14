interface IStorageEngine {

    addItem(product:Product):void; // добавление продукта на весы
    getItem(index:number):Product; // нахождение продукта по индексу
    getCount():number; // количество продуктов на весах

}

class Scales <StorageEngine extends IStorageEngine> {

    products: StorageEngine[];

    constructor() {
        this.products = [];
    }

    addItem(product:StorageEngine):void {
        this.products.push(product);
    }

    getItem(index:number):StorageEngine {
        return this.products[index];
    }

    getCount():number {
        return this.products.length;
    }

    getNameList():string[] {
        let names:string[]=[];
        for(let i:number=0; i<this.getCount(); i++) {
            names.push(this.getItem(i).getName());
        }
        return names;
    }

    getSumScale():number {
        let scales:number=0;
        for(let i:number=0; i<this.getCount(); i++) {
            scales += this.getItem(i).getScale();
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

    public getName():string {
        return this.name;
    }

    public getScale():number {
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

    storage: Product[];

    constructor() {
        this.storage = [];
    }

    addItem(product:Product):void {
        this.storage.push(product);
        localStorage.setItem('Scales', JSON.stringify(this.storage));
    }

    getItem(index:number):Product {
        return localStorage.Scales(index);
    }

    getCount():number {
        return localStorage.length;
    }

}



let storageArray = new ScalesStorageEngineArray();
let locStorage = new ScalesStorageEngineLocalStorage();
let newScales = new Scales();

let apple1:Product = new Product ("RedPrince", 10);
let apple2:Product = new Product ("Gloster", 5);
let apple3:Product = new Product ("Antonovka", 7);

let tomato1:Product = new Product ("Red", 2);
let tomato2:Product = new Product ("Yellow", 3);
let tomato3:Product = new Product ("Black", 8);

newScales.addItem(apple1);
newScales.addItem(apple2);
newScales.addItem(apple3);
newScales.addItem(tomato1);
newScales.addItem(tomato2);
newScales.addItem(tomato3);

console.log('List of all products: ' + newScales.getNameList());
console.log('Total weight of all products: ' + newScales.getSumScale());