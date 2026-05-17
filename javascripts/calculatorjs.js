var number_1, number_2;


number_1 = Number(window.prompt('Enter the first number.'));
number_2 = Number(window.prompt('Enter the second number.'));
window.alert(['Addition result.' + String(String(number_1 + number_2) + '. '),'Subtraction result: ' + String(String(number_1 - number_2) + '. '),'Multiplication result: ' + String(String(number_1 * number_2) + '. '),'Division result: ' + String(String(number_1 / number_2) + '. '),'Exponentation result: ' + String(String(Math.pow(number_1, number_2)) + '. '),'Root result: ' + String(String(Math.pow(number_1, 1 / number_2)) + '.')].join(''));
