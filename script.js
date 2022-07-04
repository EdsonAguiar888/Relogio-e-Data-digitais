


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

    //hor = 19;


 

 
     

     //if(hor >= 5 && hor < 18){
       //  troca.ClassList.toggle("main2");
    // }
     //else{
         
    // }

  



    let btn = document.querySelector("#btn");
    let btn2 = document.querySelector("#btn2")

    let main = document.querySelector("body");
   // let classe = doument.getElementById("classe");


 
    btn.addEventListener("click", function(){
       
        main.className = ("main2");
        //classe.classList.remove("main");
        
        
        
    })

    btn2.addEventListener("click", function(){
        main.className = ("main");
        
        
    } )

   // btn2.addEventListener("click", function(){
   //     classe.classList.remove("main");
   // } )




