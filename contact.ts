import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 subject = '';
 body = '';
 to = 'macro_calculator@gmail.com';
  constructor(public navCtrl: NavController, public emailComposer: EmailComposer) {

  }
 send(){
   let email = {
     to: this.to,
     cc: [],
     bcc: [],
     attachment:[],
     subject: this.subject,
     body: this.body,
     isHtml: false,
     app: "Gmail"
   }
   this.emailComposer.open(email);
 }
 emailValidation(){
  var companyEmail:any=document.getElementById("company_email");
  var companyEmailVal:any = " ";
  if (companyEmail){
    companyEmailVal = companyEmail.value;
  }
 if(companyEmail !== "macro_calculator@gmail.com")
 
  alert("Company Email is 'macro_calculator@gmail.com'"); 
 }
 
 
}