import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    // Get the existing data


  }

  registrationForm = new FormGroup({
    email: new FormControl(""),
    pwd: new FormControl(""),
  });



  registerSubmit() {
    // console.log(this.registrationForm.value);
    //localStorage.setItem("formdata", JSON.stringify(this.registrationForm.value));
    var allEntries =JSON.parse(localStorage.getItem("allEntries")??"[]");
    allEntries.push(this.registrationForm.value);
    localStorage.setItem("allEntries", JSON.stringify(allEntries))
    // this.user=Object.assign(this.user,this.registrationForm.value);
    // this.setData();

  }
 

  // setData(){
  //   
  // }




}
