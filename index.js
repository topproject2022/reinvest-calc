const form = document.getElementById('main_form');
const formCount = document.getElementById('count');
const level = document.getElementById('level');
const countDay = document.getElementById('count-day').value;
let depcount = 0;
let depositIndex = '';
let depositLevel = '';
let dayRes = 0;
let mesRes = 0;
let result = 0;
let depNum = 2;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    depcount = formCount.value;
    checker(formCount);
});
form.addEventListener('change', (e) => {
    depcount = formCount.value;
})


formCount.addEventListener('input', 
    function(e){
      this.value = this.value.replace(/[^\d.]/g, '');
    }
)


function checker(count) {
    if (count.value < 50) count.value = 50;
    else if (count.value >= 50 && count.value <= 450) {
        depositIndex = 1;
    } else if (count.value >= 500 && count.value <= 3950) {
        depositIndex = 2;
    } else if (count.value >= 4000 && count.value <= 9950) {
        depositIndex = 3;
    } else if (count.value >= 10000 && count.value <= 29950) {
        depositIndex = 4;
    } else if (count.value >= 30000 && count.value <= 49950) {
        depositIndex = 5;
    } else if (count.value >= 50000) {
        depositIndex = 6;
    }
    depositLevel = level.value;
    calc(+count.value, +depositIndex, +depositLevel);
}


function calc(invest, count, lev) {
    if (lev === 2) {
        return secondLevel(invest, count, lev);
    }
}

function secondLevel(invest, depIndex, level) {
    switch (depIndex) {
        case 1:
            calcProfit(invest, 1.0, 285, level);
            break;
        case 2:
            calcProfit(invest, 1.2, 285, level);
            break;
        case 3:
            calcProfit(invest, 1.4, 285, level);
            break;
        case 4:
            calcProfit(invest, 1.6, 285, level);
            break;
        case 5:
            calcProfit(invest, 1.8, 285, level);
            break;
        case 6:
            calcProfit(invest, 2.0, 285, level);
            break;
        default:
            break;
    }
}

function calcProfit(invest, percent, days, lv) {
    day = document.getElementById('count-day').value;
    let deposito = +invest;
    if (+lv === 2) {
        for (let i = 0; i < +day; i++) {
            switch (depositIndex) {
                case 1:
                    formCount.max = '450';
                    break
                case 2:
                    formCount.max = '3950';
                    break;
                case 3:
                    formCount.max = '9950';
                    break;
                case 4:
                    formCount.max = '29950';
                    break;
                case 5:
                    formCount.max = '50000';
                    break;
                case 6:
                    formCount.max = '1000000';
                    break;
                default:
                    break;
            }
            dayRes = (deposito * ((percent * 1) / 100)) / 2;
            deposito = (deposito + dayRes);
        }
        formCount.value = deposito.toFixed(2);
    }
}
