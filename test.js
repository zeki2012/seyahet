let budget = +prompt('Sizin nece € -nuz var');
let money = budget;

let days = 0;

let ticket = +prompt('Bilet neceyedir');
let hotel = +prompt('Hotel neciyedir');
let food = +prompt('Yemeye ne qeder xerciniz cixacaq');
let other = +prompt('Elave xercleriniz');
let shooping = +prompt('Bazarliq xercleriniz');

let travel =  hotel + food + other + shooping

money -= ticket;

while (money > 0) {
   money -= travel;
   days++;

}

let netice = `Siz ${budget} € ile ${days} gun seyahet ede bilersiniz`

document.getElementById('xerc').innerHTML = netice;