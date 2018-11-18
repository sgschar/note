import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: Array<any>;
  data: any;

  constructor(private userService:UserService){

  }
 
  ngOnInit() {
    // this.userService.getData().subscribe(data=>{
    //   // console.log(data)
    // })
    this.userService.getUsers().subscribe(data=>{
      console.log(data);
      console.log(1);

    })
  }

}
