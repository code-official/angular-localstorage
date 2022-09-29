import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formvalue: any;
  constructor(private router: Router) {
    // this.formvalue=localStorage.getItem('form-data')
  }

  ngOnInit(): void {
  }

  login() {
    var allEntries = JSON.parse(localStorage.getItem("allEntries") ?? "[]");
    var res = allEntries.find((c: any) => c.email == this.loginForm.controls.email1.value)
    if (res != undefined) {

      if (res.pwd == this.loginForm.controls.pwd1.value) {
        // window.open('https://www.google.com')
        this.router.navigateByUrl('user-dashboard')
        // alert(localStorage.getItem("email1"))
      }
      else {
        alert('[asswrde incorect')
      }
    }
    else {
      alert("no user foundf")
    }
  }


  loginForm = new FormGroup({
    email1: new FormControl(""),
    pwd1: new FormControl(""),
  });

}
