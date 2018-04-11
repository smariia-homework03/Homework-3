import {Component, OnInit, DoCheck} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {DataService} from "../../services/data-service.service";

@Component({
  selector: 'navigation-block',
  templateUrl: 'navigation-block.component.html',
  styleUrls: ['../../../assets/scss/main.scss']
})

export class NavigationBlockComponent implements OnInit, DoCheck {

  smartphones: any;
  mouseOnForm: boolean;
  mouseOnUlSearch: boolean;
  counterSearch: number;
  searchValue: string;
  counterForResults: number;
  private resultsForEachSmartphone;
  private dataFromService;

  constructor(private dataService: DataService){
    this.mouseOnForm = false;
    this.mouseOnUlSearch = false;
    this.counterSearch = -1;
    this.counterForResults = 0;
  }

  form = new FormGroup({
    searchSmartphone: new FormControl('', Validators.required)
  });

  get searchSmartphone() {
    return this.form.get('searchSmartphone');
  };


  /// Show/hide search results ///

  showUlSearch(){
    this.mouseOnForm = true;
    this.mouseOnUlSearch = true;
  }
  hideUlSearch(){
    this.mouseOnForm = false;
    this.counterSearch = -1;
    let elems = document.getElementsByClassName("ul-search__li--a");
    for(let i=0; i<elems.length; i++){
      elems[i].className = 'ul-search__li--a';
    }
  }
  hideUlDropdownSearch() {
    this.mouseOnUlSearch = false;
    this.counterSearch = -1;
    let elems = document.getElementsByClassName("ul-search__li--a");
    for(let i=0; i<elems.length; i++){
      elems[i].className = 'ul-search__li--a';
    }
  }
  hideBoth(){
    this.mouseOnUlSearch = false;
    this.mouseOnForm = false;
    this.searchValue = '';
    this.searchSmartphone.setValue(this.searchValue);
  }


  /// Key down/up/enter ///

  onKeyUp($event: any){

    if($event.keyCode === 40){
      let elem = document.getElementById('input-group--search-value');
      elem.style.display = 'block';

      let elems = document.querySelectorAll(".match-search-value a");
      for(let i=0; i<elems.length; i++){
        elems[i].className = 'ul-search__li--a';
      }

      if(this.counterSearch === -1){
        this.counterSearch = 0;
        elems[this.counterSearch].className = 'ul-search__li--a a-is-chosen';
        this.searchValue = elems[this.counterSearch].textContent;
      }else if(this.counterSearch === elems.length - 1){
        this.counterSearch = 0;
        elems[this.counterSearch].className = 'ul-search__li--a a-is-chosen';
        this.searchValue = elems[this.counterSearch].textContent;
      }else{
        this.counterSearch++;
        elems[this.counterSearch].className = 'ul-search__li--a a-is-chosen';
        this.searchValue = elems[this.counterSearch].textContent;
      }
    }
    if($event.keyCode === 38){
      let elem = document.getElementById('input-group--search-value');
      elem.style.display = 'block';

      let elems = document.querySelectorAll(".match-search-value a");
      for(let i=0; i<elems.length; i++){
        elems[i].className = 'ul-search__li--a';
      }

      if(this.counterSearch === -1){
        this.counterSearch = elems.length - 1;
        elems[this.counterSearch].className = 'ul-search__li--a a-is-chosen';
        this.searchValue = elems[this.counterSearch].textContent;
      }else if(this.counterSearch === 0){
        this.counterSearch = elems.length - 1;
        elems[this.counterSearch].className = 'ul-search__li--a a-is-chosen';
        this.searchValue = elems[this.counterSearch].textContent;
      }else{
        this.counterSearch--;
        elems[this.counterSearch].className = 'ul-search__li--a a-is-chosen';
        this.searchValue = elems[this.counterSearch].textContent;
      }
    }
    if($event.keyCode === 13){
      let elems = document.querySelectorAll(".match-search-value a");
      this.searchValue = elems[this.counterSearch].textContent;
      this.searchSmartphone.setValue(this.searchValue);

      let elem = document.getElementById('input-group--search-value');
      elem.style.display = 'none';

      let elemsA = document.querySelectorAll(".match-search-value a");
      for(let i=0; i<elemsA.length; i++){
        elemsA[i].className = 'ul-search__li--a';
      }

      this.counterSearch = -1;
    }
  }
  resetCounter(){
    this.counterSearch = -1;
  }

