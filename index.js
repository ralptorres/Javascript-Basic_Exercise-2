let soup = 10;
let burgers = 8;
let iceCream = 5;
let person = 3;
let toaster = 18.5;
let shirt = 7.5;

calculate = soup + burgers * 3 + iceCream;
calculate2 = toaster + shirt * 2;

alert(`Total: $${calculate}`);

alert(`Number of person: ${person}.
Each person will pay $${(calculate * person) / 3}`);

alert(`Total: $${calculate2}`);
alert(`Total tax (10%): $${(calculate2 * 100 * 0.1) / 100}`);
alert(`Total tax (20%): $${(calculate2 * 100 * 0.2) / 100}`);
