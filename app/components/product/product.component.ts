import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ActivatedRoute} from "@angular/router";
import {AngularFirestore} from "angularfire2/firestore";
import 'rxjs/add/operator/map';


@Component({
  selector: 'product-ang',
  templateUrl: 'product.component.html',
  styleUrls: ['../../../assets/scss/main.scss']
})

export class ProductComponent implements OnInit {

  private shoppingList;
  smartphone;
  private routParam;

  private smartphoneModel;      /// Current smartphone
  selectedPrice;
  selectedSize;

  mousoverUl: boolean;          /// Dropdown list - storage
  popupChangeRating: boolean;   /// ChangeRating - popup

  currentSlide: number;         /// Slider
  arrayOfSlides: any;

  ratingStars: any;             /// Rating Stars
  rating: number;
  phone: any;


  constructor(private db: AngularFirestore,
              shoppingListService: ShoppingCartService,
              private route: ActivatedRoute){

    this.shoppingList = shoppingListService;

    this.mousoverUl = false;

    this.currentSlide  = 0;
    this.arrayOfSlides = [0, 1, 2, 3];

    this.ratingStars = [];
    this.popupChangeRating = false;

    console.log('this.popupChangeRating-1: ', this.popupChangeRating);

  }

  addToCart(){
    this.smartphone.selectedPrice = this.selectedPrice;
    this.smartphone.selectedSize = this.selectedSize;

    this.shoppingList.addInShoppingList(this.smartphone);
    this.shoppingList.setCurrentCounter();
    this.shoppingList.setCurrentSum();
  }

  changeStorageSize(storageIndex){
    this.selectedSize = this.smartphone.storage[storageIndex].size;
    this.selectedPrice = this.smartphone.storage[storageIndex].price;
    this.mousoverUl = false;
  }

  showUlStorage() {
    this.mousoverUl = true;
  }
  hideUlStorage() {
    this.mousoverUl = false;
  }


//////////////
/// SLIDER ///
//////////////

  /// Side Controls ///

  toBack(firstIndex) {
    if (firstIndex) {
      this.currentSlide = this.smartphone.photoModelUrl.length - 1;
    } else {
      this.currentSlide--;
    }
  }

  toTop(lastIndex) {
    if (lastIndex) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
  }

  /// Img Controls ///

  changeSlide(oneSlide) {
    this.currentSlide = oneSlide;
  }

  /// Vertical Controls ///

  moveSlidesUp() {
    for(let i = 0; i < 4; i++) {
      if(this.arrayOfSlides[i] === (this.smartphone.photoModelUrl.length - 1)) {
        this.arrayOfSlides[i] = 0;
      } else {
        this.arrayOfSlides[i] ++;
      }
    }
  }

  moveSlidesDown() {
    for(let i = 0; i < 4; i++) {
      if(this.arrayOfSlides[i] === 0) {
        this.arrayOfSlides[i] = (this.smartphone.photoModelUrl.length - 1);
      } else {
        this.arrayOfSlides[i] --;
      }
    }
  }


  ///////////////////////////
  /// CHANGE RATING POPUP ///
  ///////////////////////////

  showChangeRating() {
    this.popupChangeRating = !this.popupChangeRating;
  }
  hideChangeRating() {
    this.popupChangeRating = true;
  }

  onChangeRating(smartphone, value) {
    this.smartphone.ratingNumber ++;

    this.smartphone.rating = (this.smartphone.rating * (this.smartphone.ratingNumber -1) + value)/this.smartphone.ratingNumber;

    this.phone = this.db.doc(this.routParam);
    this.phone.update(smartphone);
  }


  ////////////////////
  /// RATING STARS ///
  ////////////////////

  stars(){
    this.ratingStars = [];
    for (let j = 0; j < Math.floor(this.smartphone.rating); j++) {
      this.ratingStars.push('full');
    }
    for (let j = this.ratingStars.length; j < 5; j++) {
      if ((this.ratingStars.length - this.smartphone.rating) < -0.5) {
        this.ratingStars.push('half');
      } else {
        this.ratingStars.push('empty');
      }
    }
  }


  ngOnInit(){

    this.route.params
      .subscribe(params => {
        this.routParam = 'test-data/' + params['id'];

        this.smartphoneModel = this.db.doc(this.routParam).valueChanges();

        this.smartphoneModel.subscribe(data => {
          this.smartphone = data;
          this.selectedSize = this.smartphone.storage[3].size;
          this.selectedPrice = this.smartphone.storage[3].price;

          this.stars();
        });
      });
  }
}
