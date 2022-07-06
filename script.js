
   //Função do relogio

   function relogio (){
     var clock = new Date();
     var hor = clock.getHours();
     var min = clock.getMinutes();
     var seg = clock.getSeconds();

     var dat = clock.getDate();
     var mes = clock.getMonth() + 1;
     var ano = clock .getFullYear();
 


     if(hor < 10){
        hor ="0" + hor;
     }if(min < 10){
        min ="0" + min;
     }if(seg < 10){
        seg ="0" + seg;
     }

     if(dat < 10){
        dat = "0" + dat;
     }if(mes < 10){
        mes = "0" + mes;
     }


    var horas = hor + ":" + min + ":" + seg;
    var hoje = dat + "/" + mes + "/" + ano;

     document.getElementById("dat").value=hoje;

     document.getElementById("rel").value=horas;
   }

   var timer = setInterval(relogio, 1000);

//==================================================================
   //Variaveis

    let btn = document.querySelector("#btn");
    let btn2 = document.querySelector("#btn2")  

    const main = document.querySelector("body"); 
    const excluir = document.getElementById("deleteMain"); 
    const acrecentar = document.querySelector("body");
    const acrecentarHora = document.getElementById("rel");
    const acrecentarData = document.getElementById("dat");


//================================================================    
   /*Funções de troca de imagens e fonte*/

    function acrecentarClass(){
      acrecentar.classList.toggle("main2");   // acrecenta a class main2 no body ao mesmo tempo que exclui a class main usando a funçao ##function excluirClass()##.
    }

    function excluirClass(){
      excluir.classList.toggle("main"); // exclui a class main para que a class main2 do body funcione.
     }
   //==============================================

   function acrecentarHora1(){
      acrecentarHora.classList.toggle("inputHora1");
   }

   function acrecentarData1(){
      acrecentarData.classList.toggle("inputData1")
   }
//=================================================================  
   //Eventos de click dos botões

   btn.addEventListener("click" ,  function(){
     
      acrecentarClass();
      excluirClass();        
   })

   btn2.addEventListener("click", function(){
      acrecentarHora1();
      acrecentarData1();
   })


   





