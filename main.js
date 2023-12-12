var area = document.getElementById("area");
var kletka = document.getElementsByClassName("kletka");
var currentPlayer = document.getElementById('curPlyr');
var player = "x"
var winIndex = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9], 
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
] //записываем все выигрышные позиции
for(var i = 1; i<=9;i++){
    area.innerHTML += "<div class='kletka' pos=" + i + "></div>";
}
for(var i=0; i<kletka.length; i++){
    kletka[i].addEventListener('click', kletkaClick, false);
}
function kletkaClick(){
    var data=[];
    if(!this.innerHTML){ //проверяем занята ли ячейка
        this.innerHTML = player;
    }else{
        alert("Ячейка занята")
        return;
    }
    for(var i in kletka){
        if(kletka[i].innerHTML == player){
            data.push(parseInt(kletka[i].getAttribute('pos')));
        }
    }
    
    if (checkWin(data)){
        restart('Выиграл' +' '+player);
    }else{
        var draw = true;
        for(var i in kletka){
            if(kletka[i].innerHTML==''){ 
                draw=false;
            }
        }
        if (draw){
            restart('Ничья');
        }
    
    }
    player = player == "x" ? "o" : "x";//после каждого хода меняем игрока
    currentPlayer.innerHTML = player.toUpperCase();//показывает чей ход х или о
}
function checkWin(data){
    for(var i in winIndex){
        var win = true;
        for(var j in winIndex[i]){
           var id = winIndex[i][j];
           var index = data.indexOf(id);
           if(index == -1){
            win = false;
           }
        }
        if(win){ 
            return true;
        }
    }
    return false;
}
function restart(text) {
    
    alert(text);
    for(var i = 0; i < kletka.length; i++) {
        kletka[i].innerHTML = '';
    }
}