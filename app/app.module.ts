import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import { SmartphonesComponent } from './components/smartphones/smartphones.component';
import {ProductComponent} from "./components/product/product.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {NavigationBlockComponent} from "./components/navigation-block/navigation-block.component";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";
import {SearchResultComponent} from "./components/search-results/search-result.component";
import {SmartphoneComponent} from "./components/smartphone/smartphone.component";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { DataService } from './services/data-service.service';
import {Routes, RouterModule} from "@angular/router";
import {ShoppingCartService} from "./services/shopping-cart.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


const appRoute: Routes=[
  {path: "", component: SmartphonesComponent, pathMatch: 'full'},
  {path: "shopping-cart", component: ShoppingCartComponent, pathMatch: 'full'},
  {path: "search/:search-value", component: SearchResultComponent, pathMatch: 'full'},
  {path: "product/:id", component: ProductComponent, pathMatch: 'full'},
  {path: "**", component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SmartphonesComponent,
    ShoppingCartComponent,
    FooterComponent,
    NavigationBlockComponent,
    SmartphoneComponent,
    ProductComponent,
    SearchResultComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(appRoute),
    RouterModule.forRoot(appRoute, { useHash: true }), // without 'HashLocationStrategy' router doesn't work on a server
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    DataService,
    SmartphoneComponent,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
