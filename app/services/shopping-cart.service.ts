import {Injectable} from '@angular/core';

@Injectable()
export class ShoppingCartService {

  private currentSum: number;
  private shoppingList: any;
  private counter: number;

  constructor(){
    this.currentSum = 0;
    this.shoppingList = [];
    this.counter = 0;
  }

  getCurrentSum(){
    return this.currentSum;
  }
  setCurrentSum(){
    let sum = 0;
    for (let i = 0; i < this.shoppingList.length; i++) {
      sum = sum + this.shoppingList[i].selectedPrice;
    }
    this.currentSum = sum;
  }

  getShoppingList(){
    return this.shoppingList;
  }

  addInShoppingList(model: any){
    let a = JSON.stringify(model);
    let b = JSON.parse(a);
    this.shoppingList.push(b);
  }

  deleteFromShoppingList(index: number){
    this.currentSum = this.currentSum - this.shoppingList[index].selectedPrice;
    this.shoppingList.splice(index, 1);
    this.counter--;
  }

  setCurrentCounter(){
    this.counter++;
  }

  getCurrentCounter(){
    return this.counter;
  }
}
