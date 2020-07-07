// let message;
// do {
//     message = prompt ('ADMIN_PASSWORD')  
//     // console.log('Добро пожаловать !')
// if(message === null) {
// console.log('Отменино пользователем !')
// break;
// }
// message = Number(message)}
// while(message !== 5)
// console.log('Добро пожаловать !')
const ADMIN_PASSWORD = 'abc';
let message;
let input = prompt('Добро пожаловать!');
if (input===null){
    message = 'Отменено пользователем';
    } else if (input === ADMIN_PASSWORD){
    message = 'Добропожаловать!';
    } else {
        message = 'Доступ запрещен, неверный пароль!';
    }
    alert(message);


