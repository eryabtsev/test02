'use strict';

// var number = 5;
// var string = "Hello";
// var sym = Symbol();
// null;
// undefined;
// var obj = {};

// console.log(4/0);
// console.log('string'*90);

//object
// let person = {
//     name: "John",
//     age: 25,
//     isMarried: false
// }

// console.log(person.name);
// console.log(person["name"]);

//array
// let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

// console.log(arr[2]);

// console.log(typeof(arr));

//Convert to String
// console.log(typeof(String(null)));
// console.log('ww'+'err');
// console.log(typeof('ww'+5));

//Convert tot Number
// console.log(typeof(Number('5')));
// console.log(typeof(+'5'));
// console.log(typeof(5 + +'5'));
// console.log(typeof(parseInt('15px',10)));

//False values:
// 0, '', null, undefined, NaN

// let switcher = null;
// switcher=1;
// if (switcher)
// {
//     console.log("Working...")
// }


//Covert to Boolean
// console.log(typeof(Boolean(5)));
// console.log(typeof(!!5));

//Общение с пользователем


//alert(1111);

// let a = confirm('Are you here?');
// console.log(a);

//let ab = prompt("Есть ли Вам 18","30");
//console.log(ab);

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(++incr);
// console.log(--decr);


//Остаток от деления
console.log(5%2);

//Сравнение значений (не типов)
console.log("2" == 2);
console.log("2" === 2);

let isChecked = false,
    isClose = false;

// && - вернет true только если оба условия true
console.log(!isChecked && !isClose);
// && - вернет true если хотя бы один из true
console.log(isChecked || isClose);
