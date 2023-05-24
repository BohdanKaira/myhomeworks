function Plus(){
    const first = 0.1;
    const second = 0.2;
    let result = (first + second).toFixed(1);

    document.getElementById('task_1_result').innerHTML = result;
}
function Task_2(){
    const first = "1";
    const second = 2;
    let result = +first + second;

    document.getElementById('task_2_result').innerHTML = result;
}
function Memory() {
    const MB = 820 / 1024;
    const GigaB = document.getElementById('task_3').valueAsNumber;
    let result = (Math.floor(GigaB / MB));

    document.getElementById('task_3_result').innerHTML = result;
}
function Choco() {
    const wall = document.getElementById('task_4_wallet').valueAsNumber;
    const pricechoco = document.getElementById('task_4_choco').valueAsNumber;

    let quantity = (Math.floor(wall / pricechoco));
    let balance = (wall - (quantity * pricechoco)).toFixed(2);
    
    document.getElementById('task_4_result').innerHTML = `You can buy ${quantity} chocolate bars and your balance wil be ${balance} UAH`
}
function Number() {
   
    const UserNumber = document.getElementById('task_5').valueAsNumber;

    let reverse1 = (UserNumber % 10) * 100;
    let reverse2 = (Math.floor((UserNumber % 100) / 10)) * 10;
    let reverse3 = Math.floor(UserNumber / 100);

    let result = reverse1 + reverse2 + reverse3;
    if (UserNumber == 100 || UserNumber == 200 || UserNumber == 300 || UserNumber == 400 || UserNumber == 500 || UserNumber == 600 || UserNumber == 700 || UserNumber == 800 || UserNumber == 800 || UserNumber == 900) {
        document.getElementById('task_5_result').innerHTML = `00${result}`;
    }
    else if(UserNumber >= 100 && UserNumber <= 999) {
        document.getElementById('task_5_result').innerHTML = result;
    } else {
        document.getElementById('task_5_result').innerHTML = `<i style="color:red">Enter number before 100 to 999!</i>`;
    }
}
function Bank() {
    const months = document.getElementById('task_6_month').valueAsNumber;
    const amount = document.getElementById('task_6_amount').valueAsNumber;
    const percent = 0.05 / 12;

    let result = (months * (amount * percent)).toFixed(2);

    document.getElementById('task_6_result').innerHTML = `${result} UAH`;
}
/*
    2 && 0 && 3 ==> 0

    2 || 0 || 3 ==> 2

    2 && 0 || 3 ==> 3
*/
function Age() {
    const UserAGE = document.getElementById('task_7').valueAsNumber;
    if (UserAGE >= 0 && UserAGE < 12) {
        document.getElementById('task_7_result').innerHTML = `<b>Привіт, дитинко!</b>`;
    } else if (UserAGE >= 12 && UserAGE < 18) {
        document.getElementById('task_7_result').innerHTML = `<b>Привіт, підлітку!</b>`;
    } else if (UserAGE >= 18 && UserAGE < 60) {
        document.getElementById('task_7_result').innerHTML = `<b>Вітаю, дорослого!</b>`;
    } else if (UserAGE >= 60 && UserAGE < 122) {
        document.getElementById('task_7_result').innerHTML = `<b>Вітаю, пенсіонере!</b>`;
    } else {
        document.getElementById('task_7_result').innerHTML = `<b>Ти або новий рекордсмен книги "Рекордів Гіннеса" або обманюєш мене!</b>`;
    }
}
function Symbol() {
    const numb = document.getElementById('task_8').valueAsNumber;

    switch(numb) {
        case 0:
            document.getElementById('task_8_result').innerHTML = `<b>)</b>`;
            break;
        case 1:
            document.getElementById('task_8_result').innerHTML = `<b>!</b>`;
            break;
        case 2:
            document.getElementById('task_8_result').innerHTML = `<b>@</b>`;
            break;
        case 3:
            document.getElementById('task_8_result').innerHTML = `<b>#</b>`;
            break;
        case 4:
            document.getElementById('task_8_result').innerHTML = `<b>$</b>`;
            break;
        case 5:
            document.getElementById('task_8_result').innerHTML = `<b>%</b>`;
            break;
        case 6:
            document.getElementById('task_8_result').innerHTML = `<b>^</b>`;
            break;
        case 7:
            document.getElementById('task_8_result').innerHTML = `<b>&</b>`;
            break;
        case 8:
            document.getElementById('task_8_result').innerHTML = `<b>*</b>`;
            break;
        case 9:
            document.getElementById('task_8_result').innerHTML = `<b>(</b>`;
            break;
        default:
            document.getElementById('task_8_result').innerHTML = `<b>Enter valid number</b>`;
            break;
    }
}