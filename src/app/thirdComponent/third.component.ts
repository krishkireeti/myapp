import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {formdata} from '../form'

@Component({
  selector: 'third-root',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {

  constructor(private rtr:Router){}
  model = new formdata("a@gmail.com", "");

  onSubmit(x,y){
    this.rtr.navigate(["fourth"])
    console.log("clicked");
    console.log("Email : " + x);
    console.log("Password : " + y );
  }

}
