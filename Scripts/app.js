var Person = /** @class */ (function () {
    //constructore
    function Person(age, name) {
        this._age = age;
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "age", {
        //PUBLIC PROPERTIES
        get: function () {
            return this._age;
        },
        set: function (newAge) {
            this._age = newAge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.saysHello = function () {
        console.log(this.name + " says Hello..!!");
    };
    return Person;
}());
//IIFE --Immediately Invockeed Funcation Expression
(funcation());
{
    funcation;
    Start();
    {
        var person = new Person(27, "chandni");
        person.saysHello();
    }
}
();
//# sourceMappingURL=app.js.map