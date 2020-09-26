// Завдання 3
// Напиши скрипт, який імітує авторизацію адміністратора в панелі управління.

// Є змінна message в яку буде записано повідомлення про результат. При завантаженні сторінки у
// відвідувача запитується пароль через prompt:

// Якщо натиснули Cancel, записати в message рядок 'Скасовано користувачем!'
// В іншому випадку, якщо введений пароль який збігається зі значенням константи ADMIN_PASSWORD,
//  записати в message рядок 'Ласкаво просимо!'
// В іншому випадку, тобто якщо жодна з попередніх умов не виконалася, записати в
// message рядок 'Доступ заборонений, невірний пароль!'
// Після всіх перевірок вивести в alert значення змінної message.

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

const ADMIN_PASSWORD = "jqueryismyjam"
let message

let userInputPassword = prompt("Enter Password")
// debugger
if (userInputPassword === ADMIN_PASSWORD) {
	message = `'Ласкаво просимо!'`
} else if (userInputPassword === null) {
	message = `'Скасовано користувачем!'`
} else {
	message = `'Доступ заборонений, невірний пароль!'`
}
console.log(message)

// Здано:
// const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// // Write code under this line
// if (userPassword === ADMIN_PASSWORD) {
// 	message = ACCESS_IS_ALLOWED
// } else if (userPassword === null) {
// 	message = CANCELED_BY_USER
// } else {
// 	message = ACCESS_DENIED
// }

// console.log(message);

// //если userPassword равно 'jqueryismyjam'
// // то значение message будет равно
// // 'Добро пожаловать!'

// //если userPassword равно  null
// // то значение message будет равно
// // 'Отменено пользователем!'

// //если userPassword равно '123'
// // то значение message будет равно
// // 'Доступ запрещен, неверный пароль!'
