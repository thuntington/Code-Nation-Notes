/*var car = {};     //this is dot notation to create an object
    car.wheels = 4;
    car.colour = 'red';
    car.mpg = 34;
    car.engine = 1;
    car.gallons = 12; 

    
  console.log(car)*/ 

/*var car = {    //this is object literal notation to create an object
    wheels: 4,
    colour: 'red',
    mpg: 32,
    engine: 1,
    gallons: 12
}; 

console.log(car);*/ 

/*var car = {};   //this is bracket notation to create an object
car['wheels'] = 4;
car['colour'] = 'red';
car['mpg'] = 34;
car['engine'] = 1;
car['gallons'] = 12; 

console.log(car) */

/*var snowman = {
    isSnow: true,
    colour: 'white',
    madeOfSnowballs: 3,
    'first name': 'Frosty'
}; 

snowman.colour = 'Orange';    //this will change the property colour to Orange.
snowman.madeOfSnowballs = 8;

console.log(snowman.isSnow);
console.log(snowman.colour);          //so when you print snowman/colour it is now updated to Orange.
console.log(snowman.madeOfSnowballs);
console.log(snowman['first name']); */  

//object CONSTRUCTOR function 

/*function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
};

var car1 = new Car('Honda', 'Civic', '2006');
var car2 = new Car('Ford', 'Mustang', '2013');

var car3 = new Car('Jeep', 'Cherokee', '2015'); 

car3.fourWheelDrive = true;   //these add new properties that are specific to car3.
car3['bumperStickers'] = false;  //this property contains bracket notation and can still be used.

console.log(car3); */

var lion = {
    name: 'Simba',
    foodType: 'carnivore',
    kingOfJungle: true
};

var monkey = {
    name: 'Louie',
    foodType: 'omnivore',
    kingOfJungle: false
};

function Animal(name, foodType, kingOfJungle){
    this.name = name;
    this.foodType = foodType;
    this.kingOfJungle = kingOfJungle;
}

var animal1 = new Animal('Snoopy', 'carnivore', false);
var animal2 = new Animal('Garfield', 'lasange', true);

console.log(animal2);