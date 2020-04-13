interface IScalable {
    
    getName():string;
    getScale():number;

}

class Scales {

    products:IScalable[]=[];

    add(product:IScalable):void {
        this.products.push(product);
    }

    getNameList():string[] {
        let names:string[]=[];
        for(let i:number=0; i<this.products.length; i++) {
            names.push(this.products[i].getName());
        }
        return names;
    }

    getSumScale():number {
        let scales:number=0;
        for(let i:number=0; i<this.products.length; i++) {
            scales += this.products[i].getScale();
        }
        return scales;
    }   
}

class Apple implements IScalable {

    name:string;
    weight:number;
        
    constructor(_name:string,_weight:number) {
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

class Tomato implements IScalable {

    name:string;
    weight:number;
        
    constructor(_name:string,_weight:number) {
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

let firstScales:Scales = new Scales;

let apple1:Apple = new Apple ("Antonovka", 10);
let apple2:Apple = new Apple ("Gloster", 5);
let apple3:Apple = new Apple ("RedPrince", 7);
let apple4:Apple = new Apple ("Djonagored", 10);

let tomato1:Tomato = new Tomato ("Red", 2);
let tomato2:Tomato = new Tomato ("Yellow", 3);
let tomato3:Tomato = new Tomato ("Black", 8);
let tomato4:Tomato = new Tomato ("Cherry", 0.5);

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