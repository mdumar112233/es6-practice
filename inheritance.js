class Parent{
    constructor(){
        this.fathername = 'romij'
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}

const baby = new Child('arif');
console.log(baby)










