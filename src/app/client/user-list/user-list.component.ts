import { Component, OnInit } from '@angular/core';
import { userObj } from '../user-interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: userObj[];

  constructor(private router: Router) {
    this.userList = [];
  }

  ngOnInit(): void {
    debugger;
    const records = localStorage.getItem('userList');
    if (records != null) {
      this.userList = JSON.parse(records);
    }
  }

  // btnClick() {
  //   this.router.navigateByUrl('user-update')

  // };

  delete(id:any){
    debugger;
    const oldRecords=localStorage.getItem('userList');
    if(oldRecords != null)
    {
      const userList=JSON.parse(oldRecords);
      // remove original array  
      userList.splice(userList.findIndex((a:any)=>a.userId == id),1);
      localStorage.setItem('userList',JSON.stringify(userList));
    }

    const records = localStorage.getItem('userList');
    if (records != null) {
      this.userList = JSON.parse(records);
    }

  }



}
