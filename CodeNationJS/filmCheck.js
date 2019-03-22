let favouriteFilms = ['Lord of the Rings' , 'Batman' , 'Ghostbusters' , 'Fight Club'];

for (let index = 0; index < favouriteFilms.length; index++){
  console.log(favouriteFilms[index]);
}
const filmCheck = () => { 
    
    if (favouriteFilms[2] == 'Ghostbusters') {
        console.log('Living the good life');
    } else { 
        console.log('Not very good at all');
    }
}
filmCheck()