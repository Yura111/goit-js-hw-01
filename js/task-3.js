const ADMIN_PASSWORD = "abc";
let message;
let input = prompt("Добро пожаловать!");
if (input === null) {
  message = "Отменено пользователем";
} else if (input === ADMIN_PASSWORD) {
  message = "Добропожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
