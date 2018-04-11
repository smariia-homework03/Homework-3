import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {DataService} from "../../services/data-service.service";

@Component({
  selector: 'smartphone-ang',
  templateUrl: 'smartphone.component.html',
  styleUrls: ['../../../assets/scss/main.scss']
})

export class SmartphoneComponent implements OnInit {

  smartphones;
  private dataFromService;
  private shoppingList;
  ratingStars: any;

  constructor(private dataService: DataService, shoppingListService: ShoppingCartService){

    this.shoppingList = shoppingListService;

    this.ratingStars = [];
  }


  addToCart(smatphoneIndex){
    this.smartphones[smatphoneIndex].selectedPrice = this.smartphones[smatphoneIndex].storage[3].price;
    this.smartphones[smatphoneIndex].selectedSize = this.smartphones[smatphoneIndex].storage[3].size;
    this.shoppingList.addInShoppingList(this.smartphones[smatphoneIndex]);
    this.shoppingList.setCurrentCounter();
    this.shoppingList.setCurrentSum(this.smartphones[smatphoneIndex].selectedPrice);
  }


  //////////////
  /// SLIDER ///
  //////////////

  sliderUrls;
  currentIndex = 0;
  sliderImages;
  imgIndex;

  backward(smartphone) {
    this.sliderUrls = smartphone.photoUrl; /// get array of current slider's urls to use its length
    this.sliderImages = document.getElementsByClassName('number-' + smartphone.code); /// find all imgs with class of current slider

    if(this.imgIndex !== smartphone.code) { /// if this is the first click, do active the last img
      for(let i = 0; i < this.sliderUrls.length - 1; i++) {
        this.sliderImages[i].classList.remove('smartphone__slide--active');
      }
      this.currentIndex = this.sliderUrls.length - 1;
      this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
      this.imgIndex = smartphone.code;
    } else {                               /// if this isn't the first click, change currentIndex
      this.sliderImages[this.currentIndex].classList.remove('smartphone__slide--active');
      if(this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.sliderUrls.length - 1;
      }
      this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
      this.imgIndex = smartphone.code;
    }
  }

  forward(smartphone) {
    this.sliderUrls = smartphone.photoUrl;
    this.sliderImages = document.getElementsByClassName('number-' + smartphone.code);

    if(this.imgIndex !== smartphone.code) { /// if this is the first click, do active the second img
      for(let i = this.sliderUrls.length - 1; i > 0; i--) {
        this.sliderImages[i].classList.remove('smartphone__slide--active');
      }
      this.currentIndex = 1;
      this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
      this.imgIndex = smartphone.code;
    } else {
      this.sliderImages[this.currentIndex].classList.remove('smartphone__slide--active');

      if(this.currentIndex < this.sliderUrls.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }

      this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
      this.imgIndex = smartphone.code;
    }
  }


  ngOnInit() {
    this.dataFromService = this.dataService.getData();

        this.dataFromService
          .subscribe(data => {
            this.smartphones = data;

            /// Rating stars ///
            this.ratingStars = [];
            for (let i = 0; i< this.smartphones.length; i++) {
              this.ratingStars.push([]);

              for (let j = 0; j < Math.floor(this.smartphones[i].rating); j++) {
                this.ratingStars[i].push('full');
              }
              for (let j = this.ratingStars[i].length; j < 5; j++) {
                if ((this.ratingStars[i].length - this.smartphones[i].rating) < -0.5) {
                  this.ratingStars[i].push('half');
                } else {
                  this.ratingStars[i].push('empty');
                }
              }
            }
      });

  }

}
