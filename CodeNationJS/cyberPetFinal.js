class CyberPet{
    constructor(animal){
        this._animal = animal;
        this._hunger = 10 
        this._happiness = 10
        this._thirst = 10
        this._energy = 10
    }

    get animal(){  
        return this._animal;
    }
    
    feedPet(){                
        this._hunger++;
        this._happiness++;
        this._energy++;
        if(this._hunger > 20){
            console.log('Your ' +this._animal+ ' is getting overwieght')
        } else {
            console.log('Your ' +this._animal+ ' is eating');
        }
    }
    
    dontFeed(){
        this._hunger--;
        this._happiness--;
        this._energy--;
        if(this._hunger < 5 && this._hunger > 1){
            console.log('You need to feed your ' +this._animal+ '')
        } else if
            (this._hunger < 1){
                console.log('Your ' +this._animal+ ' is dead!');            
            } else {
                console.log('Dont forget to feed your ' +this._animal+'');
            }
        
    }     
    
    playWith(){
        this._happiness++;
        this._energy--;
        this._hunger--;
    }
     
    dontPlay(){
        this._happiness--;
    }
    
    drink(){
        this._thirst++;
        this._energy++;
    }

    dontDrink(){
        this._thirst--;
        this._happiness--;
    }
    
    sleep(){
        this._energy++;
        this._happiness--;
        console.log('Your ' +this._animal+ ' is asleep');
    } 

    wakeUpPet(){
        console.log('Your ' +this._animal+ ' is awake!');
    }

    checkHealth(){
        console.log("Name:" , this._animal , "Hunger:" , this._hunger , "Thirst:" , this._thirst , "Energy:" , this._energy , "Happiness:" , this._happiness);
    }
}
    const cat = new CyberPet('Cat'); 
    const dog = new CyberPet('Dog'); 
    const rabbit = new CyberPet('Rabbit');   

class Bunny extends CyberPet {

    constructor(animal, lovesCarrots) {
        
    super(animal);
    this._lovesCarrots = lovesCarrots;}
        
}


/*cat.feedPet(); 
cat.checkHealth();
cat.feedPet();
cat.checkHealth();  
cat.sleep();
cat.checkHealth();  */ 

cat.feedPet();
cat.feedPet();
cat.feedPet();
cat.feedPet();
cat.feedPet();
cat.feedPet();

cat.checkHealth(); 

console.log(cat);