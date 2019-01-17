import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  visible = true;
  label = '';

  constructor() { }

  ngOnInit() {
  }

  changeText(boolText: boolean){
    this.label = boolText === true ? 'Add new post' : '';
  }
  hideBtn(){
    this.visible = false;
  }

  showBtn(){
    this.visible = true;
  }

}
