
import {Component, DoCheck} from '@angular/core';
import {ShoppingCartService} from "../../services/shopping-cart.service";

@Component({
  selector: 'header-ang',
  templateUrl: 'header.component.html',
  styleUrls: ['../../../assets/scss/main.scss']
})

export class HeaderComponent implements DoCheck {

  counterWord: string;
  sumInShoppingCart;
  listInShoppingCart;
  counterInShoppingCart: number;
  private sumService;

  constructor(sumInCart: ShoppingCartService){
    this.listInShoppingCart = sumInCart.getShoppingList();
    this.sumService = sumInCart;
    this.counterWord = 'items';
  }

  deleteFromCart(shoppingIndex) {
    this.sumService.deleteFromShoppingList(shoppingIndex);
  }

  ngDoCheck(){
    this.counterInShoppingCart = this.sumService.getCurrentCounter();
    this.sumInShoppingCart = this.sumService.getCurrentSum();
    if(this.counterInShoppingCart === 1) {
      this.counterWord = 'item'
    } else {
      this.counterWord = 'items'
    }
  }
}
