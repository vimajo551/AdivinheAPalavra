var ndj1 =localStorage.getItem("pn1")
var ndj2 =localStorage.getItem("pn2")

var pdj1=0;
var pdj2=0;

document.getElementById("pln1").innerHTML=ndj1+":";
document.getElementById("pln2").innerHTML=ndj2+":";

document.getElementById("ppl1").innerHTML=pdj1;
document.getElementById("ppl2").innerHTML=pdj2;

document.getElementById("plper").innerHTML="turno de pergunta-"+ndj1;
document.getElementById("plres").innerHTML="turno de resposta-"+ndj2;

function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    charAt1=word.charAt(1);
    //palavra dividida por 2
    tdt=Math.floor(word.length/2);
    charAt2=word.charAt(tdt);
    lengthme1=word.length-1;
    charAt3=word.charAt(lengthme1);


    removecharAt1=word.replace(charAt1,"_");
    removecharAt2=removecharAt1.replace(charAt2,"_");
    removecharAt3=removecharAt2.replace(charAt3,"_");
    pp="<h4 id='mp'> P. "+removecharAt3+"</h4>";
    inputBox="<br><br>resposta:<input type='text' id='r'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row=pp+inputBox+checkButton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value=""
}

var turnoDePergunta="player1";
var turnoDeResposta="player2";

function check(){
    getAnswer=document.getElementById("r").value;
    answer=getAnswer.toLowerCase();
    if(answer==word){
        if(turnoDeResposta=="player1"){
            pdj1=pdj1+1
            document.getElementById("ppl1").innerHTML=pdj1;
        
        }
        else{
            pdj2=pdj2+1
            document.getElementById("ppl2").innerHTML=pdj2;
        }
    }

    if(turnoDePergunta=="player1"){
        turnoDePergunta="player2"
        document.getElementById("plper").innerHTML="turno de pergunta-"+ndj2;
    }
    else{
        turnoDePergunta="player1"
        document.getElementById("plper").innerHTML="turno de pergunta-"+ndj1;
    }

    if(turnoDeResposta=="player1"){
        turnoDeResposta="player2"
        document.getElementById("plres").innerHTML="turno de resposta-"+ndj2;
    }
    else{
        turnoDeResposta="player1"
        document.getElementById("plres").innerHTML="turno de resposta-"+ndj1;
    }
    document.getElementById("output").innerHTML="";
}