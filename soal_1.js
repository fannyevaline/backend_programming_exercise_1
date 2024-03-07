let bilPrima = [];

function cekBilPrima(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0) {
            return false;
        }
    }
    return num > 1;
}

for (let i = 1; i <= 1000; i++) {
    if(cekBilPrima(i)) {
        bilPrima.push(i);
    }
}

console.log("Bilangan Prima dari 1 sampai 1000 : ");
console.log(bilPrima.join(","));
