import { Component, OnInit } from '@angular/core';
import { userObj } from '../user-interfaces/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  // userObj:userObj = new userObj; 
  userObj:userObj; 

  constructor() {
    this.userObj=new userObj();
   }

  ngOnInit(): void {
  }

  getNewUserId(){
    debugger;
    const oldRecords=localStorage.getItem('userList');
    if(oldRecords != null)
    {
      const userList=JSON.parse(oldRecords);
      return userList.length +1;
    }else{
      return 1;
    }
  }

  saveUser(){
    debugger;
    const latestId=this.getNewUserId();
    this.userObj.userId = latestId;
    const oldRecords=localStorage.getItem('userList');
    if(oldRecords != null)
    {
      const userList=JSON.parse(oldRecords);
      userList.push(this.userObj);
      localStorage.setItem('userList',JSON.stringify(userList));
    }else{
      const userArr=[];
      userArr.push(this.userObj);
      localStorage.setItem('userList',JSON.stringify(userArr));


    }




  }

}
