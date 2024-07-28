"use strict";
/* 
Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу).
Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше.
Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації,
то функція виводить в консоль останній введення користувача і завершує функцію.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

function isGreaterThanHundred(value) {
  if (+value > 100) {
    return true;
  }

  return false;
}

function isText(value) {
  if (typeof value === "string") {
    return true;
  }

  return false;
}

function loopFunc() {
  let lastInput = null;

  for (let i = 0; i < 10; i++) {

    const userInput = prompt(
      `Enter a number greater than 100. \nAttempt ${i + 1} out of 10`
    );

    if (!userInput?.trim()) {

      alert("Entered empty string or 'cancel' clicked");
      lastInput = userInput;
      continue;
    } else if (Number.isFinite(+userInput)) {

      if (isGreaterThanHundred(userInput)) {

        lastInput = userInput;
        alert(
          `A number greater than 100 entered. \nLast input value: ${lastInput}`
        );
        return;
      } else {

        alert(`Entered number ${userInput} less than 100 (or equal).`);
        lastInput = userInput;
        continue;
      }
    } else if (isText(userInput)) {

      lastInput = userInput;
      alert(`Text entered. \nLast input value: ${lastInput}`);
      return;
    } else {

      lastInput = userInput;
    }
  }

  alert(`You have used all 10 attempts. \nLast input value: ${lastInput}`);
}

loopFunc();
