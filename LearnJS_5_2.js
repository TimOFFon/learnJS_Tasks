//Сумма пользовательских чисел
/*Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.*/

function showingSum() {
    let number1 = +prompt('Ведите первое число', );
    let number2 = +prompt('Ведите второе число', );
    return alert(number1 + number2);
};

// showingSum();

//-----------------------------------------------------
//Почему 6.35.toFixed(1) == 6.3?
/**
 * Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 
 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

Например:

alert( 1.35.toFixed(1) ); // 1.4
Но почему в примере ниже 6.35 округляется до 6.3?

alert( 6.35.toFixed(1) ); // 6.3
Как правильно округлить 6.35?
 */

// console.log( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
/**
 * Обратите внимание, что для числа 63.5 не происходит потери точности. Дело в том, что десятичная 
 часть 0.5 на самом деле 1/2. Дробные числа, делённые на степень 2, точно представлены в двоичной 
 системе, теперь мы можем округлить число:
 */

// console.log( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

//---------------------------------------------------
// Ввод числового значения

/**
 * Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, 
 пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». 
В этом случае функция должна вернуть null.
 */

function readNumber() {
    let value = null;
    while (
        typeof value  !== 'number'
        || 
        Object.is(NaN, value)
        ) {
        value = +prompt('введите число', 0);
    };
    alert(value);
};

// readNumber();

// Вариант из учебника
function readNumberLJS() {
    let num;
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
    if (num === null || num === '') return null;
    return +num;
};

// alert(`Число: ${readNumberLJS()}`);

//---------------------------------------------------
// Бесконечный цикл по ошибке
// Этот цикл – бесконечный. Он никогда не завершится, почему?
function infinityCicle() {
    let i = 0;
    while (i != 10) {
        i += 0.2;
        console.log(i);
    };
};

// infinityCicle();
/*Потому-что дробные вычисления в бинарном формате имеют остаток, который накапливается и 
приводит неожиданным ерзультатам. В этом случае результат просто "перепрыгивает" через 
ожидаемое значение. Этот эффект называется - "потеря точности". Дабы этого избежать стоит 
на каждом цикле округлять значение до одного знака после запятой*/

//---------------------------------------------------
//Случайное число от min до max

/**
 * Встроенный метод Math.random() возвращает случайное число от 0 (включительно) 
 до 1 (но не включая 1)

Напишите функцию random(min, max), которая генерирует случайное число с плавающей 
точкой от min до max (но не включая max).

Пример работы функции:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
 */

function random(min, max) {
    let result = Math.random() * (max - min) + min;
    return console.log(result);
};

// random(1, 5);
// random(1, 5);
// random(1, 5);
// random(1, 5);
// random(1, 5);


//---------------------------------------------------
//Случайное целое число от min до max

/**
 * Напишите функцию randomInteger(min, max), которая генерирует случайное целое 
 (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
 */

function randomInteger(min, max) {
    let result = Math.random() * (max + 1 - min) + min;
    // console.log(result);
    return console.log(Math.floor(result));
};

// randomInteger(1, 5);
// randomInteger(1, 5);
// randomInteger(1, 5);
// randomInteger(1, 5);

// Вариант2 

function randomInteger2(min, max) {
    let result = Math.random() * (max - min + 1) + (min - 0.5);
    // console.log(result);
    return console.log(Math.round(result));
};

// randomInteger2(1, 5);
// randomInteger2(1, 5);
// randomInteger2(1, 5);
// randomInteger2(1, 5);
