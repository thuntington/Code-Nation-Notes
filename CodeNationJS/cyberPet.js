class CyberPet{
    constructor(animal){
        this._animal = animal;
        this._hunger = 10 
        this._happiness = 10
        this._thirst = 10
        this._energy = 10
    }

    get animal(){  
        return this._name;
    }
    
    feedPet(){                
        this._hunger++;
        this._happiness++;
        this._energy++;
        if(this._hunger < 15){
            console.log('Your pet is getting overwieght')
        } 
        }
    
    dontFeed(){
        this._hunger--;
        this._happiness--;
        this._energy--;
        if(this_hunger > 5){
            console.log('You need to feed your pet')
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
        if(sleep() < 2){
        console.log("Your pet is asleep");
        }    
    }

    missSleep(){
        this._energy--;
        this.happiness--;
    }
}

const cat = new CyberPet('Cat');

CyberPet.drink();