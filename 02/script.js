

var arr = ['Антон', 'Филипп', 'Светлана', 'Петр', 'Ольга'];

for (var i = 0; i < arr.length; i++) {


var reg = prompt ("Введите Имя пользователя");


if (reg == arr [i]) { 
    alert (reg + ", Вы успешно вошли! ");
  
}

else {
    alert("Ошибка, введите Имя еще раз")
    
}
break;
}
