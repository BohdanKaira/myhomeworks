"use strict";

function Plus() {
  var first = 0.1;
  var second = 0.2;
  var result = (first + second).toFixed(1);
  document.getElementById('task_1_result').innerHTML = result;
}

function Task_2() {
  var first = "1";
  var second = 2;
  var result = +first + second;
  document.getElementById('task_2_result').innerHTML = result;
}

function Memory() {
  var MB = 820 / 1024;
  var GigaB = document.getElementById('task_3').valueAsNumber;
  var result = Math.floor(GigaB / MB);
  document.getElementById('task_3_result').innerHTML = result;
}

function Choco() {
  var wall = document.getElementById('task_4_wallet').valueAsNumber;
  var pricechoco = document.getElementById('task_4_choco').valueAsNumber;
  var quantity = Math.floor(wall / pricechoco);
  var balance = (wall - quantity * pricechoco).toFixed(2);
  document.getElementById('task_4_result').innerHTML = "You can buy ".concat(quantity, " chocolate bars and your balance wil be ").concat(balance, " UAH");
}

function Number() {
  var UserNumber = document.getElementById('task_5').valueAsNumber;
  var reverse1 = UserNumber % 10 * 100;
  var reverse2 = Math.floor(UserNumber % 100 / 10) * 10;
  var reverse3 = Math.floor(UserNumber / 100);
  var result = reverse1 + reverse2 + reverse3;

  if (UserNumber == 100 || UserNumber == 200 || UserNumber == 300 || UserNumber == 400 || UserNumber == 500 || UserNumber == 600 || UserNumber == 700 || UserNumber == 800 || UserNumber == 800 || UserNumber == 900) {
    document.getElementById('task_5_result').innerHTML = "00".concat(result);
  } else if (UserNumber >= 100 && UserNumber <= 999) {
    document.getElementById('task_5_result').innerHTML = result;
  } else {
    document.getElementById('task_5_result').innerHTML = "<i style=\"color:red\">Enter number before 100 to 999!</i>";
  }
}

function Bank() {
  var months = document.getElementById('task_6_month').valueAsNumber;
  var amount = document.getElementById('task_6_amount').valueAsNumber;
  var percent = 0.05 / 12;
  var result = (months * (amount * percent)).toFixed(2);
  document.getElementById('task_6_result').innerHTML = "".concat(result, " UAH");
}
/*
    2 && 0 && 3 ==> 0

    2 || 0 || 3 ==> 2

    2 && 0 || 3 ==> 3
*/


function Age() {
  var UserAGE = document.getElementById('task_7').valueAsNumber;

  if (UserAGE >= 0 && UserAGE < 12) {
    document.getElementById('task_7_result').innerHTML = "<b>\u041F\u0440\u0438\u0432\u0456\u0442, \u0434\u0438\u0442\u0438\u043D\u043A\u043E!</b>";
  } else if (UserAGE >= 12 && UserAGE < 18) {
    document.getElementById('task_7_result').innerHTML = "<b>\u041F\u0440\u0438\u0432\u0456\u0442, \u043F\u0456\u0434\u043B\u0456\u0442\u043A\u0443!</b>";
  } else if (UserAGE >= 18 && UserAGE < 60) {
    document.getElementById('task_7_result').innerHTML = "<b>\u0412\u0456\u0442\u0430\u044E, \u0434\u043E\u0440\u043E\u0441\u043B\u043E\u0433\u043E!</b>";
  } else if (UserAGE >= 60 && UserAGE < 122) {
    document.getElementById('task_7_result').innerHTML = "<b>\u0412\u0456\u0442\u0430\u044E, \u043F\u0435\u043D\u0441\u0456\u043E\u043D\u0435\u0440\u0435!</b>";
  } else {
    document.getElementById('task_7_result').innerHTML = "<b>\u0422\u0438 \u0430\u0431\u043E \u043D\u043E\u0432\u0438\u0439 \u0440\u0435\u043A\u043E\u0440\u0434\u0441\u043C\u0435\u043D \u043A\u043D\u0438\u0433\u0438 \"\u0420\u0435\u043A\u043E\u0440\u0434\u0456\u0432 \u0413\u0456\u043D\u043D\u0435\u0441\u0430\" \u0430\u0431\u043E \u043E\u0431\u043C\u0430\u043D\u044E\u0454\u0448 \u043C\u0435\u043D\u0435!</b>";
  }
}

function _Symbol() {
  var numb = document.getElementById('task_8').valueAsNumber;

  switch (numb) {
    case 0:
      document.getElementById('task_8_result').innerHTML = "<b>)</b>";
      break;

    case 1:
      document.getElementById('task_8_result').innerHTML = "<b>!</b>";
      break;

    case 2:
      document.getElementById('task_8_result').innerHTML = "<b>@</b>";
      break;

    case 3:
      document.getElementById('task_8_result').innerHTML = "<b>#</b>";
      break;

    case 4:
      document.getElementById('task_8_result').innerHTML = "<b>$</b>";
      break;

    case 5:
      document.getElementById('task_8_result').innerHTML = "<b>%</b>";
      break;

    case 6:
      document.getElementById('task_8_result').innerHTML = "<b>^</b>";
      break;

    case 7:
      document.getElementById('task_8_result').innerHTML = "<b>&</b>";
      break;

    case 8:
      document.getElementById('task_8_result').innerHTML = "<b>*</b>";
      break;

    case 9:
      document.getElementById('task_8_result').innerHTML = "<b>(</b>";
      break;

    default:
      document.getElementById('task_8_result').innerHTML = "<b>Enter valid number</b>";
      break;
  }
}