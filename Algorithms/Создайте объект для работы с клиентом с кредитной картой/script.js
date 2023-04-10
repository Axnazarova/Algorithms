const client = {
    fullName: 'Aliyev Samir Elman',
    creditLimit : 1000,
    balance: -400,
    precentOfMinPayment: 5,
}

// Добавьте метод получения текущего баланса getBalance.

client.getBalance = function (){

    if(this.balance > 0){
        return `Ваш баланс ${this.balance}`
    } else if (this.balance < 0){
        return `Ваша задолженность  ${this.balance}`
    }
    
}

console.log(client.getBalance())

// Добавьте метод суммы минимального платежа getMinPaymant.

client.getMinPaymant = function(){
    if(this.balance > 0){
        return `У вас нет задолженности`
    } else if (this.balance < 0){
        return `Ваш минимальный платёж  ${this.balance * 5/100}`
    }
}

console.log(client.getMinPaymant())

// Добавьте метод withdraw, списывающий средства со счёта.

client.withdraw = function (amount){
    if ((client.balance < 0) && (amount > (client.creditLimit - -client.balance)) ||  (client.balance > 0) && ((client.creditLimit + client.balance) < amount) ){
        return `доступных средств недостаточно`
    } else if ((client.balance > 0) && ((client.creditLimit + client.balance) > amount) ){
        this.balance = this.balance - amount
        return `После снятия баланс ${this.balance}`
    } else if ((client.balance < 0) && (amount <= (client.creditLimit - -client.balance))){
        this.balance = -this.balance - amount
        return `После снятия баланс ${this.balance}`
    }

}

console.log(client.withdraw(500))

// Добавьте метод пополнения баланса refill.

client.refill = function (amount){
    this.balance = this.balance + amount
    return this.balance

}

console.log(client.refill(500))

