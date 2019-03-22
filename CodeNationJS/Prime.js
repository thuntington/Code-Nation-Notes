var primes = [2],isPrime;

for (var i=3;i<21;i+=2){
    isPrime = true;
    // test the number you are examaning against
    // all the primes you found so far
    for (var j = 0;j<primes.length;j++){
        if (i%primes[j]==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){primes.push(i)}
}
console.log(primes);