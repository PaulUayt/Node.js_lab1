//FIRST
function inputNum() {
  document.getElementById('result').innerHTML = ' ';
  var fib1 = 1, fib2 = 1;
  var sum = 0;
  var num = Number(document.getElementById('number').value);

  if(document.getElementById('number').value <= 0 || !(Number.isInteger(num))){
    document.getElementById('result').innerHTML = 'INCORECT VALUE (число має бути цілим та більше 0)';
  }
  else {
    for (var i = 0; i < document.getElementById('number').value; i++ ){
      if(i == 0) {document.getElementById('result').innerHTML += ' ' + 0 + ';';}
      if(i == 1) {document.getElementById('result').innerHTML += ' ' + 1 + ';';}
      if(i == 2) {document.getElementById('result').innerHTML += ' ' + 1 + ';';}
      if(i > 2) {
        sum = fib1 + fib2;
        document.getElementById('result').innerHTML += ' ' + sum + ';';
        fib1 = fib2;
        fib2 = sum;
      }
    }
  }
}
//SECOND
function takeFloor() {
  document.getElementById('result1').innerHTML = ' ';
  var num = Number(document.getElementById('number1').value);
  var floor = 0;

  if(document.getElementById('number1').value <= 0 || !(Number.isInteger(num))){
    document.getElementById('result1').innerHTML = '<i class=\"numFormat\"> INCORECT VALUE (число має бути цілим та більше 0) </i>';
  } else {
    floor = Math.trunc(num/3); // 1
    if(num % 3 > 0) floor++;
    if(floor % 2 == 0) {
      floor--;
      document.getElementById('result1').innerHTML += `Ви знаходитесь на <i class=\"numFormat\">${floor} </i> поверсі, вам необхідно піднятись на 1 поверх вище та шукати квартиру <i class=\"numFormat\">№${num}</i>.`;
    } else {document.getElementById('result1').innerHTML += `Ви знаходитесь на <i class=\"numFormat\">${floor} </i> поверсі, вам необхідно шукати квартиру <i class=\"numFormat\">№${num}</i>.`;}
  }
}
//third
function takeMatrix() {
  document.getElementById('result2').innerHTML = ' ';
  var arr = [];

  for (var i = 0; i < Number(document.getElementById('number3').value); i++) {
    arr[i] = [];
    for (var j = 0; j < Number(document.getElementById('number2').value); j++) {
      arr[i][j] = Math.trunc(Math.random() * (1999) - 999);
      document.getElementById('result2').innerHTML += arr[i][j] + "  ";
      if(arr[i][j] < 0) document.getElementById('info5').innerHTML += ` <i class="array">${arr[i][j]};</i> `;
      else document.getElementById('info4').innerHTML += ` <i class="array">${arr[i][j]};</i> `;
    }
    document.getElementById('result2').innerHTML += "<br><br>";
  }
}
//FOUR
function takeRozklad() {
  document.getElementById('result3').innerHTML = ' ';

  if(Number.isInteger(Number(document.getElementById('text1').value)) || Number.isInteger(Number(document.getElementById('text2').value))){
    document.getElementById('result3').innerHTML = '<span class="numFormat">INCORECT VALUE</span>';
  }
  else {
    function Lesson(name, group, day, room, time) {
      this.name = name;
      this.group = group;
      this.day = day;
      this.room = room;
      this.time = time;
    }
    let rozklad = [];
    rozklad[0] = [];
    if(document.getElementById('text1').value == "Понеділок") {
      rozklad[0][0] = new Lesson("Комп'ютерна електроніка", ["ІК-91", "ІК-92", "ІК-93"], "Понеділок", "№418", "1 пара(8:30)");
      rozklad[0][1] = new Lesson("Технології інтернету речей", ["ІК-91", "ІК-92", "ІК-93"], "Понеділок", "№419", "2 пара(10:25)");
      rozklad[0][2] = new Lesson("Екологія", ["ІК-91"], "Понеділок", "№302", "4 пара(14:15)");
    }
    if(document.getElementById('text1').value == "Вівторок") {
      rozklad[0][0] = new Lesson("Технології речей", ["ІК-93"], "Вівторок", "№415", "1 пара(8:30)");
      rozklad[0][1] = new Lesson("РТС", ["ІК-92"], "Вівторок", "№407", "2 пара(10:25)");
      rozklad[0][2] = new Lesson("Архітектра комп'ютера", ["ІК-91", "ІК-92", "ІК-93"], "Вівторок", "№419", "3 пара(12:20)");
    }
    if(document.getElementById('text1').value == "Середа") {
      rozklad[0][0] = new Lesson("ТІМС", ["ІК-91", "ІК-92", "ІК-93"], "Середа", "№303", "2 пара(10:25)");
      rozklad[0][1] = new Lesson("Іноземна мова", ["ІК-91"], "Середа", "№411", "3 пара(12:20)");
      rozklad[0][2] = new Lesson("РТС", ["ІК-93"], "Середа", "№407", "4 пара(14:15)");
    }
    if(document.getElementById('text1').value == "Четвер") {
      rozklad[0][0] = new Lesson("Комп'ютерна електроніка", ["ІК-92"], "Четвер", "№220", "1 пара(8:30)");
      rozklad[0][1] = new Lesson("Програмування Node.js", ["ІК-91", "ІК-92", "ІК-93"], "Четвер", "№320", "2 пара(10:25)");
    }
    if((document.getElementById('text1').value == "П'ятниця") || (document.getElementById('text1').value == "Субота") || (document.getElementById('text1').value == "Неділя")) {
      document.getElementById('result3').innerHTML = 'Пар немає. Можете відпочивати <big>☺</big>';
    }

    for (var i = 0; i < rozklad[0].length; i++) {
      for (var j = 0; j < rozklad[0][i].group.length; j++) {
        if(rozklad[0][i].group[j] == document.getElementById('text2').value) {
          console.log(rozklad[0][i]);
          document.getElementById('result3').innerHTML += `<span class="numFormat"> ${rozklad[0][i].time}:</span> ${rozklad[0][i].name}, кабінет <span class="num_final">${rozklad[0][i].room}</span>.<br>`;
        }
      }

    }
  }


}
//FIVE
function funCalculate(el) {
  document.getElementById('result4').innerHTML = ' ';
  var sumb = '';
  var res = 0;
  if(el == 1) {funAdd(); sumb = '+';}
  if(el == 2) {funSub(); sumb = '-';}
  if(el == 3) {funDiv(); sumb = '/';}
  if(el == 4) {funMult(); sumb = '*';}
  function funAdd(){res = Number(document.getElementById('number4').value) + Number(document.getElementById('number5').value);}
  function funSub(){res = Number(document.getElementById('number4').value) - Number(document.getElementById('number5').value);}
  function funDiv(){res = Number(document.getElementById('number4').value) / Number(document.getElementById('number5').value);}
  function funMult(){res = Number(document.getElementById('number4').value) * Number(document.getElementById('number5').value);}
  document.getElementById('result4').innerHTML = `A${sumb}B = ${Number(document.getElementById('number4').value)}${sumb}${Number(document.getElementById('number5').value)} = ${res} . ` ;
}
//SIX
var table = [];
function addTovar() {
  table.push(new Tovar(document.getElementById('text3').value, document.getElementById('text4').value, document.getElementById('text5').value));
  function Tovar(name, price, number) {
    this.name = name;
    this.price = price;
    this.number = number;
  }
  return table;
}
function takeTable() {
  document.getElementById('table').innerHTML = "<table class=\"cl_table\" border=\"2\"><thead class=\"result1p\" id=\"thead\"></thead><tbody class=\"result1p\" id=\"tbody\"></tbody><tfoot class=\"result1p\" id=\"tfoot\"></tfoot></table>";
  document.getElementById('thead').innerHTML = "<tr><th>Назва товару</th> <th>Ціна(за од. товару)</th> <th>Кількість</th> <th>Ціна за весь товар</th></tr>";
  document.getElementById('tbody').innerHTML = '';
  let sum = 0;
  for (var i = 0; i < table.length; i++) {
    document.getElementById('tbody').innerHTML += `<tr><td>${table[i].name}</td> <td>${table[i].price}</td> <td>${table[i].number}</td> <td>${(table[i].price) * (table[i].number)}</td></tr>`;
    sum += ((Number(table[i].price)) * (Number(table[i].number)));
  }
  document.getElementById('tfoot').innerHTML = `<tr><th>Загальна сума цін всіх товарів</th> <th id="lastrow" colspan="3">${sum}</th> </tr>`;
}
//SEVEN
function changeMatrix(func) {
  document.getElementById('result_fin3').innerHTML = ' ';
  var arr = [];
  var brr = [];
  var id = "";
  if(Number(document.getElementById('number_f1').value) <= 0 || !(Number.isInteger(Number(document.getElementById('number_f1').value)))) {
    document.getElementById('result_fin1').innerHTML = '<i class=\"numFormat\"> INCORECT VALUE (число має бути цілим та більше 0) </i>';
  } else {

    if (func == 1) {
      document.getElementById('result_fin2').innerHTML = ' ';
      for (var i = 0; i < Number(document.getElementById('number_f1').value); i++) {
        arr[i] = [];
        for (var j = 0; j < Number(document.getElementById('number_f1').value); j++) {
          id = `el${i}${j}`;
          arr[i][j] = Number(document.getElementById(id).value);
        }
      }

    }
    if (func == 2) {
      document.getElementById('result_fin1').innerHTML = ' ';
      document.getElementById('result_fin2').innerHTML = ' ';
      for (var i = 0; i < Number(document.getElementById('number_f1').value); i++) {
        arr[i] = [];
        for (var j = 0; j < Number(document.getElementById('number_f1').value); j++) {
          arr[i][j] = Math.trunc(Math.random() * (198) - 99) ;
          document.getElementById('result_fin1').innerHTML += `<div class="element">${arr[i][j]}</div>` + "   ";
        }
        document.getElementById('result_fin1').innerHTML += "<br><br>";
      }
    }
    for (var i = 0; i < Number(document.getElementById('number_f1').value); i++) {
      brr[i] = [];
      for (var j = 0; j < Number(document.getElementById('number_f1').value); j++) {
        brr[i][j] = arr[j][i];
        document.getElementById('result_fin2').innerHTML += `<div class="element">${brr[i][j]}</div>` + "   ";
      }
      document.getElementById('result_fin2').innerHTML += "<br><br>";
    }
    MatrixRank(arr);
  }
}
function doMatrix() {
  document.getElementById('result_fin1').innerHTML = ' ';
  for (var i = 0; i < Number(document.getElementById('number_f1').value); i++) {
    for (var j = 0; j < Number(document.getElementById('number_f1').value); j++) {
      document.getElementById('result_fin1').innerHTML += `<input  class="el_matrix" type="number" id="el${i}${j}">`+ "   ";
    }
    document.getElementById('result_fin1').innerHTML += "<br><br>";
  }
  document.getElementById('result_fin1').innerHTML += `<button type="button" name="button_f" onclick="changeMatrix(1)" >Транспонувати матрицю</button>`;
}
function Determinant(A) { // Используется алгоритм Барейса, сложность O(n^3)
    var N = A.length, B = [], denom = 1, exchanges = 0;
    for (var i = 0; i < N; ++i)
     { B[ i ] = [];
       for (var j = 0; j < N; ++j) B[ i ][j] = A[ i ][j];
     }
    for (var i = 0; i < N-1; ++i)
     { var maxN = i, maxValue = Math.abs(B[ i ][ i ]);
       for (var j = i+1; j < N; ++j)
        { var value = Math.abs(B[j][ i ]);
          if (value > maxValue){ maxN = j; maxValue = value; }
        }
       if (maxN > i)
        { var temp = B[ i ]; B[ i ] = B[maxN]; B[maxN] = temp;
          ++exchanges;
        }
       else { if (maxValue == 0) return maxValue; }
       var value1 = B[ i ][ i ];
       for (var j = i+1; j < N; ++j)
        { var value2 = B[j][ i ];
          B[j][ i ] = 0;
          for (var k = i+1; k < N; ++k) B[j][k] = (B[j][k]*value1-B[ i ][k]*value2)/denom;
        }
       denom = value1;
     }
    if (exchanges%2) return -B[N-1][N-1];
    else return B[N-1][N-1];
}
function MatrixRank(A){
    var m = A.length, n = A[0].length, k = (m < n ? m : n), r = 1, rank = 0;
    while (r <= k)
     { var B = [];
       for (var i = 0; i < r; i++) B[ i ] = [];
       for (var a = 0; a < m-r+1; a++)
        { for (var b = 0; b < n-r+1; b++)
           { for (var c = 0; c < r; c++)
              { for (var d = 0; d < r; d++) B[c][d] = A[a+c][b+d]; }
             if (Determinant(B) != 0) rank = r;
           }       // Функцию Determinant см. выше
        }
       r++;
     }
    document.getElementById('result_fin3').innerHTML += `<i class="info">Ранг матриці(1): </i>` + `<i class="num_final">${rank}</i>`;
    if (rank == m) document.getElementById('result_fin3').innerHTML += `, тоді матриця є невироджена, оскільки <i class="num_final">r = N</i>.`;
    else document.getElementById('result_fin3').innerHTML += `, тоді матриця є вироджена, оскільки <i class="num_final">r < N</i>`;
    return rank;
}
