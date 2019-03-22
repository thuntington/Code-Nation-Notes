class Animal
{

constructor(name) {
this._name = name;
this._hunger = 60; }

get name() {
return this._name;
}

get hunger() {
return this._hunger; }

eat() {
this._hunger--;
console.log(this._hunger) }
}

class Bunny extends Animal {

    constructor(name, lovesCarrots) {
    
    super(name);
    this._lovesCarrots = lovesCarrots;}
    
    }
    
    const Stanz = new Bunny ('Stanz', true) ;

   console.log(Stanz.eat() , true)
   console.log(Stanz.eat() , true)
   console.log(Stanz.eat() , true)
