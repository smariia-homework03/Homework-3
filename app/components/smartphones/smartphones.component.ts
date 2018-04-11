import {Component, DoCheck, OnInit} from '@angular/core';
import {DataService} from "../../services/data-service.service";

@Component({
  selector: 'smartphones-ang',
  templateUrl: 'smartphones.component.html',
  styleUrls: ['../../../assets/scss/main.scss']
})

export class SmartphonesComponent implements OnInit, DoCheck {

  checkbox: any;
  smartphones: any;
  foundItems: number;
  private dataFromService;

  constructor(private dataService: DataService){
  }


  showCheckboxes() {
    this.checkbox.style.left = "0";
  }
  hideCheckboxes() {
    this.checkbox.style.left = "-100vw";
  }
  onResize() {
    if(screen.width > 575) {
      this.checkbox.style.left = "0";
    } else {
      if(this.checkbox.style.left === "0"){
        this.checkbox.style.left = "0";
      } else {
        this.checkbox.style.left = "-110vw";
      }
    }
  }

  addClassForSortingA(){
    let elem = document.querySelector('a.mobile-blocks__sorting__span__a:focus');
    if(elem){
      let elems = document.querySelectorAll('a.mobile-blocks__sorting__span__a');
      for(let i=0; i < elems.length; i++){
        elems[i].className = 'mobile-blocks__sorting__span__a';
      }
      elem.className = 'mobile-blocks__sorting__span__a active-for-sorting';
    }
  }

  ngOnInit(){
    this.dataFromService = this.dataService.getData();
    this.dataFromService
      .subscribe(data => {
        this.foundItems = data.length;
      });

    this.checkbox = document.getElementById('sidebar-checkboxes');
  }

  ngDoCheck(){
    this.addClassForSortingA();
  }
}
