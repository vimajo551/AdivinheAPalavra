function login(){
    //variaveis pegando os nomes do input//
    name1=document.getElementById("idp1").value
    name2=document.getElementById("idp2").value
    //guardando os nomes no localstorage
    localStorage.setItem("pn1",name1)
    localStorage.setItem("pn2",name2)
    window.location="game_page.html"
}


