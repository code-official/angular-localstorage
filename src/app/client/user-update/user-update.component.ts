import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userObj } from '../user-interfaces/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  // userObj:userObj = new userObj; 
  userObj:userObj; 

  constructor(private route:ActivatedRoute) {
    this.userObj=new userObj();
    // edit new update data 
    this.route.queryParams.subscribe((res)=>{
        this.userObj.userId=res['id']

    });
   }

  ngOnInit(): void {
    const oldRecords=localStorage.getItem('userList');
    if(oldRecords != null)
    {
      const userList = JSON.parse(oldRecords);
      const currentUser =userList.find((m:any) => m.userId == this.userObj.userId);
      if(currentUser !== undefined)
      {
        this.userObj.userCity = currentUser.userCity;
        this.userObj.userState = currentUser.userState;
        this.userObj.userSalary = currentUser.userSalary;
        this.userObj.userMobile = currentUser.userMobile;
        this.userObj.userName = currentUser.userName;
        // this.userObj.user = currentUser.userCity;
      }
    }
  }

  // getNewUserId(){
  //   debugger;
  //   const oldRecords=localStorage.getItem('userList');
  //   if(oldRecords != null)
  //   {
  //     const userList=JSON.parse(oldRecords);
  //     return userList.length +1;
  //   }else{
  //     return 1;
  //   }
  // }

  updateUser(){
    debugger;
    // const latestId=this.getNewUserId();
    // this.userObj.userId = latestId;
    const oldRecords=localStorage.getItem('userList');
    if(oldRecords != null)
    {
      const userList=JSON.parse(oldRecords);
      // remove original array  
      userList.splice(userList.findIndex((a:any)=>a.userId == this.userObj.userId),1);
      userList.push(this.userObj);
      localStorage.setItem('userList',JSON.stringify(userList));
    }




  }
  // updateUser(){

  // }

}