  setInputValue(){
    let elem = document.getElementById('input-group--search-value');
    elem.style.display = 'none';

    this.searchSmartphone.setValue(this.searchValue);

    let elems = document.getElementsByClassName("ul-search__li--a");
    for(let i=0; i<elems.length; i++){
      elems[i].className = 'ul-search__li--a';
    }
  }


  submenuToggle(i: number){
    let elemsHideDiv = document.querySelectorAll("div.navigation-submenu-container");
    let elemsHideUl = document.querySelectorAll("ul.navigation-submenu");
    for(let j=0; j < elemsHideDiv.length; j++){
      elemsHideDiv[j].className = 'navigation-submenu-container';
      elemsHideUl[j].className = 'navigation-submenu';
    }

    let elems = document.querySelectorAll("li.navigation-menu__li");
    let elemDiv = elems[i].querySelector('div.navigation-submenu-container');
    let elemUl = elems[i].querySelector('ul.navigation-submenu');

    if(elemDiv && elemUl){
      elemUl.className = 'navigation-submenu new-class-test';
      elemDiv.className = 'navigation-submenu-container new-class-test';
    }
  }
  hideSubmenu(){
    let elemsHideDiv = document.querySelectorAll("div.navigation-submenu-container");
    let elemsHideUl = document.querySelectorAll("ul.navigation-submenu");
    for(let j=0; j < elemsHideDiv.length; j++){
      elemsHideDiv[j].className = 'navigation-submenu-container';
      elemsHideUl[j].className = 'navigation-submenu';
    }
  }

  ngOnInit(){
    this.dataFromService = this.dataService.getData();

    this.dataFromService
      .subscribe(data => {
        this.smartphones = data;
      });
  }

  ngDoCheck(){

    /// Search for results ///
    let searchValueString = this.form.get('searchSmartphone').value.toLowerCase();

    if(searchValueString !== ""){
      let searchValueWords = searchValueString.split(' ');

      this.counterForResults = 0;
      this.resultsForEachSmartphone = [];
      for (let i=0; i<this.smartphones.length; i++) {

        let brandValueSymbols = this.smartphones[i].brand.toLowerCase() + " " + this.smartphones[i].name.toLowerCase() + " " + this.smartphones[i].color.toLowerCase();
        let brandValueWords = brandValueSymbols.split(' ');
        brandValueWords.push('');

        let wordResult = false;
        let arrayAllWordsResults = [];
        for (let k = 0; k < searchValueWords.length; k++) {
          let arrayOneWordResults = [];
          for (let j = 0; j < brandValueWords.length; j++) {
            if (searchValueWords[k] === brandValueWords[j]) {
              arrayOneWordResults.push(1);
            } else {
              arrayOneWordResults.push(0);
            }
          }

          let result = arrayOneWordResults.reduce(function (sum, current) {
            return sum + current
          });
          if (result === 1) {
            arrayAllWordsResults[k] = 1;
          } else {
            arrayAllWordsResults[k] = 0;
          }
        }

        if (arrayAllWordsResults.length > 1) {
          let result = arrayAllWordsResults.reduce(function (sum, current) {
            return sum + current
          });
          if (result === arrayAllWordsResults.length) {
            wordResult = true;
          } else {
            wordResult = false;
          }
        } else {
          if (arrayAllWordsResults[0] === 1) {
            wordResult = true;
          } else {
            wordResult = false;
          }
        }

        if((brandValueSymbols.search(searchValueString) != -1) || wordResult) {
          this.resultsForEachSmartphone.push(1);
          this.counterForResults++;
        }else{
          this.resultsForEachSmartphone.push(0);
        }
      }
      }else{
        this.counterForResults = 0;
      }
  }
}
