class Person{

    //PRIVATE INSTANCE VARIABLE
    private _age: number;
    private _name: string;

    //PUBLIC PROPERTIES
    get age(): number{
        return this._age;
    }

    set age(newAge: number) {
        this._age = newAge;
    }

    get name(): string{
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    //constructore
    constructor(age: number, name:string ) {
        this._age = age;
        this._name = name;
    }

    public saysHello():void {
        console.log(`${this.name} says Hello..!!`);
    }
}

//IIFE --Immediately Invockeed Funcation Expression

(funcation(){
    funcation Start(){
        let person = new Person(27, "chandni");
        person.saysHello();
    }
})();
