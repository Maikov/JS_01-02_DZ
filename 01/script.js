

function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}


var x = prompt("Введите число", '');
var n = prompt("Введите целую степень >1", '');

if (n <= 1) {
  alert('Степень  '+ n +' не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(x, n) );
}

console.log(pow(x, n));
