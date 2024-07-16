let name = 'Alex'
let money = 10000
let account = 7777

let your_name = prompt('Как вас зовут?').trim()

if (your_name === name) {
    let acc_num = parseFloat(prompt('Номер счета?'))
    if (acc_num === account) {
        let cash_out = prompt('Сколько обналичить?') 
        if (cash_out <= money) {
            alert('Все отлично')
            alert(`Вы сняли ${cash_out} и у вас осталось ${money - cash_out}`)  
        }
        else {
            alert('Недостаточно средств')
        }
    }
    else {
        alert('Пользователь не найден, досвидули')
    }
}
else {
    alert('Пользователь не найден, досвидули')
}