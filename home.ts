import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
}) 
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  Protein: number;
  ngOnInit(){
    this.Protein=1.9999;
  }
calculateMacros()  
  {
    var weight:any=document.getElementById("num1");
    var weightVal:any = " ";
    if (weight){
      weightVal = weight.value;
    }       
                          
    var result:any=(weightVal) * 1;
              
    if(!isNaN(result)){//If the weight entered by the user is an actual number
    //Assign the protein, fat, & carb calorie calculation's to a variable
      var proteinCal:any = result * 4 
      var fatInGrams:any = result * .4
      var newFatInGrams:any = fatInGrams.toFixed(0)
      var fatCal:any = result * .4 * 9
      var newFatCal:any = fatCal.toFixed(0)                
      var sumCal:any = proteinCal + fatCal
      var calDiff:any = 3000 - sumCal
      var newCalDiff:any = calDiff.toFixed(0)
      var carbNeeded:any = calDiff / 4
      var newCarbNeeded:any = carbNeeded.toFixed()
        //Display the results on the page
      document.getElementById("answer").innerHTML="Grams of protein needed:" + " " +  result +" "+ "g";             
      document.getElementById("answer2").innerHTML="Calories that you'll receive from protein:" + " " + proteinCal +" "+ "Cal";
      document.getElementById("answer3").innerHTML="Grams of fat needed:" + " " + newFatInGrams +" "+ "g";
      document.getElementById("answer4").innerHTML="Calories you'll receive from fat:" + " " + newFatCal +" "+ "Cal";
      document.getElementById("answer5").innerHTML="Calories left that you'll need to get from carbs:" + " " + newCalDiff +" "+ "Cal";
      document.getElementById("answer6").innerHTML="Carbs needed to get the rest of your required calories:" + " " + newCarbNeeded +" "+ "g";
                          
    }                            
  }                         
     
  clearResults(){
    document.getElementById("answer").innerHTML = "Protein Needed";             
    document.getElementById("answer2").innerHTML = "Calories From Protein";             
    document.getElementById("answer3").innerHTML = "Fat Needed";             
    document.getElementById("answer4").innerHTML = "Calories From Fat";             
    document.getElementById("answer5").innerHTML = "Remaining Carb Calories Needed";             
    document.getElementById("answer6").innerHTML = "Calories To Get From Carbs";
    document.getElementById("num1").value = " "
              
                 
  }  
}