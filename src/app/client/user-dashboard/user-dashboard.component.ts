import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
allData:any;
  constructor() { 
    this.allData=localStorage.getItem("allEntries")
  }

  ngOnInit(): void {
  }

  welcome(){
    // var allEntries = JSON.parse(localStorage.getItem("allEntries") ?? "[]");
    // localStorage.getItem('allEntries')
  }

  

}
