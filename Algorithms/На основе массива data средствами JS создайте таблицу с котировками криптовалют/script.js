/**
 * Массив данных о котировках криптовалют
 * name - имя валюты,
 * ticker - сокращение,
 * value - текущее значение цены,
 * change - изменение за последние 24 часа.
 */
const data = [
    { "name": "Биткоин", "ticker": "BTC", "value": "9685", "change": "2.83%" },
    { "name": "Эфириум", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
    { "name": "Рипл", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
    { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
    { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
    { "name": "Лайткоин", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
    { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
    { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
    { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
    { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
    { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "6.12%" },
    { "name": "Эфириум Классик", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
    { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
    { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
    { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
];


let bodyEl = document.querySelector('body')
let table = document.createElement('table')
bodyEl.append(table)


let tr = document.createElement('tr')

let th1 = document.createElement('th')
let th2 = document.createElement('th')
let th3 = document.createElement('th')
let th4 = document.createElement('th')

th1.textContent = 'Название'
th2.textContent = 'Тикер'
th3.textContent = 'Цена'
th4.textContent = 'Изменение за 24 часа'

table.append(tr)

tr.append(th1)
tr.append(th2)
tr.append(th3)
tr.append(th4)


for(let i = 0; i < data.length; i++){


    let trEl = document.createElement('tr')
    table.append(trEl)

    let tdEl = document.createElement('td')
    let tdEl1 = document.createElement('td')
    let tdEl2 = document.createElement('td')
    let tdEl3 = document.createElement('td')

    tdEl.textContent = data[i].name
    tdEl1.textContent = data[i].ticker
    tdEl2.textContent = data[i].value
    tdEl3.textContent = data[i].change

    trEl.append(tdEl)
    trEl.append(tdEl1)
    trEl.append(tdEl2)
    trEl.append(tdEl3)

    if(data[i].change.slice(0,data[i].change.length -1) > 0){
        tdEl3.setAttribute('class','green')
    } else if(data[i].change.slice(0,data[i].change.length -1) < 0) {
        tdEl3.setAttribute('class','red')
    }


}

let trElements = document.querySelectorAll('tr')

for(let i = 1; i < trElements.length ; i+=2){
    trElements[i].setAttribute('class','grey')
}

