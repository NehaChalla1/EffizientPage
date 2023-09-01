import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormGroup,FormBuilder,Validator, Validators, FormControl } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '';
  constructor(private formBuilder : FormBuilder,private cd : ChangeDetectorRef,) {}
  visaForm : FormGroup = this.formBuilder.group({
    Email : '',
    Name : '',
    Age : '',
    education : '',
    Institute : '',
    Study : '',
    work : '',
    canada : '',
    country : '',
    Goal : '',
    Listening : '',
    Reading : '',
    Speaking : '',
    Writing : '',
    pay : '',
    PayGIC : '',
    firstYear : '',
    tuition : '',
  })
  
  submitted!: boolean;
  ngonInit()
  {

  }


  labelPosition: 'before' | 'after' = 'after';
  labelPosition1: 'before' | 'after' = 'after';
  
  

  loading = false;
  buttionText = "Submit";

  async send()
{
   console.log("check",this.visaForm.value);
   emailjs.init('JO_xptw1skv1VlxNz');
  let response = await emailjs.send("service_0481gjr","template_lc4ku61",{
    Email:this.visaForm.value.Email,
    Name: this.visaForm.value.Name,
    Age: this.visaForm.value.Age,
    education: this.visaForm.value.education,
    Institute: this.visaForm.value.Institute,
    Study: this.visaForm.value.study,
    work: this.visaForm.value.work,
    canada: this.visaForm.value.canada,
    country: this.visaForm.value.country,
    Goal: this.visaForm.value.Goal,
    Listening: this.visaForm.value.Listening,
    Reading: this.visaForm.value.Reading,
    Speaking: this.visaForm.value.Speaking,
    Writing: this.visaForm.value.Writing,
    pay: this.visaForm.value.pay,
    PayGIC: this.visaForm.value.PayGIC,
    firstYear: this.visaForm.value.firstYear,
    tuition: this.visaForm.value.tuition,
    });
   alert("Thanks for filling the form");
   this.visaForm.reset();
}

}



