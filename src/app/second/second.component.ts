import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  valueName: string = "Marta";
  valueLastN: string = "Vykhor";
  valueAge: number = 19;
  valueJob: string = "Office worker";
  valueCompany: string = "Energywest";
  
    isShow: boolean = false;
  showAdd: boolean = false;
  skills: any = ["Angular", "JavaScript", "HTML5", "CSS3", "Socket.io"];


  // isDisabled: boolean = false;
  newElement: string ;
 

  showDiv() {
    this.isShow = !this.isShow;
  }
  showDiv2() {
    this.showAdd = !this.showAdd;
  }
  addElement(){
    this.skills.push(this.newElement)
  }





  
}
