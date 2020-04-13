interface IStorageEngine {

    addItem(product:any):void; // добавление продукта на весы
    getItem(index:number):void; // нахождение продукта по индексу
    getCount():number; // количество продуктов на весах

}

class Scales<StorageEngine extends IStorageEngine> {

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

    getName():string {
        return this.name;
    }

    getScale():number {
        return this.weight;
    }
}

/*let firstScales:Scales = new Scales;

let apple1:Apple = new Apple ("RedPrince", 10);
let apple2:Apple = new Apple ("Gloster", 5);
let apple3:Apple = new Apple ("Antonovka", 7);

let tomato1:Tomato = new Tomato ("Red", 2);
let tomato2:Tomato = new Tomato ("Yellow", 3);
let tomato3:Tomato = new Tomato ("Black", 8);

firstScales.add(apple1);
firstScales.add(apple2);
firstScales.add(apple3);
firstScales.add(tomato1);
firstScales.add(tomato2);
firstScales.add(tomato3);

console.log('List of all products: ' + firstScales.getNameList());
console.log('Total weight of all products: ' + firstScales.getSumScale());*/