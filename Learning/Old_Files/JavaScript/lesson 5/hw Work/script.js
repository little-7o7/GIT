let name = "Alex"
let password = 7777
let money = 10000


let namePrompt = prompt('Как вас зовут?')
if (namePrompt === name) {
    let promptPassword = prompt('Номер счёта?')
    if (promptPassword == password) {
        let promptNal = prompt('Сколько обналичить?')
        if (promptNal <= money) {
            ('Обналичено = ' + promptNal)
            let left = money - promptNal
            alert('Осталось = ' + left)
        } else {
            alert('Недостаточно средств')
        }
    } else {
        alert('Пользователь не найден, досвидули');
    }
} else {
    alert('Пользователь не найден, досвидули');
}