//функция для получения любого параметра из url
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
// получение прайса и айди машины из url
const carPrice = getUrlParameter('price');
const carId = getUrlParameter('id');
console.log('Car Price:', carPrice);
console.log('Car ID:', carId);

/*Значения из текстовых инпутов */
const totalCost = document.getElementById("total-cost"),
    InitialFee = document.getElementById("initial-fee"),
    CreditTerm = document.getElementById("credit-term");

/*Значения из range инпутов */
const InitialFeeRange = document.getElementById("initial-fee-range"),
    CreditTermRange = document.getElementById("credit-term-range");
/*Итоговые значения */
const AmountOfCredit = document.getElementById("amount-of-credit"),
    MonthlyPayment = document.getElementById("monthly-payment"),
    RecommendedIncome = document.getElementById("recommended-income");

/*Все range */
const inputsRange = document.querySelectorAll('.slider');
/*Все buttons с проц ставкой */
const BanksButtons = document.querySelectorAll('.bank');
/*Функция для сопоставления значений range input и текстовых input */
const assignValue = () => {
    InitialFee.value = InitialFeeRange.value;
    CreditTerm.value = CreditTermRange.value;
}

assignValue();

/*Массив с банками и их процентными ставками */
const Banks= [
    {
        name: 'alfa',
        precents: 8.7
    },
    {
        name: 'sberbank',
        precents: 8.4
    },
    {
        name: 'pochta',
        precents: 7.9
    },
    {
        name: 'tinkoff',
        precents: 9.2
    }
]
/*Задаем начальный процент, переменную хранящую выбранный процент */
let currentPercent = Banks[1].precents;
/* Выбор процента по клику на BankButtons*/
for(let bank of BanksButtons){
    bank.addEventListener('click', () => {
        for (let item of BanksButtons){
            item.classList.remove('active');
        }
        bank.classList.add('active');
        TakeActiveBank(bank);
    })
}
/*Функция для поимки активного банка и его процентной ставки */
const TakeActiveBank = currentActive => {
     const dataAttrValue = currentActive.dataset.name;
     const currentBank = Banks.find(bank => bank.name === dataAttrValue);
     currentPercent = currentBank.precents;
     calculation(carId, InitialFee.value, CreditTerm.value, currentPercent);
}
/*Связка ползунка и текстового инпута */
for (let input of inputsRange){
    input.addEventListener('input', () => {
        assignValue();
        calculation(carId, InitialFee.value, CreditTerm.value, currentPercent);
    })
}

/*Калькулятор */
const calculation = (carId, InitialFee = 10000, CreditTerm = 1, currentPercent = 8.7) => {
    /*ЕП - Ежемесяный платеж
    РК - Размер кредита
    ПС - прорцентная ставка
    КМ - количество месяцев
    формула:
    ЕП = (РК + ((РК\100) *ПС)\12 * КМ)\КМ
     */

    const formData = new FormData();
    formData.append('carId', carId);
    formData.append('initialPayment', InitialFee);
    formData.append('creditYears', CreditTerm);
    formData.append('creditPercent', currentPercent);  // Убедитесь, что переменная currentPercent определена

    fetch('PHP/runFunctionForLoanCalculation.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.result) {
            const results = data.result.split(', ');
            const loanAmount = results[0].split(': ')[1];
            const monthlyPayment = results[1].split(': ')[1];
            console.log('LoanAmount: ',loanAmount);
            console.log('MontlyPayment: ', monthlyPayment);

            // Обновляем HTML
            AmountOfCredit.innerHTML = `${loanAmount} P`;
            MonthlyPayment.innerHTML = `${monthlyPayment} P`;
            const recommendedIncome = Math.round(monthlyPayment) + (monthlyPayment * 0.35);
            RecommendedIncome.innerHTML = `${recommendedIncome} P`;
        } else {
            console.error('No result returned from the server');
        }})
    
    // let EP; /*Ежемесячный платеж */
    // let RK = totalCost - InitialFee; /*Размер крдита = сумма на машину - первоначальный взнос */
    // let PS = currentPercent; /*Процентная ставка */
    // let KL = CreditTerm; /*Кол-во лет */
    // let KM = 12*KL; /*Кол-во месяцев */

    // EP = (RK + ((RK/100) * PS)/12 * KM)/KM;
    // const EParrounded = Math.round(EP);
    
}
if(carPrice){
    totalCost.value = carPrice;
    calculation(carId, InitialFee.value, CreditTerm.value, currentPercent);
}