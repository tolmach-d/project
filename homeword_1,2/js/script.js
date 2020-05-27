'use strict';

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '')
	}
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '')
	
		if ( (typeof(a)) === 'string' && (typeof(a) != null && (typeof(b) != null)&& a != "" && b != "" && a.length < 50)) {
			console.log("done");
			appData.expenses[a] = b;
		} else {
			console.log("result");
			i--;
		}
	}
}
chooseExpenses();

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert("Ежедневный будюжет составляет: " + appData.moneyPerDay + "руб");
}
detectDayBudget();

alert("Ежедневный бюджет: " + appData.moneyPerDay);

function detectLevel(){
	if (appData.moneyPerDay < 100) {
		console.log("Низкий уровень дохода")
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень дохода")
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень дохода")
	} else {
		console.log("произошла ошибка")
	}
}
detectLevel();

function checkSavings(){
	if (appData.savings == true) {
		let save = +prompt("какова сумма накоплений?"),
			prercent = +prompt("Под какой процент?");

		appData.monthIncome = save/100/12*prercent;
		alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
	}
}
checkSavings();

function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();