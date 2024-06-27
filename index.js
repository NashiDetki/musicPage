const audio = document.querySelector(".audio");
const buttonPlay = document.querySelector(".button_play");

// Обработка событий. Введение

buttonPlay.addEventListener('click',()=>{
    if (audio.paused){
        audio.src = "./track.mp3";
        audio.play();
        audio.volume = 0.2;
        console.log('play');
    } else {
        audio.pause();
        console.log('pause');
    }
})

// alert("Нажми на кнопку Ок!");
// console.log("Hello!");
// console.log('26 + 39 =',26 + 39);

// console.log(2 + 2); // выведет в консоль 4
// console.log(2 * 2); // выведет в консоль 4
// console.log(2 - 2); // выведет в консоль 0
// console.log(2 / 2); // выведет в консоль 1
// console.log(2 ** 3); // возведение в степень. выведет в консоль 8 

// console.log("3" + "5");
// console.log("Мама " + "Мыла " + "Раму" + "");

// let pages;
// const pages = 210;
// console.log(pages);
// pages = 210;
// pages = 550;
// pages = 730;
// pages = "Хочу спать..."
// console.log(pages);

// let pagesBook2;
// pagesBook2 = 23;
// console.log("Всего страниц", pages + pagesBook2);

// console.log(x); //переменая не определена но ошибки нет
// var x = 10;

// console.log(7 > 6); // true — больше
// console.log(7 < 6); // false — меньше
// console.log(7 >= 6); // true — больше или равно
// console.log(7 <= 6); // false — меньше или равно
// console.log(7 === 6); // false — проверка на равенство
// console.log(7 !== 6); // true — проверка на неравенство 

// console.log('казнить' === 'помиловать'); // false — это разные строки
// console.log('казнить' !== 'помиловать'); // true
// console.log('2' !== 2); // true — строка "2" не равна числу 2 

// Условия IF, больше-меньше, булевы операции
// merry - весёлый
// let merry = false;
// if (merry) { 
//   console.log(':)'); 
// } else { 
//   console.log(':('); 
// }

// Функции: определение и вызов
// function consoleKitten() {
//     let a = '  Λ _ Λ' ;
//     let b = ' (=චᆽච=)==∫';
//     let c = '   ˉ ˉ   ˉ ˉ';
//     console.log(a); 
//     console.log(b); 
//     console.log(c);
//   } 

// consoleKitten()
  
// function merry(smile){
//     if (smile) { 
//           console.log(':)'); 
//         } else { 
//           console.log(':('); 
//         }
// }

// merry(false);