

var arr = [];

for (var i = 0; i < 5; i++) {

	arr[i] = prompt ("Введите имя");
}

console.log(arr);

var reg = prompt ("Введите Имя пользователя");


for (var i = 0; i < 5; i++) {
if (reg == arr [i]) {
    alert (reg + ", Вы успешно вошли! ");
  break;
}
}

if ( i>=5 ) {
    alert("Ошибка, введите Имя еще раз")
    
}

