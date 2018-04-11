import {Component, OnInit, DoCheck} from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data-service.service";

@Component({
  selector: 'search-result',
  templateUrl: 'search-result.component.html',
  styleUrls: ['../../../assets/scss/main.scss']
})
export class SearchResultComponent implements OnInit, DoCheck {

  smartphones;
  private resultsForEachSmartphone;
  counterForResults: number;
  counterWord: string;
  private shoppingList;
  searchValue: string;
  ratingStars: any;
  private dataFromService;

  constructor(private dataService: DataService,
              shoppingListService: ShoppingCartService,
              private route: ActivatedRoute){
    this.shoppingList = shoppingListService;

    this.ratingStars = [];
    this.resultsForEachSmartphone = [];
    this.counterWord = 'items';
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


  backward(smatphoneIndex) {
    this.sliderUrls = this.smartphones[smatphoneIndex].photoUrl; /// get array of current slider's urls to use its length
    this.sliderImages = document.getElementsByClassName('number-' + smatphoneIndex); /// find all imgs with class of current slider

    if(this.imgIndex !== smatphoneIndex) { /// if this is the first click, do active the last img
      for(let i = 0; i < this.sliderUrls.length - 1; i++) {
        this.sliderImages[i].classList.remove('smartphone__slide--active');
      }
      this.currentIndex = this.sliderUrls.length - 1;
      this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
      this.imgIndex = smatphoneIndex;
    } else {                               /// if this isn't the first click, change currentIndex
      this.sliderImages[this.currentIndex].classList.remove('smartphone__slide--active');
      if(this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.sliderUrls.length - 1;
      }
      this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
      this.imgIndex = smatphoneIndex;
    }
  }

  forward(smatphoneIndex) {
    this.sliderUrls = this.smartphones[smatphoneIndex].photoUrl;
    this.sliderImages = document.getElementsByClassName('number-' + smatphoneIndex);

    if(this.imgIndex !== smatphoneIndex) { /// if this is the first click, do active the second img
      for(let i = this.sliderUrls.length - 1; i > 0; i--) {
        this.sliderImages[i].classList.remove('smartphone__slide--active');
      }
      this.currentIndex = 1;
      this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
      this.imgIndex = smatphoneIndex;
    } else {
      this.sliderImages[this.currentIndex].classList.remove('smartphone__slide--active');

      if(this.currentIndex < this.sliderUrls.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }

      this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
      this.imgIndex = smatphoneIndex;
    }
  }

  ////////////////////
  /// Rating Stars ///
  ////////////////////

  stars() {
      for (let i = 0; i < this.smartphones.length; i++) {
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
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        let search = params;
        this.searchValue = search['search-value'];

        this.dataFromService = this.dataService.getData();

        this.dataFromService
          .subscribe(data => {
            this.smartphones = data;

            /// Search for results ///
            if(this.searchValue !== "") {
              this.counterForResults = 0;
              this.resultsForEachSmartphone = [];

              for (let i = 0; i < this.smartphones.length; i++) {
                let searchValueString = this.searchValue.toLowerCase();
                let searchValueWords = searchValueString.split(' ');

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

                if ((brandValueSymbols.search(searchValueString) != -1) || wordResult) {
                  this.resultsForEachSmartphone.push(1);
                  this.counterForResults++;
                } else {
                  this.resultsForEachSmartphone.push(0);
                }
              }
            }else{
              this.counterForResults = 0;
            }

            this.ratingStars = [];
            this.stars();
          });
      });



  }

  ngDoCheck(){
    if(this.counterForResults === 1) {
      this.counterWord = 'item'
    } else {
      this.counterWord = 'items'
    }
  }
}
