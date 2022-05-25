//Скопирован ли массив?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
// console.log( fruits.length ); // ?

// Массивы - это объекты, они передаются по ссылкею
// В консоле будет длина массива с добавленным в конце новым элементом.
//--------------------------------------------------

//Операции с массивами

/**
 * Давайте произведём 5 операций с массивом.

1.Создайте массив styles с элементами «Джаз» и «Джаз».
2.Добавьте «Рок-н-ролл» в конец.
3.Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
4.Удалите первый элемент массива и покажите его.
5.Вставьте Рэп и Регги в начало массива.


Массив по ходу выполнения операций:
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
 */

let styles = ['Джаз', 'Блюз'];
// console.log(styles);
styles.push('Рок-н-ролл');
// console.log(styles);
let middle = Math.floor(styles.length / 2);
styles[middle] = 'Классика';
// console.log(styles);
// console.log(styles.shift());
styles.unshift('Рэп', 'Регги');
// console.log(styles);

//-----------------------------------------------------
//Вызов в контексте массива

// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
 console.log( this );
});

arr[2](); // ? ['a', 'b', ƒ]

// Вывод this, т.е. объекта, т.е массива.

//-------------------------------------------------
//Сумма введённых чисел

/**
 * Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
 */

function sumInput() {
    let newElement = null;
    let arr = [];
    let result = null;
    while (result === "" ||
        result === null ||
        !isFinite(result)) {
        newElement = +prompt('Введите число', );
        arr.push(newElement);
        result = arr.reduce((total, value) => total + value);
        alert(result);
    };
};
// sumInput();

//-------------------------------------------

//Подмассив наибольшей суммы

/**
 * На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
 */

function getMaxSubSum(arr) {
    let maxSum = null;
    let subSum = null;
    for (let item of arr) { 
        subSum += item; 
        maxSum = Math.max(maxSum, subSum);
        if (subSum < 0) subSum = 0; 
    }
    return maxSum;
};


// console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
// console.log( getMaxSubSum([1, 2, 3]) ); // 6
// console.log( getMaxSubSum([-1, -2, -3]) ); // 0
