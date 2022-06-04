function calculate()
  
  {
    var height=    (document.getElementById("height").value)/100;
    var weight=document.getElementById("weight").value;
    var imc= weight/(height)**2;
    var text= ""
    
    if(imc < 18.5)
    {
      text= "Você está magro, vamos comer mais um pouco!"
    }
     else if(imc < 24.9)
    {
     text= "Seu IMC está normal, meus parabéns!" 
    }
     else if(imc < 29.9)
    {
      text= "Você está com sobrepeso, vamos fechar um pouco a boca!"
    }
     else if(imc < 39.9)
    {
      text= "Você está com obesidade, procure um especialista!"
    }
     else if(imc > 39.9)
    {
      text= "Você está com obesidade mórbita, procure um especialista!"
    }

    document.getElementById("text_area").innerText= text
  }
