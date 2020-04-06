class Scales {
    products:any[];

    constructor() {
        this.products=[]; 
    }

    add(product:{nameproduct:string,weightproduct:number}):void {
        this.products.push(product);
    }

    getSumScale():number {
        let scales:number;
        for(let i=0; i<this.products.length; i++) {
            scales =+ this.products[i].weightproduct.getScale;
        }
        console.log(scales);
        return scales;
    }

    getNameList():string[] {
        let names:string[]=[];
        for(let i=0; i<this.products.length; i++) {
            names.push(this.products[i].nameproduct.getName);
        }
        console.log(names);
        return names;
    }
    
}

class Product extends Scales {
    
    weight:number;
    name:string;

    constructor() {
        super();
        this.weight=0;
        this.name=''; 
    }

    getScale(_weight:number):void {
        this.weight=_weight;
    }

    getName(_name:string):void {
        this.name=_name;
    }
}

class Apple extends Product {

    name:string;
    weight:number;
        
    constructor( _name:string,_weight:number) {
        super();
        this.name=_name;
        this.weight=_weight;
    }
    
    getName(_name:string):void {
        super.getName(this.name);
    }

    getScale(_weight:number):void {
        super.getScale(this.weight);
    }
}

class Tomato extends Product {

    name:string;
    weight:number;
        
    constructor( _name:string,_weight:number) {
        super();
        this.name=_name;
        this.weight=_weight;
    }
    
    getName(_name:string):void {
        super.getName(this.name);
    }

    getScale(_weight:number):void {
        super.getScale(this.weight);
    }
}

let firstScales:Scales;

let apple1:Apple = new Apple ("RedPrince", 10);
let apple2:Apple = new Apple ("Gloster", 5);

let tomato1:Tomato = new Tomato ("Red", 2);
let tomato2:Tomato = new Tomato ("Yellow", 3);

firstScales.add(apple1);