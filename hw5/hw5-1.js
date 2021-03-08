'use srtict';
function chess(){
    var field = document.createElement('table');
    document.body.appendChild(field);
    field.classList.add('chess__field');
    for (var i = 1; i < 9; i++){
        var line = document.createElement('tr');
        line.classList.add('row');
        field.appendChild(line);
        for (var j = 1; j < 9; j++) {
            var td = document.createElement('td');
            line.appendChild(td);
            td.classList.add('item');
            if (i%2 === j%2) {
                td.classList.add("white");
            } else {
                td.classList.add("black");
            }
        }
    }
    var chessNum = document.createElement('div');
    document.body.appendChild(chessNum);
    chessNum.appendChild(field);
    chessNum.classList.add('chess__numbers');
    field.insertAdjacentHTML('beforebegin', '<div class="numbers"></div>'); 
    let panelNum = document.querySelector('.numbers');
        for (i = 1; i < 9; i++){
            var num = document.createElement('div');
            num.classList.add('numbers__item');
            panelNum.appendChild(num);
            num.textContent = i;
        }

      const letterBox = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ];
    chessNum.insertAdjacentHTML('beforebegin', '<div class="letters"></div>'); 
    var letters = document.querySelector('.letters');
    for (d = 0; d < 9; d++){
        let letter = document.createElement('div');
        letter.classList.add('litra');
        letters.appendChild(letter);
        letter.textContent = letterBox[d - 1];
    }
  let figures = [ '&#9814', '&#9816', '&#9815', '&#9812', '	&#9813', '&#9817', '&#9820', '&#9822', '&#9821', '&#9818', '&#9819', '&#9823'];
  let figureRow = document.querySelectorAll('.item'); 
  for (let space in figureRow){
    switch(Number(space)){
      case 0:
      case 7:
        td = figures[0];
        break;
      case 1:
      case 6:
        td = figures[1];
        break;
      case 2:
      case 5:
        td = figures[2];
        break;
      case 3:
        td = figures[3];
        break;
      case 4: 
        td = figures[4];
        break;
      case 56:
      case 63:
        td = figures[6];
        break;
      case 57:
      case 62:
        td = figures[7];
        break;
      case 58:
      case 61:
        td = figures[8];
        break;
      case 59:
        td = figures[9];
        break;
      case 60:
        td = figures[10];
        break;
    }
    if(space >= 0 && space < 8){
      if(space % 2 === 0){
       figureRow[space].insertAdjacentHTML('beforeend', '<div class="figure_White">' + td + "</div>"); 
      } 
      else {
        figureRow[space].insertAdjacentHTML('beforeend', '<div class="figure_Black">' + td + '</div>');
      }
    }
    if(space >= 8 && space < 16){
      if(space % 2 === 0){
        figureRow[space].insertAdjacentHTML('beforeend', '<div class="figure_White">' + figures[5] + '</div>');
    } else {
      figureRow[space].insertAdjacentHTML('beforeend','<div class="figure_Black">' + figures[5] + '</div>');
      }
    }
    if(space >= 56 && space < 64){
      if( space % 2 === 0){
        figureRow[space].insertAdjacentHTML('beforeend', '<div class="figure_White">' + td + "</div>")
      }else {
        figureRow[space].insertAdjacentHTML('beforeend', '<div class="figure_Black">' + td + '</div>');
      }
    }
    if(space >= 48 && space < 56){
      if(space % 2 === 0){
        figureRow[space].insertAdjacentHTML('beforeend', '<div class="figure_White">' + figures[11] + '</div>');
      } else {
      figureRow[space].insertAdjacentHTML('beforeend','<div class="figure_Black">' + figures[11] + '</div>');
    }
    }
  }
}
chess();