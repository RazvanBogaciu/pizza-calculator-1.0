//My name is Razvan Bogaciu
//Da Vinci College
//Opdracht Pizza Calculator


var smallPizza = prompt ("how many small pizza's would you like") //hier zijn de variaties van de verschillende grote pizza's

var mediumPizza = prompt ("how many medium pizza's would you like")

var largePizza = prompt ("how many large pizza's would you like")

var extraLargePizza = prompt ("how many extra large pizza's would you like")

var total = smallPizza*8.99+mediumPizza*9.99+largePizza*12.99+extraLargePizza*13.99

var error = true  //dit is voor een error antwoord te geven waneer je iets onder de nul typed



if (smallPizza <0) {
error = true 
document.write ("<br><br>")
}
else if (smallPizza >0); {
    document.write ( "<font size='6'> you ordered  " + smallPizza + " small pizza's"  +  " € " + smallPizza *8.99 ) //hier veranderde ik de letter groote en deed ik de variablele keer de prijs van de pizza

    error = false
    }


document.write ("<br>")

if (mediumPizza <0) {
 error = true
   }
   else (mediumPizza >0); {
   document.write ( "you ordered  " + mediumPizza + " medium pizza's" +" € " + mediumPizza*9.99 )

   error = false
   }
document.write ("<br>")
   if (largePizza <0) {
error = true
   }
   else (largePizza >0); {
   document.write ( "you ordered  " + largePizza + " large pizza's" +" € " + largePizza* 12.99 )

   error = false
   }
document.write ("<br>")
   if (extraLargePizza <0) {
error = true
   }
   else (extraLargePizza >0); {
   document.write ( "you ordered  " + extraLargePizza + " extra large pizza's" +" € " + extraLargePizza*13.99 ) 

   error = false
   }   
   document.write ("<br><br>")

   document.write ("___________________________________________________________________________________________________________________")

   document.write ("<br>")

   document.write ("___________________________________________________________________________________________________________________")

   document.write ("<br><br>")

   document.write ("<font size='7'> total €"  + total ) //hier wordt het totaale bedrag uitgerekend
   if 
   (error = true ) {
       alert("thank you for your order")
   }

