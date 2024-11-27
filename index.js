let soup = 10;
let burgers = 8;
let iceCream = 5;
let person = 3;
let toaster = 18.5;
let shirt = 7.5;
let basketball = 20.95;
let toast = 18.99;
let tShirt = 7.99;
let shipping = 4.99;
let num = 2.8;
let num1 = 2.2;
let tempC = 25;
let tempF = 86;
let tempC1 = -5;

calculate = soup + burgers * 3 + iceCream;
calculate2 = toaster + shirt * 2;
calculate3 = (basketball * 100 + toast * 100 + tShirt * 100) / 100;
calculate4 = (calculate3 * 100 + shipping * 100) / 100;
calculate5 = Math.round(calculate4 * 100 * 0.1) / 100;
calculate6 = calculate4 + calculate5;

numcal = Math.floor(num);
numcal1 = Math.ceil(num1);

Cel2Fah = (tempC * 9) / 5 + 32;
Fah2Cel = ((tempF - 32) * 5) / 9;
Cel2Fah1 = (tempC1 * 9) / 5 + 32;

// alert(`Total: $${calculate}`);

// alert(`Number of person: ${person}.
// Each person will pay $${(calculate * person) / 3}`);

// alert(`Total: $${calculate2}`);
// alert(`Total tax (10%): $${(calculate2 * 100 * 0.1) / 100}`);
// alert(`Total tax (20%): $${(calculate2 * 100 * 0.2) / 100}`);

// alert(`Items (3): $${calculate3}`);
// alert(`Total before tax: $${calculate4}`);
// alert(`Estimated tax (10%): $${calculate5}`);
// alert(`Order Total: $${calculate6}`);

// alert(numcal);
// alert(numcal1);

alert(`Convert 25°C in Fahrenheit. Answer: ${Cel2Fah}°F`);
alert(`Convert 86°F in Celsius. Answer: ${Fah2Cel}°C`);
alert(`Convert -5°C in Fahrenheit. Answer: ${Cel2Fah1}°F`);
