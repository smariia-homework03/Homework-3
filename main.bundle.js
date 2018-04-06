webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header-ang></header-ang>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<footer-ang></footer-ang>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_smartphones_smartphones_component__ = __webpack_require__("./src/app/components/smartphones/smartphones.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_product_product_component__ = __webpack_require__("./src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_not_found_not_found_component__ = __webpack_require__("./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navigation_block_navigation_block_component__ = __webpack_require__("./src/app/components/navigation-block/navigation-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_shopping_cart_shopping_cart_component__ = __webpack_require__("./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_search_results_search_result_component__ = __webpack_require__("./src/app/components/search-results/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_smartphone_smartphone_component__ = __webpack_require__("./src/app/components/smartphone/smartphone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_data_service_service__ = __webpack_require__("./src/app/services/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoute = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_2__components_smartphones_smartphones_component__["a" /* SmartphonesComponent */], pathMatch: 'full' },
    { path: "shopping-cart", component: __WEBPACK_IMPORTED_MODULE_6__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */], pathMatch: 'full' },
    { path: "search/:search-value", component: __WEBPACK_IMPORTED_MODULE_7__components_search_results_search_result_component__["a" /* SearchResultComponent */], pathMatch: 'full' },
    { path: "product/:id", component: __WEBPACK_IMPORTED_MODULE_3__components_product_product_component__["a" /* ProductComponent */], pathMatch: 'full' },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_4__components_not_found_not_found_component__["a" /* NotFoundComponent */], pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_0__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_smartphones_smartphones_component__["a" /* SmartphonesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_shopping_cart_shopping_cart_component__["a" /* ShoppingCartComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navigation_block_navigation_block_component__["a" /* NavigationBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_smartphone_smartphone_component__["a" /* SmartphoneComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_search_results_search_result_component__["a" /* SearchResultComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_not_found_not_found_component__["a" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_forms__["d" /* ReactiveFormsModule */],
                // RouterModule.forRoot(appRoute),
                __WEBPACK_IMPORTED_MODULE_16__angular_router__["b" /* RouterModule */].forRoot(appRoute, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__["b" /* AngularFirestoreModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__services_data_service_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_8__components_smartphone_smartphone_component__["a" /* SmartphoneComponent */],
                __WEBPACK_IMPORTED_MODULE_17__services_shopping_cart_service__["a" /* ShoppingCartService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"project-footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-start project-footer__row\">\r\n      <div class=\"col-xl-3 col-md-3 offset-md-0 col-sm-4 offset-sm-0 col-10 offset-1 align-self-center\">\r\n        <img class=\"project-footer__logo\" src=\"https://firebasestorage.googleapis.com/v0/b/techshop-12812.appspot.com/o/logo.jpg?alt=media&token=6d16dea6-aa57-41fc-b6cd-ba6c0aa633a1\" alt=\"Techshop logo\">\r\n        <small class=\"project-footer__logo__text\">{{ (information | async)?.copyright}}</small>\r\n      </div>\r\n      <div class=\"col-xl-3 col-md-3 offset-md-0 col-sm-4 offset-sm-0 col-10 offset-1 project-footer__time-open\">\r\n        <h6>We are opened</h6>\r\n        <p class=\"project-footer__time-open__text\">{{ (information | async)?.openingHours.weekdays}}<br>{{ (information | async)?.openingHours.weekend}}</p>\r\n      </div>\r\n      <div class=\"col-xl-3 col-md-3 offset-md-0 col-sm-4 offset-sm-0 col-10 offset-1 project-footer__contact-us\">\r\n        <h6>Contact us</h6>\r\n        <a href=\"tel:+380800300030\" class=\"project-footer__phone-number\">{{ (information | async)?.contacts.phone}}</a>\r\n        <span class=\"project-footer__email\">{{ (information | async)?.contacts.email}}</span>\r\n      </div>\r\n      <div class=\"col-xl-3 offset-xl-0 col-md-3 offset-md-0 col-sm-4 offset-sm-4 col-10 offset-1 project-footer__social-services\">\r\n        <h6>Social services</h6>\r\n        <a href=\"#\" class=\"project-footer__social-service\"><i class=\"fa fa-facebook fa-lg\" aria-hidden=\"true\"></i></a>\r\n        <a href=\"#\" class=\"project-footer__social-service\"><i class=\"fa fa-google-plus fa-lg\" aria-hidden=\"true\"></i></a>\r\n        <a href=\"#\" class=\"project-footer__social-service\"><i class=\"fa fa-twitter fa-lg\" aria-hidden=\"true\"></i></a>\r\n        <a href=\"#\" class=\"project-footer__social-service\"><i class=\"fa fa-instagram fa-lg\" aria-hidden=\"true\"></i></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(db) {
        this.db = db;
        this.information = this.db.doc('footer-information/information').valueChanges();
    }
    ;
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'footer-ang',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/assets/scss/main.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"project-header\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-8 col-sm-9 col-12 offset-lg-4 offset-md-2\">\r\n        <nav class=\"project-header__nav\">\r\n          <ul class=\"project-header__nav__ul\">\r\n            <li class=\"project-header__nav__ul__li\"><a href=\"#\" class=\"project-header__nav__ul__li__a\">About us</a></li>\r\n            <li class=\"project-header__nav__ul__li\"><a href=\"#\" class=\"project-header__nav__ul__li__a\">Shipping & Payment</a></li>\r\n            <li class=\"project-header__nav__ul__li\"><a href=\"#\" class=\"project-header__nav__ul__li__a\">Guarantee</a></li>\r\n            <li class=\"project-header__nav__ul__li\"><a href=\"#\" class=\"project-header__nav__ul__li__a\">Contact Us</a></li>\r\n            <li class=\"project-header__nav__ul__li\"><a href=\"#\" class=\"project-header__nav__ul__li__a\">Login</a></li>\r\n          </ul>\r\n        </nav>\r\n      </div>\r\n      <div class=\"col-lg-2 col-md-2 col-sm-3 offset-sm-0 col-3 offset-9 align-self-end shopping\">\r\n        <a class=\"shopping-cart\" [routerLink]=\"['shopping-cart']\">\r\n          <i class=\"fa fa-shopping-cart shopping-cart__mobile-icon\" aria-hidden=\"true\">\r\n            <span class=\"shopping-cart__mobile-icon__number\">{{ counterInShoppingCart }}</span>\r\n          </i>\r\n          <span class=\"shopping-cart__items\">\r\n            <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i> {{ counterInShoppingCart }} {{ counterWord }}\r\n          </span>\r\n          <span class=\"shopping-cart__sum\">${{ sumInShoppingCart }}</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(sumInCart) {
        this.listInShoppingCart = sumInCart.getShoppingList();
        this.sumService = sumInCart;
        this.counterWord = 'items';
    }
    HeaderComponent.prototype.deleteFromCart = function (shoppingIndex) {
        this.sumService.deleteFromShoppingList(shoppingIndex);
    };
    HeaderComponent.prototype.ngDoCheck = function () {
        this.counterInShoppingCart = this.sumService.getCurrentCounter();
        this.sumInShoppingCart = this.sumService.getCurrentSum();
        if (this.counterInShoppingCart === 1) {
            this.counterWord = 'item';
        }
        else {
            this.counterWord = 'items';
        }
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header-ang',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/assets/scss/main.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__["a" /* ShoppingCartService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation-block/navigation-block.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-end navigation-block\">\r\n      <div class=\"col-lg-2 offset-lg-2 col-md-3 offset-md-3 col-sm-5 offset-sm-4 col-6 offset-4\">\r\n        <a href=\"tel:+380800300030\" class=\"navigation-block--phone\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> 0 800 300 0 30</a>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-4 offset-md-0 col-sm-8 offset-sm-4 col-12 offset-0 navigation-block__search\">\r\n        <form [formGroup]=\"form\" class=\"input-group\" (mouseover)=\"showUlSearch()\" (mouseleave)=\"hideUlSearch()\">\r\n            <span>\r\n                <a [routerLink]=\"['/search', searchSmartphone.value ]\"\r\n                   class=\"btn navigation-block__search--button\" (click)=\"hideBoth()\">\r\n                    <i class=\"fa fa-search input-group-btn__i\" aria-hidden=\"true\"></i>\r\n                </a>\r\n            </span>\r\n          <input id=\"searchSmartphone\"\r\n                 formControlName=\"searchSmartphone\"\r\n                 type=\"text\"\r\n                 class=\"form-control\"\r\n                 autocomplete=\"off\"\r\n                 (keyup)=\"onKeyUp($event)\"\r\n                 (click)=\"resetCounter()\">\r\n          <div id=\"input-group--search-value\" class=\"input-group--search-value\" (click)=\"setInputValue()\">{{ searchValue }} </div>\r\n        </form>\r\n        <ul class=\"ul-search\"\r\n            *ngIf=\"((counterForResults !== 0) && (mouseOnForm || mouseOnUlSearch))\"\r\n            (mouseleave)=\"hideUlDropdownSearch()\">\r\n          <li class=\"ul-search__li\"\r\n              *ngFor=\"let smart of smartphones; index as smartIndex\"\r\n              [style.display]=\"(resultsForEachSmartphone[smartIndex] === 1) ? 'block' : 'none'\"\r\n              [class.match-search-value]=\"resultsForEachSmartphone[smartIndex] === 1\">\r\n            <a [routerLink]=\"['/product', smart.id ]\"\r\n               class=\"ul-search__li--a\"\r\n                (click)=\"hideBoth()\">{{ smart.brand }} {{ smart.name }} {{ smart.color }}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"row align-items-center navigation-block__logo-block\">\r\n      <div class=\"col-md-3 col-sm-4 col-5\"><a class=\"navigation-block__logo\" [routerLink]=\"['']\"><img src=\"https://firebasestorage.googleapis.com/v0/b/techshop-12812.appspot.com/o/logo.jpg?alt=media&token=6d16dea6-aa57-41fc-b6cd-ba6c0aa633a1\" alt=\"TECHSHOP\" class=\"navigation-block__logo--img\"></a></div>\r\n    </div>\r\n    <div class=\"row align-items-start navigation-block__navigation-menu\">\r\n      <ul class=\"col-lg-10 offset-lg-2 col-12 offset-0 navigation-menu\" (mouseleave)=\"hideSubmenu()\">\r\n        <li class=\"navigation-menu__li\" (mouseover)=\"submenuToggle(0)\" (click)=\"submenuToggle(0)\">Mobile devices\r\n          <div class=\"navigation-submenu-container\">\r\n            <ul class=\"navigation-submenu\">\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Smartphones</a></li>\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Mobile Phones</a></li>\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Covers and Screen Protectors</a></li>\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Technical Accessories</a></li>\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Earrings and Speakers</a></li>\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Watches and Bracelets</a></li>\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Action Cameras</a></li>\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Gadgets for Home and Health</a></li>\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Radio Controlled Models</a></li>\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <li class=\"navigation-menu__li\" (mouseover)=\"submenuToggle(1)\" (click)=\"submenuToggle(1)\">Computers & notebooks\r\n          <div class=\"navigation-submenu-container\">\r\n            <ul class=\"navigation-submenu\">\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Item 1</a></li>\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Item 2</a></li>\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Item 3</a></li>\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Item 4</a></li>\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Item 5</a></li>\r\n              <li><a href=\"#\" class=\"navigation-submenu__a\">Item 6</a></li>\r\n            </ul>\r\n          </div>\r\n        </li>\r\n        <li class=\"navigation-menu__li\" (mouseover)=\"submenuToggle(2)\" (click)=\"submenuToggle(2)\">TV & audio</li>\r\n        <li class=\"navigation-menu__li\" (mouseover)=\"submenuToggle(3)\" (click)=\"submenuToggle(3)\">photo & video Cameras</li>\r\n        <li class=\"navigation-menu__li\" (mouseover)=\"submenuToggle(4)\" (click)=\"submenuToggle(4)\">Appliances</li>\r\n        <li class=\"navigation-menu__li\" (mouseover)=\"submenuToggle(5)\" (click)=\"submenuToggle(5)\">Sport</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/navigation-block/navigation-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service_service__ = __webpack_require__("./src/app/services/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationBlockComponent = /** @class */ (function () {
    function NavigationBlockComponent(dataService) {
        this.dataService = dataService;
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            searchSmartphone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required)
        });
        this.mouseOnForm = false;
        this.mouseOnUlSearch = false;
        this.counterSearch = -1;
        this.counterForResults = 0;
    }
    Object.defineProperty(NavigationBlockComponent.prototype, "searchSmartphone", {
        get: function () {
            return this.form.get('searchSmartphone');
        },
        enumerable: true,
        configurable: true
    });
    ;
    /// Show/hide search results ///
    NavigationBlockComponent.prototype.showUlSearch = function () {
        this.mouseOnForm = true;
        this.mouseOnUlSearch = true;
    };
    NavigationBlockComponent.prototype.hideUlSearch = function () {
        this.mouseOnForm = false;
        this.counterSearch = -1;
        var elems = document.getElementsByClassName("ul-search__li--a");
        for (var i = 0; i < elems.length; i++) {
            elems[i].className = 'ul-search__li--a';
        }
    };
    NavigationBlockComponent.prototype.hideUlDropdownSearch = function () {
        this.mouseOnUlSearch = false;
        this.counterSearch = -1;
        var elems = document.getElementsByClassName("ul-search__li--a");
        for (var i = 0; i < elems.length; i++) {
            elems[i].className = 'ul-search__li--a';
        }
    };
    NavigationBlockComponent.prototype.hideBoth = function () {
        this.mouseOnUlSearch = false;
        this.mouseOnForm = false;
        this.searchValue = '';
        this.searchSmartphone.setValue(this.searchValue);
    };
    /// Key down/up/enter ///
    NavigationBlockComponent.prototype.onKeyUp = function ($event) {
        if ($event.keyCode === 40) {
            var elem = document.getElementById('input-group--search-value');
            elem.style.display = 'block';
            var elems = document.querySelectorAll(".match-search-value a");
            for (var i = 0; i < elems.length; i++) {
                elems[i].className = 'ul-search__li--a';
            }
            if (this.counterSearch === -1) {
                this.counterSearch = 0;
                elems[this.counterSearch].className = 'ul-search__li--a a-is-chosen';
                this.searchValue = elems[this.counterSearch].textContent;
            }
            else if (this.counterSearch === elems.length - 1) {
                this.counterSearch = 0;
                elems[this.counterSearch].className = 'ul-search__li--a a-is-chosen';
                this.searchValue = elems[this.counterSearch].textContent;
            }
            else {
                this.counterSearch++;
                elems[this.counterSearch].className = 'ul-search__li--a a-is-chosen';
                this.searchValue = elems[this.counterSearch].textContent;
            }
        }
        if ($event.keyCode === 38) {
            var elem = document.getElementById('input-group--search-value');
            elem.style.display = 'block';
            var elems = document.querySelectorAll(".match-search-value a");
            for (var i = 0; i < elems.length; i++) {
                elems[i].className = 'ul-search__li--a';
            }
            if (this.counterSearch === -1) {
                this.counterSearch = elems.length - 1;
                elems[this.counterSearch].className = 'ul-search__li--a a-is-chosen';
                this.searchValue = elems[this.counterSearch].textContent;
            }
            else if (this.counterSearch === 0) {
                this.counterSearch = elems.length - 1;
                elems[this.counterSearch].className = 'ul-search__li--a a-is-chosen';
                this.searchValue = elems[this.counterSearch].textContent;
            }
            else {
                this.counterSearch--;
                elems[this.counterSearch].className = 'ul-search__li--a a-is-chosen';
                this.searchValue = elems[this.counterSearch].textContent;
            }
        }
        if ($event.keyCode === 13) {
            var elems = document.querySelectorAll(".match-search-value a");
            this.searchValue = elems[this.counterSearch].textContent;
            this.searchSmartphone.setValue(this.searchValue);
            var elem = document.getElementById('input-group--search-value');
            elem.style.display = 'none';
            var elemsA = document.querySelectorAll(".match-search-value a");
            for (var i = 0; i < elemsA.length; i++) {
                elemsA[i].className = 'ul-search__li--a';
            }
            this.counterSearch = -1;
        }
    };
    NavigationBlockComponent.prototype.resetCounter = function () {
        this.counterSearch = -1;
    };
    NavigationBlockComponent.prototype.setInputValue = function () {
        var elem = document.getElementById('input-group--search-value');
        elem.style.display = 'none';
        this.searchSmartphone.setValue(this.searchValue);
        var elems = document.getElementsByClassName("ul-search__li--a");
        for (var i = 0; i < elems.length; i++) {
            elems[i].className = 'ul-search__li--a';
        }
    };
    NavigationBlockComponent.prototype.submenuToggle = function (i) {
        var elemsHideDiv = document.querySelectorAll("div.navigation-submenu-container");
        var elemsHideUl = document.querySelectorAll("ul.navigation-submenu");
        for (var j = 0; j < elemsHideDiv.length; j++) {
            elemsHideDiv[j].className = 'navigation-submenu-container';
            elemsHideUl[j].className = 'navigation-submenu';
        }
        var elems = document.querySelectorAll("li.navigation-menu__li");
        var elemDiv = elems[i].querySelector('div.navigation-submenu-container');
        var elemUl = elems[i].querySelector('ul.navigation-submenu');
        if (elemDiv && elemUl) {
            elemUl.className = 'navigation-submenu new-class-test';
            elemDiv.className = 'navigation-submenu-container new-class-test';
        }
    };
    NavigationBlockComponent.prototype.hideSubmenu = function () {
        var elemsHideDiv = document.querySelectorAll("div.navigation-submenu-container");
        var elemsHideUl = document.querySelectorAll("ul.navigation-submenu");
        for (var j = 0; j < elemsHideDiv.length; j++) {
            elemsHideDiv[j].className = 'navigation-submenu-container';
            elemsHideUl[j].className = 'navigation-submenu';
        }
    };
    NavigationBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataFromService = this.dataService.getData();
        this.dataFromService
            .subscribe(function (data) {
            _this.smartphones = data;
        });
    };
    NavigationBlockComponent.prototype.ngDoCheck = function () {
        /// Search for results ///
        var searchValueString = this.form.get('searchSmartphone').value.toLowerCase();
        if (searchValueString !== "") {
            var searchValueWords = searchValueString.split(' ');
            this.counterForResults = 0;
            this.resultsForEachSmartphone = [];
            for (var i = 0; i < this.smartphones.length; i++) {
                var brandValueSymbols = this.smartphones[i].brand.toLowerCase() + " " + this.smartphones[i].name.toLowerCase() + " " + this.smartphones[i].color.toLowerCase();
                var brandValueWords = brandValueSymbols.split(' ');
                brandValueWords.push('');
                var wordResult = false;
                var arrayAllWordsResults = [];
                for (var k = 0; k < searchValueWords.length; k++) {
                    var arrayOneWordResults = [];
                    for (var j = 0; j < brandValueWords.length; j++) {
                        if (searchValueWords[k] === brandValueWords[j]) {
                            arrayOneWordResults.push(1);
                        }
                        else {
                            arrayOneWordResults.push(0);
                        }
                    }
                    var result = arrayOneWordResults.reduce(function (sum, current) {
                        return sum + current;
                    });
                    if (result === 1) {
                        arrayAllWordsResults[k] = 1;
                    }
                    else {
                        arrayAllWordsResults[k] = 0;
                    }
                }
                if (arrayAllWordsResults.length > 1) {
                    var result = arrayAllWordsResults.reduce(function (sum, current) {
                        return sum + current;
                    });
                    if (result === arrayAllWordsResults.length) {
                        wordResult = true;
                    }
                    else {
                        wordResult = false;
                    }
                }
                else {
                    if (arrayAllWordsResults[0] === 1) {
                        wordResult = true;
                    }
                    else {
                        wordResult = false;
                    }
                }
                if ((brandValueSymbols.search(searchValueString) != -1) || wordResult) {
                    this.resultsForEachSmartphone.push(1);
                    this.counterForResults++;
                }
                else {
                    this.resultsForEachSmartphone.push(0);
                }
            }
        }
        else {
            this.counterForResults = 0;
        }
    };
    NavigationBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'navigation-block',
            template: __webpack_require__("./src/app/components/navigation-block/navigation-block.component.html"),
            styles: [__webpack_require__("./src/assets/scss/main.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service_service__["a" /* DataService */]])
    ], NavigationBlockComponent);
    return NavigationBlockComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"not-found\">\r\n  <div class=\"container\">\r\n    <h1>Page not found</h1>\r\n    <a [routerLink]=\"['']\" class=\"btn big-button light-button not-found-a\">Back to the main page</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'not-found-ang',
            template: __webpack_require__("./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/assets/scss/main.scss")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<navigation-block></navigation-block>\r\n<section class=\"product\" *ngIf=\"smartphone\">\r\n  <div class=\"container\">\r\n    <p class=\"breadcrumb mobile-blocks__tags\">\r\n      <a class=\"breadcrumb-item\" href=\"#\">Home</a>\r\n      <a class=\"breadcrumb-item\" href=\"#\">Mobile Devices</a>\r\n      <a class=\"breadcrumb-item\" [routerLink]=\"['']\">Smartphones</a>\r\n      <span class=\"breadcrumb-item active\">{{ smartphone.brand }} {{ smartphone.name }} {{ smartphone.color }} ({{ smartphone.code }})</span>\r\n    </p>\r\n    <h1 class=\"mobile-blocks__h1\">{{ smartphone.brand }} {{ smartphone.name }} {{ smartphone.color }} ({{ smartphone.code }})</h1>\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-5 col-lg-6 col-md-8 col-sm-12 col-12\">\r\n        <div class=\"product__slider\" >\r\n          <div *ngFor=\"let oneSlide of smartphone.photoModelUrl; index as slideIndex; last as lastIndex; first as firstIndex\"\r\n               [style.background-image]=oneSlide\r\n               [style.display]=\"(currentSlide === slideIndex) ? 'block' : 'none'\"\r\n               class=\"product__slider__img\">\r\n            <div class=\"product__side-controls\">\r\n              <div class=\"to-back\" (click)=\"toBack(firstIndex)\"></div>\r\n              <div class=\"to-top\" (click)=\"toTop(lastIndex)\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"product__vertical-controls\">\r\n            <div class=\"vert-slides-up\" (click)=\"moveSlidesDown()\"></div>\r\n            <div class=\"vert-slides-down\" (click)=\"moveSlidesUp()\"></div>\r\n          </div>\r\n          <div class=\"product__img-controls\">\r\n            <div *ngFor=\"let oneSlide of arrayOfSlides\"\r\n                 [style.background-image]='(smartphone)?smartphone.photoModelUrl[oneSlide]: \"\"'\r\n                 [style.boxShadow]=\"(oneSlide === currentSlide ) ? '0 0 10px 4px #bbb' : 'none'\"\r\n                 (click)=\"changeSlide(oneSlide)\"\r\n                 class=\"product__img-controls__image\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-5 col-lg-6 col-md-4 col-sm-12 col-12 product__info-block\">\r\n        <p>\r\n          <span class=\"product__info-block__rating-stars\" (click)=\"showChangeRating()\">\r\n            <i class=\"fa product__info-block__rating-stars__star\" aria-hidden=\"true\" *ngFor=\"let star of ratingStars\"\r\n            [class.fa-star]=\"star === 'full'\"\r\n            [class.fa-star-o]=\"star === 'empty'\"\r\n            [class.fa-star-half-o]=\"star === 'half'\"></i>\r\n            <div class=\"product__info-block__rating-stars--change-rating\"\r\n                 [ngStyle]=\"{'opacity': popupChangeRating ? '1' : '0',\r\n                            'visibility': popupChangeRating ? 'visible' : 'hidden'}\">\r\n              <div class=\"change-rating--container\">\r\n                <h3>Set your rating:</h3>\r\n                <i class=\"fa fa-star fa-2x\" aria-hidden=\"true\" (click)=\"onChangeRating(smartphone, 1)\"></i>\r\n                <i class=\"fa fa-star fa-2x\" aria-hidden=\"true\" (click)=\"onChangeRating(smartphone, 2)\"></i>\r\n                <i class=\"fa fa-star fa-2x\" aria-hidden=\"true\" (click)=\"onChangeRating(smartphone, 3)\"></i>\r\n                <i class=\"fa fa-star fa-2x\" aria-hidden=\"true\" (click)=\"onChangeRating(smartphone, 4)\"></i>\r\n                <i class=\"fa fa-star fa-2x\" aria-hidden=\"true\" (click)=\"onChangeRating(smartphone, 5)\"></i>\r\n                <div class=\"change-rating--close\" (click)=\"hideChangeRating()\">x</div>\r\n              </div>\r\n            </div>\r\n\r\n          </span>\r\n          <span class=\"product__info-block__rating-number\">\r\n            <i>({{ smartphone.ratingNumber }})</i>\r\n          </span>\r\n          <span [hidden]='smartphone.stock === true' class=\"product__info-block__stock\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> Not on stock</span>\r\n          <span [hidden]='smartphone.stock === false' class=\"product__info-block__stock\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i> On stock</span>\r\n        </p>\r\n        <article class=\"product__info-block__text\">{{ smartphone.description }}</article>\r\n        <div class=\"product__info-block__form\">\r\n          <div class=\"product__info-block__form__select-storage-size\">\r\n            Storage size<br>\r\n            <div class=\"product-select\" (mouseover)=\"showUlStorage()\" (mouseleave)=\"hideUlStorage()\">\r\n              <li class=\"first-select\" id=\"first-select\">{{ selectedSize }}GB</li>\r\n              <ul class=\"product-select__ul\" [style.display]=\"mousoverUl == true ? 'block' : 'none'\">\r\n                <li *ngFor=\"let storage of smartphone.storage; index as storageIndex\" class=\"second-select\" (click)=\"changeStorageSize(storageIndex)\">\r\n                  {{ storage.size }}GB\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"product__info-block__form__select-color\">\r\n            Color<br>\r\n            <div class=\"product-select color-select\">\r\n              <li class=\"first-select\">{{ smartphone.color }}</li>\r\n            </div>\r\n          </div>\r\n          <span class=\"product__info-block__form__price\">${{ selectedPrice }}</span>\r\n          <button class=\"btn big-button color-button product__info-block__form__submit\" (click)=\"addToCart()\">ADD TO CART</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-2 col-lg-12 col-md-12 col-sm-12 col-12 product__sidebar\">\r\n        <div class=\"product__sidebar__item\">\r\n          <h3><i class=\"fa fa-car product__sidebar__item__title\" aria-hidden=\"true\"></i>Delivery</h3>\r\n          <p class=\"product__sidebar__item__text\">Free delivery for orders starting from $300 (in Kiev and the surrounding area)</p>\r\n        </div>\r\n        <div class=\"product__sidebar__item\">\r\n          <h3><i class=\"fa fa-shopping-bag product__sidebar__item__title\" aria-hidden=\"true\"></i>Pickup</h3>\r\n          <p class=\"product__sidebar__item__text\">Pickup form the shop or from the Delivery Service office is available.</p>\r\n        </div>\r\n        <div class=\"product__sidebar__item\">\r\n          <h3><i class=\"fa fa-refresh product__sidebar__item__title\" aria-hidden=\"true\"></i>Refund</h3>\r\n          <p class=\"product__sidebar__item__text\">If any damages or other issues, the product can be returned within 14 days free of charge</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = /** @class */ (function () {
    function ProductComponent(db, shoppingListService, route) {
        this.db = db;
        this.route = route;
        this.shoppingList = shoppingListService;
        this.mousoverUl = false;
        this.currentSlide = 0;
        this.arrayOfSlides = [0, 1, 2, 3];
        this.ratingStars = [];
        this.popupChangeRating = false;
        console.log('this.popupChangeRating-1: ', this.popupChangeRating);
    }
    ProductComponent.prototype.addToCart = function () {
        this.smartphone.selectedPrice = this.selectedPrice;
        this.smartphone.selectedSize = this.selectedSize;
        this.shoppingList.addInShoppingList(this.smartphone);
        this.shoppingList.setCurrentCounter();
        this.shoppingList.setCurrentSum();
    };
    ProductComponent.prototype.changeStorageSize = function (storageIndex) {
        this.selectedSize = this.smartphone.storage[storageIndex].size;
        this.selectedPrice = this.smartphone.storage[storageIndex].price;
        this.mousoverUl = false;
    };
    ProductComponent.prototype.showUlStorage = function () {
        this.mousoverUl = true;
    };
    ProductComponent.prototype.hideUlStorage = function () {
        this.mousoverUl = false;
    };
    //////////////
    /// SLIDER ///
    //////////////
    /// Side Controls ///
    ProductComponent.prototype.toBack = function (firstIndex) {
        if (firstIndex) {
            this.currentSlide = this.smartphone.photoModelUrl.length - 1;
        }
        else {
            this.currentSlide--;
        }
    };
    ProductComponent.prototype.toTop = function (lastIndex) {
        if (lastIndex) {
            this.currentSlide = 0;
        }
        else {
            this.currentSlide++;
        }
    };
    /// Img Controls ///
    ProductComponent.prototype.changeSlide = function (oneSlide) {
        this.currentSlide = oneSlide;
    };
    /// Vertical Controls ///
    ProductComponent.prototype.moveSlidesUp = function () {
        for (var i = 0; i < 4; i++) {
            if (this.arrayOfSlides[i] === (this.smartphone.photoModelUrl.length - 1)) {
                this.arrayOfSlides[i] = 0;
            }
            else {
                this.arrayOfSlides[i]++;
            }
        }
    };
    ProductComponent.prototype.moveSlidesDown = function () {
        for (var i = 0; i < 4; i++) {
            if (this.arrayOfSlides[i] === 0) {
                this.arrayOfSlides[i] = (this.smartphone.photoModelUrl.length - 1);
            }
            else {
                this.arrayOfSlides[i]--;
            }
        }
    };
    ///////////////////////////
    /// CHANGE RATING POPUP ///
    ///////////////////////////
    ProductComponent.prototype.showChangeRating = function () {
        this.popupChangeRating = !this.popupChangeRating;
    };
    ProductComponent.prototype.hideChangeRating = function () {
        this.popupChangeRating = true;
    };
    ProductComponent.prototype.onChangeRating = function (smartphone, value) {
        this.smartphone.ratingNumber++;
        this.smartphone.rating = (this.smartphone.rating * (this.smartphone.ratingNumber - 1) + value) / this.smartphone.ratingNumber;
        this.phone = this.db.doc(this.routParam);
        this.phone.update(smartphone);
    };
    ////////////////////
    /// RATING STARS ///
    ////////////////////
    ProductComponent.prototype.stars = function () {
        this.ratingStars = [];
        for (var j = 0; j < Math.floor(this.smartphone.rating); j++) {
            this.ratingStars.push('full');
        }
        for (var j = this.ratingStars.length; j < 5; j++) {
            if ((this.ratingStars.length - this.smartphone.rating) < -0.5) {
                this.ratingStars.push('half');
            }
            else {
                this.ratingStars.push('empty');
            }
        }
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.routParam = 'test-data/' + params['id'];
            _this.smartphoneModel = _this.db.doc(_this.routParam).valueChanges();
            _this.smartphoneModel.subscribe(function (data) {
                _this.smartphone = data;
                _this.selectedSize = _this.smartphone.storage[3].size;
                _this.selectedPrice = _this.smartphone.storage[3].price;
                _this.stars();
            });
        });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product-ang',
            template: __webpack_require__("./src/app/components/product/product.component.html"),
            styles: [__webpack_require__("./src/assets/scss/main.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/components/search-results/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<navigation-block></navigation-block>\r\n<section class=\"search-results\">\r\n  <div class=\"container container-search-results\">\r\n    <p class=\"breadcrumb mobile-blocks__tags\">\r\n      <a class=\"breadcrumb-item\" href=\"#\">Home</a>\r\n      <a class=\"breadcrumb-item\" href=\"#\">Mobile Devices</a>\r\n      <a class=\"breadcrumb-item breadcrumb-item--search-result\" [routerLink]=\"['']\">Smartphones</a>\r\n    </p>\r\n    <h1 class=\"search-results--h1\">Search results for <span>{{ searchValue }}</span></h1>\r\n    <p class=\"mobile-blocks__found\">Found: {{ counterForResults }} {{ counterWord }}</p>\r\n    <p class=\"info--search-result\" [style.display]=\"(counterForResults === 0) ? 'block' : 'none'\">Your search <span>\"{{ searchValue }}\"</span> did not match any products.</p>\r\n\r\n    <div class=\"smartphones smartphones-search-result\">\r\n      <div *ngFor=\"let smartphone of smartphones; index as smatphoneIndex\" class=\"smartphone smartphone--search-result\" [style.display]=\"(resultsForEachSmartphone[smatphoneIndex] === 1) ? 'flex' : 'none'\">\r\n          <div class=\"smartphone__slider\">\r\n            <div id=\"arrow-backward\" (click)=\"backward(smatphoneIndex)\"><i class=\"fa fa-chevron-left fa-lg\" aria-hidden=\"true\"></i></div>\r\n            <div id=\"arrow-forward\" (click)=\"forward(smatphoneIndex)\"><i class=\"fa fa-chevron-right fa-lg\" aria-hidden=\"true\"></i></div>\r\n            <a *ngFor=\"let photoUrl of smartphone.photoUrl; index as i\" [routerLink]=\"['/product', smartphone.id ]\">\r\n              <img class=\"smartphone__slider--img number-{{smatphoneIndex}}\" [ngClass]=\"{'smartphone__slide--active': i === 0}\" [src]=\"photoUrl\">\r\n            </a>\r\n          </div>\r\n          <a [routerLink]=\"['/product', smartphone.id ]\" class=\"smartphone__a-model\">\r\n            <p class=\"smartphone__p\">{{ smartphone.brand }} {{ smartphone.name }} {{ smartphone.color }} ({{ smartphone.code }})</p>\r\n          </a>\r\n          <div class=\"smartphone__bottom-info\">\r\n            <div class=\"btn smartphone__bottom-info__rating\">\r\n              <i class=\"fa smartphone__bottom-info__star\" aria-hidden=\"true\" *ngFor=\"let star of ratingStars[smatphoneIndex]\"\r\n                 [class.fa-star]=\"star === 'full'\"\r\n                 [class.fa-star-o]=\"star === 'empty'\"\r\n                 [class.fa-star-half-o]=\"star === 'half'\"></i>\r\n            </div>\r\n            <span class=\"smartphone__bottom-info__price\">${{ smartphone.storage[3].price }}</span>\r\n            <button class=\"btn color-button smartphone__bottom-info__add-to-card\" id=\"smartphone__bottom-info__add-to-card\" (click)=\"addToCart(smatphoneIndex)\">Add to cart</button>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/search-results/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service_service__ = __webpack_require__("./src/app/services/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent(dataService, shoppingListService, route) {
        this.dataService = dataService;
        this.route = route;
        this.currentIndex = 0;
        this.shoppingList = shoppingListService;
        this.ratingStars = [];
        this.resultsForEachSmartphone = [];
        this.counterWord = 'items';
    }
    SearchResultComponent.prototype.addToCart = function (smatphoneIndex) {
        this.smartphones[smatphoneIndex].selectedPrice = this.smartphones[smatphoneIndex].storage[3].price;
        this.smartphones[smatphoneIndex].selectedSize = this.smartphones[smatphoneIndex].storage[3].size;
        this.shoppingList.addInShoppingList(this.smartphones[smatphoneIndex]);
        this.shoppingList.setCurrentCounter();
        this.shoppingList.setCurrentSum(this.smartphones[smatphoneIndex].selectedPrice);
    };
    SearchResultComponent.prototype.backward = function (smatphoneIndex) {
        this.sliderUrls = this.smartphones[smatphoneIndex].photoUrl; /// get array of current slider's urls to use its length
        this.sliderImages = document.getElementsByClassName('number-' + smatphoneIndex); /// find all imgs with class of current slider
        if (this.imgIndex !== smatphoneIndex) {
            for (var i = 0; i < this.sliderUrls.length - 1; i++) {
                this.sliderImages[i].classList.remove('smartphone__slide--active');
            }
            this.currentIndex = this.sliderUrls.length - 1;
            this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
            this.imgIndex = smatphoneIndex;
        }
        else {
            this.sliderImages[this.currentIndex].classList.remove('smartphone__slide--active');
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
            else {
                this.currentIndex = this.sliderUrls.length - 1;
            }
            this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
            this.imgIndex = smatphoneIndex;
        }
    };
    SearchResultComponent.prototype.forward = function (smatphoneIndex) {
        this.sliderUrls = this.smartphones[smatphoneIndex].photoUrl;
        this.sliderImages = document.getElementsByClassName('number-' + smatphoneIndex);
        if (this.imgIndex !== smatphoneIndex) {
            for (var i = this.sliderUrls.length - 1; i > 0; i--) {
                this.sliderImages[i].classList.remove('smartphone__slide--active');
            }
            this.currentIndex = 1;
            this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
            this.imgIndex = smatphoneIndex;
        }
        else {
            this.sliderImages[this.currentIndex].classList.remove('smartphone__slide--active');
            if (this.currentIndex < this.sliderUrls.length - 1) {
                this.currentIndex++;
            }
            else {
                this.currentIndex = 0;
            }
            this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
            this.imgIndex = smatphoneIndex;
        }
    };
    ////////////////////
    /// Rating Stars ///
    ////////////////////
    SearchResultComponent.prototype.stars = function () {
        for (var i = 0; i < this.smartphones.length; i++) {
            this.ratingStars.push([]);
            for (var j = 0; j < Math.floor(this.smartphones[i].rating); j++) {
                this.ratingStars[i].push('full');
            }
            for (var j = this.ratingStars[i].length; j < 5; j++) {
                if ((this.ratingStars[i].length - this.smartphones[i].rating) < -0.5) {
                    this.ratingStars[i].push('half');
                }
                else {
                    this.ratingStars[i].push('empty');
                }
            }
        }
    };
    SearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var search = params;
            _this.searchValue = search['search-value'];
            _this.dataFromService = _this.dataService.getData();
            _this.dataFromService
                .subscribe(function (data) {
                _this.smartphones = data;
                /// Search for results ///
                if (_this.searchValue !== "") {
                    _this.counterForResults = 0;
                    _this.resultsForEachSmartphone = [];
                    for (var i = 0; i < _this.smartphones.length; i++) {
                        var searchValueString = _this.searchValue.toLowerCase();
                        var searchValueWords = searchValueString.split(' ');
                        var brandValueSymbols = _this.smartphones[i].brand.toLowerCase() + " " + _this.smartphones[i].name.toLowerCase() + " " + _this.smartphones[i].color.toLowerCase();
                        var brandValueWords = brandValueSymbols.split(' ');
                        brandValueWords.push('');
                        var wordResult = false;
                        var arrayAllWordsResults = [];
                        for (var k = 0; k < searchValueWords.length; k++) {
                            var arrayOneWordResults = [];
                            for (var j = 0; j < brandValueWords.length; j++) {
                                if (searchValueWords[k] === brandValueWords[j]) {
                                    arrayOneWordResults.push(1);
                                }
                                else {
                                    arrayOneWordResults.push(0);
                                }
                            }
                            var result = arrayOneWordResults.reduce(function (sum, current) {
                                return sum + current;
                            });
                            if (result === 1) {
                                arrayAllWordsResults[k] = 1;
                            }
                            else {
                                arrayAllWordsResults[k] = 0;
                            }
                        }
                        if (arrayAllWordsResults.length > 1) {
                            var result = arrayAllWordsResults.reduce(function (sum, current) {
                                return sum + current;
                            });
                            if (result === arrayAllWordsResults.length) {
                                wordResult = true;
                            }
                            else {
                                wordResult = false;
                            }
                        }
                        else {
                            if (arrayAllWordsResults[0] === 1) {
                                wordResult = true;
                            }
                            else {
                                wordResult = false;
                            }
                        }
                        if ((brandValueSymbols.search(searchValueString) != -1) || wordResult) {
                            _this.resultsForEachSmartphone.push(1);
                            _this.counterForResults++;
                        }
                        else {
                            _this.resultsForEachSmartphone.push(0);
                        }
                    }
                }
                else {
                    _this.counterForResults = 0;
                }
                _this.ratingStars = [];
                _this.stars();
            });
        });
    };
    SearchResultComponent.prototype.ngDoCheck = function () {
        if (this.counterForResults === 1) {
            this.counterWord = 'item';
        }
        else {
            this.counterWord = 'items';
        }
    };
    SearchResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search-result',
            template: __webpack_require__("./src/app/components/search-results/search-result.component.html"),
            styles: [__webpack_require__("./src/assets/scss/main.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_data_service_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__["a" /* ShoppingCartService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.html":
/***/ (function(module, exports) {

module.exports = "<navigation-block></navigation-block>\r\n\r\n<section class=\"shopping-list\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <h1 class=\"col-12\">Shopping list</h1>\r\n      <div class=\"shopping-list__table-title\">\r\n        <div class=\"row shopping-list__table-title__product-name\">\r\n          <span class=\"col-sm-8 col-9\">Product name</span>\r\n          <span class=\"col-sm-4 col-3 shopping-list__table-title__price\">Price</span>\r\n        </div>\r\n      </div>\r\n      <ul class=\"col-12 shopping-list__ul\">\r\n        <li *ngFor=\"let shoppList of listInShoppingCart; index as shoppingIndex\" class=\"row shopping-list__ul__li\">\r\n          <span class=\"shopping-list__ul__li__index\">{{ shoppingIndex + 1 }}. </span>\r\n          <img [src]=\"shoppList.photoUrl[0]\" class=\"col-lg-2 col-sm-3 col-4 shopping-list__ul__li__img\">\r\n          <span class=\"col-lg-6 col-sm-5 col-5 shopping-list__ul__li__info\">{{ shoppList.brand }} {{ shoppList.name }} {{ shoppList.color }} {{ shoppList.selectedSize }}GB</span>\r\n          <span class=\"col-sm-3 col-3 shopping-list__ul__li__price\">${{ shoppList.selectedPrice }}</span>\r\n          <button class=\"btn light-button delete-model-from-shopping-cart\" (click)=\"deleteFromCart(shoppingIndex)\">Delete</button>\r\n          <button class=\"btn delete-model-from-shopping-cart-xs\" (click)=\"deleteFromCart(shoppingIndex)\"></button>\r\n        </li>\r\n      </ul>\r\n      <h3 class=\"col-sm-4 offset-sm-8 col-12 shopping-list__total-price\">Subtotal ({{counterInShoppingCart}}&nbsp;{{ counterWord }}): <span>${{ sumInShoppingCart }}</span></h3>\r\n      <div class=\"col-12\">\r\n        <div class=\"row shopping-list__buttons\">\r\n          <a [routerLink]=\"['']\" class=\"btn big-button light-button col-md-3 col-sm-4 col-5 shopping-list__buttons__continue\">Continue shopping</a>\r\n          <a [routerLink]=\"['']\" class=\"btn big-button color-button col-md-3 offset-md-6 col-sm-4 offset-sm-4 offset-2 col-5 shopping-list__buttons__checkout\">Proceed to checkout</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ShoppingCartComponent = /** @class */ (function (_super) {
    __extends(ShoppingCartComponent, _super);
    function ShoppingCartComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShoppingCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shopping-cart',
            template: __webpack_require__("./src/app/components/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__("./src/assets/scss/main.scss")]
        })
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}(__WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */]));



/***/ }),

/***/ "./src/app/components/smartphone/smartphone.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"smartphones\">\r\n  <div *ngFor=\"let smartphone of smartphones; index as smatphoneIndex\" class=\"smartphone\">\r\n    <div class=\"smartphone__slider\">\r\n      <div id=\"arrow-backward\" (click)=\"backward(smartphone)\"><i class=\"fa fa-chevron-left fa-lg\" aria-hidden=\"true\"></i></div>\r\n      <div id=\"arrow-forward\" (click)=\"forward(smartphone)\"><i class=\"fa fa-chevron-right fa-lg\" aria-hidden=\"true\"></i></div>\r\n      <a *ngFor=\"let photoUrl of smartphone.photoUrl; index as i\" [routerLink]=\"['/product', smartphone.id ]\">\r\n        <img class=\"smartphone__slider--img number-{{smartphone.code}}\" [ngClass]=\"{'smartphone__slide--active': i === 0}\" [src]=\"photoUrl\">\r\n      </a>\r\n    </div>\r\n    <a [routerLink]=\"['/product', smartphone.id ]\" class=\"smartphone__a-model\">\r\n      <p class=\"smartphone__p\">{{ smartphone.brand }} {{ smartphone.name }} {{ smartphone.color }} ({{ smartphone.code }})</p>\r\n    </a>\r\n    <div class=\"smartphone__bottom-info\">\r\n      <div class=\"btn smartphone__bottom-info__rating\">\r\n        <i class=\"fa smartphone__bottom-info__star\" aria-hidden=\"true\" *ngFor=\"let star of ratingStars[smatphoneIndex]\"\r\n           [class.fa-star]=\"star === 'full'\"\r\n           [class.fa-star-o]=\"star === 'empty'\"\r\n           [class.fa-star-half-o]=\"star === 'half'\"></i>\r\n      </div>\r\n      <span class=\"smartphone__bottom-info__price\">${{ smartphone.storage[3].price }}</span>\r\n      <button class=\"btn color-button smartphone__bottom-info__add-to-card\" id=\"smartphone__bottom-info__add-to-card\" (click)=\"addToCart(smatphoneIndex)\">Add to cart</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/smartphone/smartphone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartphoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__ = __webpack_require__("./src/app/services/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service_service__ = __webpack_require__("./src/app/services/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmartphoneComponent = /** @class */ (function () {
    function SmartphoneComponent(dataService, shoppingListService) {
        this.dataService = dataService;
        this.currentIndex = 0;
        this.shoppingList = shoppingListService;
        this.ratingStars = [];
    }
    SmartphoneComponent.prototype.addToCart = function (smatphoneIndex) {
        this.smartphones[smatphoneIndex].selectedPrice = this.smartphones[smatphoneIndex].storage[3].price;
        this.smartphones[smatphoneIndex].selectedSize = this.smartphones[smatphoneIndex].storage[3].size;
        this.shoppingList.addInShoppingList(this.smartphones[smatphoneIndex]);
        this.shoppingList.setCurrentCounter();
        this.shoppingList.setCurrentSum(this.smartphones[smatphoneIndex].selectedPrice);
    };
    SmartphoneComponent.prototype.backward = function (smartphone) {
        this.sliderUrls = smartphone.photoUrl; /// get array of current slider's urls to use its length
        this.sliderImages = document.getElementsByClassName('number-' + smartphone.code); /// find all imgs with class of current slider
        if (this.imgIndex !== smartphone.code) {
            for (var i = 0; i < this.sliderUrls.length - 1; i++) {
                this.sliderImages[i].classList.remove('smartphone__slide--active');
            }
            this.currentIndex = this.sliderUrls.length - 1;
            this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
            this.imgIndex = smartphone.code;
        }
        else {
            this.sliderImages[this.currentIndex].classList.remove('smartphone__slide--active');
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
            else {
                this.currentIndex = this.sliderUrls.length - 1;
            }
            this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
            this.imgIndex = smartphone.code;
        }
    };
    SmartphoneComponent.prototype.forward = function (smartphone) {
        this.sliderUrls = smartphone.photoUrl;
        this.sliderImages = document.getElementsByClassName('number-' + smartphone.code);
        if (this.imgIndex !== smartphone.code) {
            for (var i = this.sliderUrls.length - 1; i > 0; i--) {
                this.sliderImages[i].classList.remove('smartphone__slide--active');
            }
            this.currentIndex = 1;
            this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
            this.imgIndex = smartphone.code;
        }
        else {
            this.sliderImages[this.currentIndex].classList.remove('smartphone__slide--active');
            if (this.currentIndex < this.sliderUrls.length - 1) {
                this.currentIndex++;
            }
            else {
                this.currentIndex = 0;
            }
            this.sliderImages[this.currentIndex].classList.add('smartphone__slide--active');
            this.imgIndex = smartphone.code;
        }
    };
    SmartphoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataFromService = this.dataService.getData();
        this.dataFromService
            .subscribe(function (data) {
            _this.smartphones = data;
            /// Rating stars ///
            _this.ratingStars = [];
            for (var i = 0; i < _this.smartphones.length; i++) {
                _this.ratingStars.push([]);
                for (var j = 0; j < Math.floor(_this.smartphones[i].rating); j++) {
                    _this.ratingStars[i].push('full');
                }
                for (var j = _this.ratingStars[i].length; j < 5; j++) {
                    if ((_this.ratingStars[i].length - _this.smartphones[i].rating) < -0.5) {
                        _this.ratingStars[i].push('half');
                    }
                    else {
                        _this.ratingStars[i].push('empty');
                    }
                }
            }
        });
    };
    SmartphoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'smartphone-ang',
            template: __webpack_require__("./src/app/components/smartphone/smartphone.component.html"),
            styles: [__webpack_require__("./src/assets/scss/main.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__services_shopping_cart_service__["a" /* ShoppingCartService */]])
    ], SmartphoneComponent);
    return SmartphoneComponent;
}());



/***/ }),

/***/ "./src/app/components/smartphones/smartphones.component.html":
/***/ (function(module, exports) {

module.exports = "<navigation-block></navigation-block>\r\n<section class=\"smartphones-background\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-2 col-lg-3 col-md-3 col-sm-4 col-0 sidebar-checkboxes\" id=\"sidebar-checkboxes\" (window:resize)=\"onResize()\">\r\n        <div class=\"sidebar-checkboxes__filter-buttons\">\r\n          <button class=\"btn sidebar-checkboxes__filter-button__back\" (click)=\"hideCheckboxes()\"><i class=\"fa fa-long-arrow-left fa-lg\" aria-hidden=\"true\"></i>Back</button>\r\n          <button class=\"btn sidebar-checkboxes__filter-button__apply\" (click)=\"hideCheckboxes()\">Apply</button>\r\n        </div>\r\n        <ul class=\"sidebar-checkboxes__ul\">Brand\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"apple\" checked>Apple <span>(57)</span>\r\n            <label for=\"apple\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"samsung\">Samsung <span>(72)</span>\r\n            <label for=\"samsung\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"lenovo\">Lenovo <span>(5)</span>\r\n            <label for=\"lenovo\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"nokia\">Nokia <span>(153)</span>\r\n            <label for=\"nokia\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"philips\">Philips <span>(18)</span>\r\n            <label for=\"philips\"></label>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"sidebar-checkboxes__ul\">Price\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"0-100\">$0 - $100 <span>(476)</span>\r\n            <label for=\"0-100\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"100-200\">$100 - $200 <span>(74)</span>\r\n            <label for=\"100-200\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"200-300\">$200 - $300 <span>(53)</span>\r\n            <label for=\"200-300\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"300-400\" checked>$300 - $400 <span>(153)</span>\r\n            <label for=\"300-400\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"400-600\" checked>$400 - $600 <span>(476)</span>\r\n            <label for=\"400-600\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"600-800\" checked>$600 - $800 <span>(574)</span>\r\n            <label for=\"600-800\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"800-1000\">$800 - $1000 <span>(53)</span>\r\n            <label for=\"800-1000\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"1000-1500\">$1000 - $1500 <span>(153)</span>\r\n            <label for=\"1000-1500\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"1500-\">$1500 - ... <span>(53)</span>\r\n            <label for=\"1500-\"></label>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"sidebar-checkboxes__ul\">Color\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"white\">White <span>(57)</span>\r\n            <label for=\"white\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"silver\">Silver <span>(72)</span>\r\n            <label for=\"silver\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"black\">Black <span>(5)</span>\r\n            <label for=\"black\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"golden\" checked>Golden <span>(153)</span>\r\n            <label for=\"golden\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"pink\" checked>Pink <span>(18)</span>\r\n            <label for=\"pink\"></label>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"sidebar-checkboxes__ul\">Screen Size\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"2_3\">2.3\" and less <span>(8)</span>\r\n            <label for=\"2_3\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"2_4-3_9\">2.4-3.9\" <span>(93)</span>\r\n            <label for=\"2_4-3_9\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"4_3-4_5\">4.3\"-4.5\" <span>(45)</span>\r\n            <label for=\"4_3-4_5\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"4_6-4_8\">4.6-4.8\" <span>(57)</span>\r\n            <label for=\"4_6-4_8\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"5\" checked>5\" <span>(34)</span>\r\n            <label for=\"5\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"5_6-5_9\" checked>5.6-5.9\" <span>(17)</span>\r\n            <label for=\"5_6-5_9\"></label>\r\n          </li>\r\n          <li class=\"sidebar-checkboxes__li\">\r\n            <input type=\"checkbox\" id=\"6_0\">6.0\" and more <span>(4)</span>\r\n            <label for=\"6_0\"></label>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-xl-9 offset-xl-1 col-lg-9 offset-lg-0 col-md-8 offset-md-1 col-sm-8 offset-sm-0 col-12 mobile-blocks\">\r\n        <p class=\"breadcrumb mobile-blocks__tags\">\r\n          <a class=\"breadcrumb-item\" href=\"#\">Home</a>\r\n          <a class=\"breadcrumb-item\" href=\"#\">Mobile Devices</a>\r\n          <span class=\"breadcrumb-item active\">Smartphones</span>\r\n        </p>\r\n        <h1>Smartphones</h1>\r\n        <p class=\"mobile-blocks__found\">Found: {{ foundItems }} items</p>\r\n        <p class=\"mobile-blocks__sorting\">\r\n          <span class=\"mobile-blocks__sorting__span\">Sort by:</span>\r\n          <span class=\"mobile-blocks__sorting__span\">\r\n            <a href=\"#\" class=\"mobile-blocks__sorting__span__a\">price</a>\r\n          </span>\r\n          <span class=\"mobile-blocks__sorting__span\">\r\n            <a href=\"#\" class=\"mobile-blocks__sorting__span__a\">most popular</a>\r\n          </span>\r\n          <span class=\"mobile-blocks__sorting__span\">\r\n            <a href=\"#\" class=\"mobile-blocks__sorting__span__a active-for-sorting\">name</a>\r\n          </span>\r\n        </p>\r\n        <button class=\"btn mobile-blocks__filter-button\" (click)=\"showCheckboxes()\">Filter</button>\r\n        <hr>\r\n        <smartphone-ang></smartphone-ang>\r\n        <button class=\"btn big-button light-button mobile-blocks__button-other \">Load other 35 items</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/smartphones/smartphones.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartphonesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__ = __webpack_require__("./src/app/services/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmartphonesComponent = /** @class */ (function () {
    function SmartphonesComponent(dataService) {
        this.dataService = dataService;
    }
    SmartphonesComponent.prototype.showCheckboxes = function () {
        this.checkbox.style.left = "0";
    };
    SmartphonesComponent.prototype.hideCheckboxes = function () {
        this.checkbox.style.left = "-100vw";
    };
    SmartphonesComponent.prototype.onResize = function () {
        if (screen.width > 575) {
            this.checkbox.style.left = "0";
        }
        else {
            if (this.checkbox.style.left === "0") {
                this.checkbox.style.left = "0";
            }
            else {
                this.checkbox.style.left = "-110vw";
            }
        }
    };
    SmartphonesComponent.prototype.addClassForSortingA = function () {
        var elem = document.querySelector('a.mobile-blocks__sorting__span__a:focus');
        if (elem) {
            var elems = document.querySelectorAll('a.mobile-blocks__sorting__span__a');
            for (var i = 0; i < elems.length; i++) {
                elems[i].className = 'mobile-blocks__sorting__span__a';
            }
            elem.className = 'mobile-blocks__sorting__span__a active-for-sorting';
        }
    };
    SmartphonesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataFromService = this.dataService.getData();
        this.dataFromService
            .subscribe(function (data) {
            _this.foundItems = data.length;
        });
        this.checkbox = document.getElementById('sidebar-checkboxes');
    };
    SmartphonesComponent.prototype.ngDoCheck = function () {
        this.addClassForSortingA();
    };
    SmartphonesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'smartphones-ang',
            template: __webpack_require__("./src/app/components/smartphones/smartphones.component.html"),
            styles: [__webpack_require__("./src/assets/scss/main.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */]])
    ], SmartphonesComponent);
    return SmartphonesComponent;
}());



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(db) {
        this.db = db;
    }
    DataService.prototype.getData = function () {
        return this.db.collection('test-data').snapshotChanges()
            .map(function (docArray) {
            return docArray.map(function (doc) {
                var data = doc.payload.doc.data();
                var id = doc.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/shopping-cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService() {
        this.currentSum = 0;
        this.shoppingList = [];
        this.counter = 0;
    }
    ShoppingCartService.prototype.getCurrentSum = function () {
        return this.currentSum;
    };
    ShoppingCartService.prototype.setCurrentSum = function () {
        var sum = 0;
        for (var i = 0; i < this.shoppingList.length; i++) {
            sum = sum + this.shoppingList[i].selectedPrice;
        }
        this.currentSum = sum;
    };
    ShoppingCartService.prototype.getShoppingList = function () {
        return this.shoppingList;
    };
    ShoppingCartService.prototype.addInShoppingList = function (model) {
        var a = JSON.stringify(model);
        var b = JSON.parse(a);
        this.shoppingList.push(b);
    };
    ShoppingCartService.prototype.deleteFromShoppingList = function (index) {
        this.currentSum = this.currentSum - this.shoppingList[index].selectedPrice;
        this.shoppingList.splice(index, 1);
        this.counter--;
    };
    ShoppingCartService.prototype.setCurrentCounter = function () {
        this.counter++;
    };
    ShoppingCartService.prototype.getCurrentCounter = function () {
        return this.counter;
    };
    ShoppingCartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/assets/scss/main.scss":
/***/ (function(module, exports) {

module.exports = "/* ==========================================================================\r\n   Normalize.scss settings\r\n   ========================================================================== */\n/**\r\n * Includes legacy browser support IE6/7\r\n *\r\n * Set to false if you want to drop support for IE6 and IE7\r\n */\n/* Base\r\n   ========================================================================== */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS and IE text size adjust after device orientation change,\r\n *    without disabling user zoom.\r\n * 3. Corrects text resizing oddly in IE 6/7 when body `font-size` is set using\r\n *  `em` units.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/**\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0; }\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n/**\r\n * 1. Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n/**\r\n * Prevents modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n/**\r\n * Improve readability of focused elements when they are also in an\r\n * active/hover state.\r\n */\na:active, a:hover {\n  outline: 0; }\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/**\r\n * Addresses styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * 1. Remove border when inside `a` element in IE 8/9/10.\r\n * 2. Improves image quality when scaled in IE 7.\r\n */\nimg {\n  border: 0; }\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 1em 40px; }\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0; }\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n * Correct font family set oddly in IE 6, Safari 4/5, and Chrome.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *  Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n * 4. Improves appearance and consistency in all browsers.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *  and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *  `input` and others.\r\n * 4. Removes inner spacing in IE 7 without affecting normal text inputs.\r\n *  Known issue: inner spacing remains in IE 6.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n/**\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n *  Known issue: excess padding remains in IE 6.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  /* 2 */ }\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n * 3. Corrects text not wrapping in Firefox 3.\r\n * 4. Corrects alignment displayed oddly in IE 6/7.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0; }\ndiv, a, button, span, h1, h2, h3, h4, h5, h6, p, i {\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear; }\n.before, .project-footer__contact-us::before, .project-footer__social-services::before, .navigation-block__navigation-menu::before, .navigation-block__navigation-menu::after, .smartphones-background::before, .mobile-blocks::before, .active-for-sorting::after, .smartphone::after, .sidebar-checkboxes__li label::before, .sidebar-checkboxes__li label::after, .to-back::before, .to-back::after, .to-top::before, .to-top::after, .product-select::before, .color-select::before, button.delete-model-from-shopping-cart-xs:before, button.delete-model-from-shopping-cart-xs:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\nh1, h2, h3, h4, h5, h6, p, a {\n  font-family: \"PF Din Text Comp Pro R\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  color: #000;\n  line-height: 1.4;\n  font-size: 1rem; }\np, a {\n  font-family: \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif; }\nh1 {\n  font-size: 3rem;\n  letter-spacing: 0.15rem;\n  margin: 12px 0;\n  line-height: 1; }\nh3 {\n  font-size: 2rem;\n  font-family: \"PF Din Text Comp Pro M\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  text-transform: uppercase; }\nh6 {\n  font-family: \"ArialBold\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif; }\n.min-height-between-header-navigation-and-footer, .smartphones-background, .mobile-blocks, .product, .shopping-list, .search-results {\n  min-height: calc(100vh - 30px - 117px - 77px - 43px);\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 991px) {\n    .min-height-between-header-navigation-and-footer, .smartphones-background, .mobile-blocks, .product, .shopping-list, .search-results {\n      min-height: calc(100vh - 30px - 107px - 77px - 43px); } }\n@media only screen and (max-width: 767px) {\n    .min-height-between-header-navigation-and-footer, .smartphones-background, .mobile-blocks, .product, .shopping-list, .search-results {\n      min-height: calc(100vh - 30px - 144px - 164px - 43px); } }\n@media only screen and (max-width: 575px) {\n    .min-height-between-header-navigation-and-footer, .smartphones-background, .mobile-blocks, .product, .shopping-list, .search-results {\n      min-height: calc(100vh - 30px - 147px - 296px - 43px); } }\n.big-button {\n  padding: 10px;\n  border: 1px solid #24c3e0;\n  border-radius: 0;\n  font-family: \"PF Din Text Comp Pro R\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  font-size: 1.5rem;\n  letter-spacing: 0.1rem;\n  /* Small Devices, Tablets */ }\n@media only screen and (max-width: 767px) {\n    .big-button {\n      font-size: 1.3rem; } }\n.light-button {\n  background-color: transparent;\n  color: #24c3e0; }\n.light-button:hover, .light-button:active, .light-button:focus {\n    background-color: #24c3e0;\n    color: #fff;\n    border: 1px solid #24c3e0; }\n.color-button {\n  background-color: #24c3e0;\n  color: #fff;\n  text-transform: uppercase;\n  font-family: \"PF Din Text Comp Pro M\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  letter-spacing: 0.07rem; }\n.color-button:hover, .color-button:active, .color-button:focus {\n    background-color: #14b4d1;\n    border: 1px solid #14b4d1;\n    outline: none;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n@-webkit-keyframes checkbox-move {\n  from {\n    left: -110vw; }\n  to {\n    left: 0; } }\n@keyframes checkbox-move {\n  from {\n    left: -110vw; }\n  to {\n    left: 0; } }\n.project-header {\n  width: 100%;\n  height: 30px;\n  background-color: #000; }\n.project-header__nav {\n  height: 100%; }\n.project-header__nav__ul {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 0;\n  padding: 0; }\n.project-header__nav__ul__li {\n  display: inline-block; }\n.project-header__nav__ul__li:nth-of-type(5) a.project-header__nav__ul__li__a {\n    color: #fff;\n    -webkit-transition: all 0.2s linear;\n    transition: all 0.2s linear; }\n.project-header__nav__ul__li:nth-of-type(5) a.project-header__nav__ul__li__a:hover {\n      color: #14b4d1;\n      text-decoration: none; }\na.project-header__nav__ul__li__a {\n  color: #c5c5c5;\n  line-height: 30px;\n  text-decoration: none;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 767px) {\n    a.project-header__nav__ul__li__a {\n      font-size: 0.9rem; } }\n@media only screen and (max-width: 575px) {\n    a.project-header__nav__ul__li__a {\n      font-size: 0.8rem; } }\na.project-header__nav__ul__li__a:hover {\n    color: #f3f6f6;\n    text-decoration: none; }\n.shopping {\n  position: relative;\n  height: 80px;\n  z-index: 10;\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 767px) {\n    .shopping {\n      height: 70px; } }\n@media only screen and (max-width: 575px) {\n    .shopping {\n      height: 50px; } }\n.shopping-cart {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n  background-color: #24c3e0;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n  cursor: pointer;\n  /* Extra Small Devices, Phones */ }\n.shopping-cart:hover {\n    background-color: #14b4d1;\n    text-decoration: none; }\n.shopping-cart:focus, .shopping-cart:active, .shopping-cart:visited {\n    text-decoration: none; }\n@media only screen and (max-width: 575px) {\n    .shopping-cart {\n      padding-top: 16px;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      background-color: transparent;\n      text-align: right; }\n      .shopping-cart:hover {\n        background-color: transparent; } }\n.shopping-cart__mobile-icon {\n  display: none;\n  color: #24c3e0;\n  font-size: 2rem;\n  padding-right: 3px;\n  position: relative;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .shopping-cart__mobile-icon {\n      display: inline-block; } }\n.shopping-cart__mobile-icon__number {\n  display: none;\n  font-size: 1rem;\n  position: absolute;\n  top: -1px;\n  right: 8px;\n  width: 100%;\n  font-family: \"ArialRegular\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  color: white;\n  text-shadow: -1px -1px 1px #24c3e0, 1px -1px 1px #24c3e0, -1px 1px 1px #24c3e0, 1px 1px 1px #24c3e0;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .shopping-cart__mobile-icon__number {\n      display: inline-block; } }\n.shopping-cart__items {\n  color: #fff;\n  margin: 5px 0 0 0;\n  /* Extra Small Devices, Phones */ }\n.shopping-cart__items i {\n    padding-right: 5px; }\n@media only screen and (max-width: 575px) {\n    .shopping-cart__items {\n      visibility: hidden; } }\n.shopping-cart__sum {\n  font-size: 2rem;\n  margin: 3px 0 0 0;\n  color: #fff;\n  font-family: \"PF Din Text Comp Pro M\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .shopping-cart__sum {\n      display: none; } }\n.project-footer {\n  width: 100%;\n  padding: 20px 0;\n  border-top: 3px solid #000; }\n.project-footer__row > div {\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 767px) {\n    .project-footer__row > div {\n      margin-bottom: 30px; } }\n@media only screen and (max-width: 575px) {\n    .project-footer__row > div {\n      margin-bottom: 0;\n      margin-top: 25px; } }\n.project-footer__row .project-footer__social-services {\n  /* Small Devices, Tablets */ }\n@media only screen and (max-width: 767px) {\n    .project-footer__row .project-footer__social-services {\n      margin-bottom: 0; } }\n.project-footer__contact-us::before {\n  width: 100%;\n  height: 110%;\n  left: -5%;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  z-index: -10;\n  /* Large Devices, Wide Screens */\n  /* Small Devices, Tablets */ }\n@media only screen and (max-width: 1199px) {\n    .project-footer__contact-us::before {\n      height: 100%; } }\n@media only screen and (max-width: 767px) {\n    .project-footer__contact-us::before {\n      border: none; } }\n.project-footer__social-services::before {\n  border: none;\n  top: -15px;\n  left: -90%;\n  z-index: -10;\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 767px) {\n    .project-footer__social-services::before {\n      width: 280%;\n      border-top: 1px solid #ddd; } }\n@media only screen and (max-width: 575px) {\n    .project-footer__social-services::before {\n      border: none;\n      width: 0; } }\n.project-footer__logo__text {\n  display: inline-block;\n  font-size: 0.9rem;\n  color: #999; }\n.project-footer__logo {\n  width: 70px;\n  display: inline-block;\n  vertical-align: baseline; }\n.project-footer__time-open__text {\n  color: #888;\n  margin-bottom: 0; }\na.project-footer__phone-number {\n  line-height: 1;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    a.project-footer__phone-number {\n      float: none !important; } }\n.project-footer__email {\n  display: block;\n  color: #24c3e0;\n  line-height: 1.7;\n  margin-bottom: 0; }\n.project-footer__email:hover {\n    color: #14b4d1;\n    cursor: pointer; }\na.project-footer__social-service {\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  border: 1px solid #24c3e0;\n  margin-right: 7px;\n  position: relative;\n  /* Large Devices, Wide Screens */\n  /* Medium Devices, Desktops */ }\na.project-footer__social-service i {\n    position: absolute;\n    width: 100%;\n    line-height: 50px;\n    text-align: center;\n    color: #24c3e0;\n    /* Large Devices, Wide Screens */\n    /* Medium Devices, Desktops */ }\na.project-footer__social-service i:hover {\n      color: #fff; }\n@media only screen and (max-width: 1199px) {\n      a.project-footer__social-service i {\n        line-height: 44px; } }\n@media only screen and (max-width: 991px) {\n      a.project-footer__social-service i {\n        line-height: 30px;\n        font-size: 0.9rem; } }\na.project-footer__social-service:hover {\n    background-color: #24c3e0; }\n@media only screen and (max-width: 1199px) {\n    a.project-footer__social-service {\n      width: 44px;\n      height: 44px;\n      border-radius: 22px;\n      margin-right: 5px; } }\n@media only screen and (max-width: 991px) {\n    a.project-footer__social-service {\n      width: 30px;\n      height: 30px;\n      border-radius: 15px;\n      margin-right: 4px; } }\n.navigation-block {\n  height: 50px;\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 767px) {\n    .navigation-block {\n      height: 100px;\n      padding-bottom: 10px; } }\n@media only screen and (max-width: 575px) {\n    .navigation-block {\n      height: 90px;\n      padding-bottom: 0; } }\na.navigation-block--phone, a.project-footer__phone-number {\n  margin-top: 5px;\n  font-size: 2rem;\n  color: #000;\n  font-family: \"PF Din Text Comp Pro R\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    a.navigation-block--phone, a.project-footer__phone-number {\n      float: right; } }\na.navigation-block--phone:visited, a.project-footer__phone-number:visited, a.navigation-block--phone:focus, a.project-footer__phone-number:focus, a.navigation-block--phone:active, a.project-footer__phone-number:active, a.navigation-block--phone:hover, a.project-footer__phone-number:hover {\n    text-decoration: none;\n    color: #000; }\na.navigation-block--phone i, a.project-footer__phone-number i {\n    color: #24c3e0;\n    font-size: 1.5rem; }\n.navigation-block__search {\n  position: relative;\n  z-index: 140;\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 767px) {\n    .navigation-block__search {\n      margin-top: -3px;\n      margin-bottom: 3px; } }\n@media only screen and (max-width: 575px) {\n    .navigation-block__search {\n      margin-top: 0;\n      margin-bottom: 0; } }\n.input-group {\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 3px;\n  background-color: #fff;\n  z-index: 170;\n  height: 32px; }\n.navigation-block__search--button {\n  height: 100%;\n  background-color: #fff;\n  border: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  padding: 7px 3px 0 11px;\n  outline: none; }\n.navigation-block__search--button:focus, .navigation-block__search--button:hover, .navigation-block__search--button:active {\n    background-color: #fff;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    outline: none; }\ni.input-group-btn__i {\n  border: none;\n  color: #24c3e0;\n  -webkit-transform: rotateY(-180deg);\n          transform: rotateY(-180deg);\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear; }\ni.input-group-btn__i:hover {\n    color: #14b4d1; }\n.form-control {\n  border: none;\n  font-size: 1.2rem; }\n.form-control:focus {\n    border: none; }\n.input-group--search-value {\n  position: absolute;\n  top: 5px;\n  left: 34px;\n  width: calc(100% - 34px);\n  background-color: #fff;\n  z-index: 180;\n  display: none;\n  font-size: 1.2rem;\n  color: #464a4c; }\n.ul-search {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  top: 32px;\n  left: 15px;\n  z-index: 160;\n  -webkit-box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);\n  background-color: #fff; }\n.ul-search:last-child {\n    padding-bottom: 15px; }\n.ul-search__li {\n  padding: 15px 35px 0;\n  width: 540px;\n  /* Large Devices, Wide Screens */\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 1199px) {\n    .ul-search__li {\n      width: 450px; } }\n@media only screen and (max-width: 991px) {\n    .ul-search__li {\n      width: 210px; } }\n@media only screen and (max-width: 767px) {\n    .ul-search__li {\n      width: 330px; } }\n@media only screen and (max-width: 575px) {\n    .ul-search__li {\n      width: calc(100vw - 30px); } }\n.ul-search__li--a {\n  z-index: 160;\n  background-color: #fff;\n  text-transform: none;\n  font-family: \"ArialRegular\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  color: #555;\n  font-size: 1.1rem;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n  /* Extra Small Devices, Phones */ }\n.ul-search__li--a:visited, .ul-search__li--a:active, .ul-search__li--a:focus {\n    color: #555;\n    text-decoration: none; }\n.ul-search__li--a:hover {\n    color: #24c3e0;\n    text-decoration: none; }\n@media only screen and (max-width: 575px) {\n    .ul-search__li--a {\n      font-size: 1rem; } }\n.a-is-chosen {\n  color: #24c3e0; }\n.a-is-chosen:hover, .a-is-chosen:visited, .a-is-chosen:active, .a-is-chosen:focus {\n    color: #24c3e0; }\n.navigation-block__logo-block {\n  height: 28px;\n  margin-top: -4px;\n  margin-bottom: 4px;\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 991px) {\n    .navigation-block__logo-block {\n      margin-top: -22px;\n      margin-bottom: 22px;\n      height: 18px; } }\n@media only screen and (max-width: 767px) {\n    .navigation-block__logo-block {\n      height: 5px;\n      margin-top: -50px;\n      margin-bottom: 50px; } }\n@media only screen and (max-width: 575px) {\n    .navigation-block__logo-block {\n      height: 5px;\n      margin-top: -64px;\n      margin-bottom: 76px; } }\na.navigation-block__logo {\n  display: block;\n  width: 134px;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    a.navigation-block__logo {\n      max-width: 90px; } }\na.navigation-block__logo:hover, a.navigation-block__logo:active, a.navigation-block__logo:focus, a.navigation-block__logo:visited {\n    outline: none; }\n.navigation-block__logo--img {\n  width: 100%; }\n.navigation-block__navigation-menu {\n  height: 39px;\n  margin: 0;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .navigation-block__navigation-menu {\n      height: 35px;\n      background-color: #24c3e0;\n      margin-bottom: 17px; } }\n.navigation-block__navigation-menu::before {\n    left: 15px;\n    width: 1110px;\n    border-bottom: 3px solid #000;\n    z-index: -10;\n    /* Large Devices, Wide Screens */\n    /* Medium Devices, Desktops */\n    /* Small Devices, Tablets */\n    /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 1199px) {\n      .navigation-block__navigation-menu::before {\n        width: 930px; } }\n@media only screen and (max-width: 991px) {\n      .navigation-block__navigation-menu::before {\n        width: 690px; } }\n@media only screen and (max-width: 767px) {\n      .navigation-block__navigation-menu::before {\n        width: 510px; } }\n@media only screen and (max-width: 575px) {\n      .navigation-block__navigation-menu::before {\n        left: 0;\n        right: 0;\n        bottom: -17px;\n        top: auto;\n        width: 100vw; } }\n.navigation-block__navigation-menu::after {\n    bottom: 0;\n    top: auto;\n    text-transform: uppercase;\n    font-family: \"PF Din Text Comp Pro M\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n    font-size: 2rem;\n    width: 100%;\n    height: 35px;\n    line-height: 35px;\n    color: #fff;\n    text-align: center;\n    /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n      .navigation-block__navigation-menu::after {\n        content: 'Catalog'; } }\n.navigation-block__navigation-menu:hover .navigation-menu {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.navigation-menu {\n  margin-top: -15px;\n  margin-right: -15px;\n  padding: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  z-index: 130;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .navigation-menu {\n      display: none;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      margin-top: 45px;\n      background-color: #fff; } }\n.navigation-menu__li {\n  z-index: 150;\n  position: relative;\n  display: inline-block;\n  padding: 15px 22px 25px 22px;\n  font-family: \"PF Din Text Comp Pro M\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  font-size: 1.67rem;\n  text-transform: uppercase;\n  margin: 0;\n  line-height: 0.8;\n  cursor: pointer;\n  -webkit-transition: color linear 0.2s;\n  transition: color linear 0.2s;\n  /* Large Devices, Wide Screens */\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 1199px) {\n    .navigation-menu__li {\n      margin-top: 5px;\n      font-size: 1.6rem;\n      padding: 15px 13px 21px 13px; } }\n@media only screen and (max-width: 991px) {\n    .navigation-menu__li {\n      margin-top: 10px;\n      font-size: 1.4rem;\n      padding: 15px 13px 18px 13px; } }\n@media only screen and (max-width: 767px) {\n    .navigation-menu__li {\n      margin-top: 5px;\n      font-size: 1.2rem;\n      padding: 10px 13px 13px 13px;\n      text-align: center;\n      line-height: 1; } }\n@media only screen and (max-width: 575px) {\n    .navigation-menu__li {\n      padding: 15px 22px 15px 22px;\n      font-size: 1.67rem;\n      position: static;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box; } }\n.navigation-menu__li:first-of-type {\n    color: #24c3e0; }\n.navigation-menu__li:last-of-type {\n    /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n      .navigation-menu__li:last-of-type {\n        border-bottom: 4px solid #24c3e0;\n        -webkit-box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.3);\n                box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.3); } }\n.navigation-menu__li:hover {\n    color: #24c3e0;\n    background-color: #fff;\n    -webkit-box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);\n            box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);\n    /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n      .navigation-menu__li:hover {\n        margin-bottom: 15px; } }\n.navigation-submenu-container {\n  position: absolute;\n  top: 55px;\n  left: -20px;\n  z-index: 110;\n  width: 610px;\n  display: none;\n  padding: 0 20px 20px 20px;\n  overflow: hidden;\n  /* Large Devices, Wide Screens */\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 1199px) {\n    .navigation-submenu-container {\n      top: 50px;\n      width: calc(610px - 42px); } }\n@media only screen and (max-width: 991px) {\n    .navigation-submenu-container {\n      top: 45px;\n      width: 530px; } }\n@media only screen and (max-width: 767px) {\n    .navigation-submenu-container {\n      top: 50px;\n      width: 550px; }\n      .navigation-submenu-container:nth-of-type(1) {\n        width: 470px; } }\n@media only screen and (max-width: 575px) {\n    .navigation-submenu-container {\n      width: 100%;\n      height: auto;\n      padding: 0;\n      overflow: hidden;\n      position: static; }\n      .navigation-submenu-container:nth-of-type(1) {\n        width: 100%; } }\n.navigation-submenu-container:hover {\n    display: block; }\n.navigation-submenu {\n  margin-top: -1px;\n  -webkit-column-count: 3;\n          column-count: 3;\n  -webkit-column-gap: 0;\n          column-gap: 0;\n  -webkit-column-fill: balance;\n          column-fill: balance;\n  -webkit-column-rule: 1px solid #e8eeef;\n          column-rule: 1px solid #e8eeef;\n  padding: 15px 0;\n  list-style: none;\n  background-color: #fff;\n  -webkit-box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);\n  text-align: left;\n  z-index: 120;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .navigation-submenu {\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      position: static;\n      -webkit-column-count: 1;\n              column-count: 1;\n      padding-bottom: 0;\n      text-align: center;\n      overflow: hidden; } }\n.new-class-test {\n  display: block; }\n.navigation-submenu__a {\n  display: block;\n  text-transform: none;\n  font-family: \"ArialRegular\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  color: #555;\n  font-size: 1.1rem;\n  padding: 6px 22px;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n  /* Large Devices, Wide Screens */\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 1199px) {\n    .navigation-submenu__a {\n      padding: 6px 15px; } }\n@media only screen and (max-width: 991px) {\n    .navigation-submenu__a {\n      font-size: 1rem; } }\n@media only screen and (max-width: 767px) {\n    .navigation-submenu__a {\n      padding: 5px 15px; } }\n@media only screen and (max-width: 575px) {\n    .navigation-submenu__a {\n      font-size: 1rem;\n      padding: 7px 15px; } }\n.navigation-submenu__a:visited, .navigation-submenu__a:active, .navigation-submenu__a:focus {\n    color: #555;\n    text-decoration: none; }\n.navigation-submenu__a:hover {\n    color: #24c3e0;\n    text-decoration: none; }\n.smartphones-background {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  overflow: hidden; }\n.smartphones-background::before {\n    left: 50%;\n    width: 50%;\n    background-color: #f3f6f6;\n    z-index: -20; }\n.mobile-blocks {\n  height: auto;\n  width: 100%;\n  padding-top: 30px;\n  position: relative; }\n.mobile-blocks::before {\n    top: 0;\n    left: -45px;\n    width: 100%;\n    height: 100%;\n    background-color: #f3f6f6;\n    z-index: -30;\n    /* Small Devices, Tablets */ }\n@media only screen and (max-width: 767px) {\n      .mobile-blocks::before {\n        left: -20px; } }\n@media only screen and (max-width: 575px) {\n    .mobile-blocks {\n      padding-top: 20px; } }\np.mobile-blocks__tags {\n  padding: 0;\n  background-color: #f3f6f6;\n  position: relative;\n  z-index: 10; }\na.breadcrumb-item {\n  color: #555; }\na.breadcrumb-item:hover, a.breadcrumb-item:active {\n    color: #14b4d1;\n    text-decoration: none; }\na.breadcrumb-item:focus, a.breadcrumb-item:visited {\n    text-decoration: none; }\na.breadcrumb-item:before {\n    padding: 0 7px;\n    color: #d3d3d3; }\n.mobile-blocks__tags span.breadcrumb-item.active {\n  color: #888; }\n.mobile-blocks__tags span.breadcrumb-item.active:before {\n    padding: 0 7px;\n    color: #d3d3d3; }\n.mobile-blocks__found {\n  color: #888; }\n.mobile-blocks__sorting {\n  font-size: 1.1rem;\n  color: #888;\n  margin: 18px 0 13px; }\n.mobile-blocks__sorting__span {\n  margin-right: 20px; }\n@media only screen and (max-width: 400px) {\n    .mobile-blocks__sorting__span {\n      margin-right: 10px; } }\n@media only screen and (max-width: 365px) {\n    .mobile-blocks__sorting__span {\n      margin-right: -2px; } }\n.mobile-blocks__sorting__span__a {\n  cursor: pointer;\n  color: #444;\n  position: relative;\n  /* Extra Small Devices, Phones */ }\n.mobile-blocks__sorting__span__a:hover {\n    color: #14b4d1;\n    text-decoration: none; }\n.mobile-blocks__sorting__span__a:visited {\n    text-decoration: none; }\n@media only screen and (max-width: 575px) {\n    .mobile-blocks__sorting__span__a {\n      margin-left: 9px; } }\n.active-for-sorting {\n  font-weight: bold;\n  text-decoration: none;\n  color: #444; }\n.active-for-sorting::after {\n    top: 25px;\n    width: 10px;\n    height: 10px;\n    background-color: #f3f6f6;\n    left: 50%;\n    margin-left: -5px;\n    border-left: 1px solid #c2c5c5;\n    border-bottom: 1px solid #c2c5c5;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    opacity: 1; }\nbutton.mobile-blocks__filter-button {\n  display: none;\n  position: absolute;\n  z-index: 10;\n  top: 122px;\n  right: 15px;\n  width: 70px;\n  height: 32px;\n  background-color: #fff;\n  border: 1px solid #24c3e0;\n  border-radius: 3px;\n  letter-spacing: 0.01rem;\n  font-size: 1rem;\n  color: #000;\n  line-height: 32px;\n  text-decoration: none;\n  text-transform: uppercase;\n  text-align: center;\n  -webkit-transition: all 0.05s linear;\n  transition: all 0.05s linear;\n  -webkit-box-shadow: 7px 0 5px -5px rgba(0, 0, 0, 0.1);\n          box-shadow: 7px 0 5px -5px rgba(0, 0, 0, 0.1);\n  padding: 0;\n  /* Extra Small Devices, Phones */ }\nbutton.mobile-blocks__filter-button:hover {\n    background-color: #24c3e0;\n    color: #fff; }\n@media only screen and (max-width: 575px) {\n    button.mobile-blocks__filter-button {\n      display: block; } }\nhr {\n  width: 100%;\n  size: 1px;\n  color: #c2c5c5; }\nbutton.mobile-blocks__button-other, a.not-found-a {\n  width: 31%;\n  margin: 2.5% 34.5% 6%;\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */ }\n@media only screen and (max-width: 991px) {\n    button.mobile-blocks__button-other, a.not-found-a {\n      width: 47%;\n      margin: 2.5% 26.5% 8.5%; } }\n@media only screen and (max-width: 767px) {\n    button.mobile-blocks__button-other, a.not-found-a {\n      font-size: 1.3rem; } }\n.smartphones {\n  margin-top: 25px;\n  width: 100%;\n  height: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n.smartphone {\n  width: 31%;\n  margin-bottom: 3.5%;\n  background-color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px;\n  position: relative;\n  /* Medium Devices, Desktops */ }\n.smartphone::after {\n    opacity: 0;\n    width: 110%;\n    height: 110%;\n    left: -5%;\n    top: -5%;\n    border: 14px solid #fff;\n    -webkit-box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);\n            box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);\n    -webkit-transition: all 0.2s linear;\n    transition: all 0.2s linear;\n    z-index: -10;\n    /* Small Devices, Tablets */ }\n@media only screen and (max-width: 767px) {\n      .smartphone::after {\n        border: 18px solid #fff; } }\n.smartphone:hover .smartphone__p {\n    color: #24c3e0; }\n.smartphone:hover::after {\n    opacity: 1; }\n.smartphone:hover .smartphone--arrow, .smartphone:hover div#arrow-backward, .smartphone:hover div#arrow-forward {\n    display: block; }\n@media only screen and (max-width: 991px) {\n    .smartphone {\n      width: 47%;\n      margin-bottom: 6%; } }\n.smartphone__slider {\n  width: 100%;\n  height: 164px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  position: relative;\n  /* Large Devices, Wide Screens */\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 1199px) {\n    .smartphone__slider {\n      height: 135px; } }\n@media only screen and (max-width: 991px) {\n    .smartphone__slider {\n      height: 133px; } }\n@media only screen and (max-width: 767px) {\n    .smartphone__slider {\n      height: 94px; } }\n@media only screen and (max-width: 575px) {\n    .smartphone__slider {\n      height: 153px; } }\n@media only screen and (max-width: 520px) {\n    .smartphone__slider {\n      height: 125px; } }\n@media only screen and (max-width: 431px) {\n    .smartphone__slider {\n      height: 100px; } }\n.smartphone__slider > div, .smartphone__slider > a {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n.smartphone__slider--img {\n  opacity: 0;\n  z-index: -10;\n  margin: 0 10%;\n  width: 80%;\n  height: auto;\n  overflow: hidden;\n  display: none;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .smartphone__slider--img {\n      height: 153px;\n      width: auto;\n      margin: 0 auto; } }\n@media only screen and (max-width: 520px) {\n    .smartphone__slider--img {\n      height: 125px; } }\n@media only screen and (max-width: 431px) {\n    .smartphone__slider--img {\n      height: 100px; } }\n.smartphone__slide--active {\n  z-index: 20;\n  opacity: 1;\n  display: block; }\n.smartphone--arrow, div#arrow-backward, div#arrow-forward {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  top: calc(50% - 20px);\n  z-index: 30;\n  display: none;\n  color: #aeb2b3;\n  cursor: pointer;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .smartphone--arrow, div#arrow-backward, div#arrow-forward {\n      display: block; } }\n@media only screen and (max-width: 374px) {\n    .smartphone--arrow, div#arrow-backward, div#arrow-forward {\n      color: #24c3e0; } }\n.smartphone--arrow:hover, div#arrow-backward:hover, div#arrow-forward:hover {\n    color: #000; }\n.smartphone--arrow i, div#arrow-backward i, div#arrow-forward i {\n    margin-top: 13px;\n    margin-left: 13px; }\ndiv#arrow-backward {\n  left: -15px; }\ndiv#arrow-forward {\n  right: -15px;\n  left: auto; }\n.smartphone__a-model {\n  -ms-flex-item-align: left;\n      -ms-grid-row-align: left;\n      align-self: left;\n  width: 100%;\n  border-top: 1px solid #e8eeef; }\n.smartphone__a-model:hover, .smartphone__a-model:active, .smartphone__a-model:focus, .smartphone__a-model:visited {\n    text-decoration: none; }\n.smartphone__p {\n  color: #555;\n  padding-top: 10px;\n  font-size: 1.1rem;\n  margin-bottom: 5px;\n  /* Large Devices, Wide Screens */\n  /* Small Devices, Tablets */ }\n@media only screen and (max-width: 1199px) {\n    .smartphone__p {\n      font-size: 1rem; } }\n@media only screen and (max-width: 767px) {\n    .smartphone__p {\n      margin-bottom: 0; } }\n.smartphone__bottom-info {\n  width: 100%;\n  height: 32px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 767px) {\n    .smartphone__bottom-info {\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      height: 63px;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start; } }\n@media only screen and (max-width: 575px) {\n    .smartphone__bottom-info {\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; } }\n@media only screen and (max-width: 512px) {\n    .smartphone__bottom-info {\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start; } }\n.smartphone__bottom-info__rating {\n  height: 32px;\n  justify-self: flex-start;\n  margin: 0;\n  border-radius: 0;\n  padding: 0;\n  text-align: left;\n  cursor: auto; }\n.smartphone__bottom-info__rating:hover > i {\n    color: #14b4d1; }\n.smartphone__bottom-info__star {\n  color: #24c3e0;\n  line-height: 32px;\n  margin: 0;\n  margin-right: 2px;\n  font-size: 0.9rem;\n  /* Large Devices, Wide Screens */ }\n@media only screen and (max-width: 1199px) {\n    .smartphone__bottom-info__star {\n      font-size: 0.8rem; } }\n.smartphone__bottom-info__price {\n  line-height: 32px;\n  margin: 0 -10px 0 10px;\n  font-family: \"PF Din Text Comp Pro M\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  font-size: 1.8rem;\n  /* Large Devices, Wide Screens */\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 1199px) {\n    .smartphone__bottom-info__price {\n      font-size: 1.7rem;\n      margin: 0; } }\n@media only screen and (max-width: 767px) {\n    .smartphone__bottom-info__price {\n      margin-left: auto; } }\n@media only screen and (max-width: 575px) {\n    .smartphone__bottom-info__price {\n      margin-left: auto;\n      margin-right: 15px; } }\nbutton.smartphone__bottom-info__add-to-card {\n  font-size: 1.3rem;\n  padding: 0 10px;\n  height: 32px;\n  border-radius: 0;\n  /* Large Devices, Wide Screens */\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 1199px) {\n    button.smartphone__bottom-info__add-to-card {\n      font-size: 1.1rem; } }\n@media only screen and (max-width: 767px) {\n    button.smartphone__bottom-info__add-to-card {\n      margin: 0 auto;\n      padding: 0 8px; } }\n@media only screen and (max-width: 575px) {\n    button.smartphone__bottom-info__add-to-card {\n      margin: 0; } }\n@media only screen and (max-width: 512px) {\n    button.smartphone__bottom-info__add-to-card {\n      margin-left: calc(50% - 35.5px); } }\n@media only screen and (max-width: 369px) {\n    button.smartphone__bottom-info__add-to-card {\n      font-size: 1rem; } }\n#sidebar-checkboxes {\n  width: 100%;\n  position: relative;\n  left: 0;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    #sidebar-checkboxes {\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      left: -100vw;\n      width: 100vw;\n      z-index: 240;\n      height: auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      padding-top: 65px;\n      padding-bottom: 25px;\n      line-height: 23px;\n      font-size: 1.3rem;\n      background-color: #fff;\n      overflow: scroll;\n      -webkit-transition: left 0.25s linear;\n      transition: left 0.25s linear; } }\n.sidebar-checkboxes__ul {\n  margin: 0;\n  padding: 30px 0 0 0;\n  list-style: none;\n  font-family: \"PF Din Text Comp Pro R\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  font-size: 1.3rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n  line-height: 23px;\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 767px) {\n    .sidebar-checkboxes__ul {\n      padding: 20px 0 0 0;\n      font-size: 1rem;\n      line-height: 17px; } }\n@media only screen and (max-width: 575px) {\n    .sidebar-checkboxes__ul {\n      line-height: 23px;\n      font-size: 1.3rem;\n      width: 50%; } }\n.sidebar-checkboxes__li {\n  font-family: \"ArialRegular\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  font-size: 1.1rem;\n  text-transform: none;\n  letter-spacing: 0;\n  color: #333;\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 767px) {\n    .sidebar-checkboxes__li {\n      font-size: 0.8rem; } }\n@media only screen and (max-width: 575px) {\n    .sidebar-checkboxes__li {\n      font-size: 1rem; } }\n.sidebar-checkboxes__li span {\n    color: #888; }\n.sidebar-checkboxes__li input {\n    display: none;\n    cursor: pointer; }\n.sidebar-checkboxes__li label {\n    display: block;\n    width: 12px;\n    height: 12px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border: 1px solid rgba(0, 0, 0, 0.15);\n    margin: 5px 11px 0 0;\n    float: left;\n    position: relative;\n    cursor: pointer;\n    /* Small Devices, Tablets */\n    /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 767px) {\n      .sidebar-checkboxes__li label {\n        margin: 2px 11px 0 0; } }\n@media only screen and (max-width: 575px) {\n      .sidebar-checkboxes__li label {\n        margin: 5px 11px 0 0; } }\n.sidebar-checkboxes__li label::before {\n      left: 1px;\n      top: 4px;\n      width: 6px;\n      height: 3px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      background-color: #24c3e0;\n      opacity: 0; }\n.sidebar-checkboxes__li label::after {\n      left: 3px;\n      top: 3px;\n      width: 10px;\n      height: 3px;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n      background-color: #24c3e0;\n      opacity: 0; }\ninput:checked ~ label::before {\n  opacity: 1; }\ninput:checked ~ label::after {\n  opacity: 1; }\ninput:not(checked) ~ label::before {\n  opacity: 0; }\ninput:not(checked) ~ label::after {\n  opacity: 0; }\n.sidebar-checkboxes__filter-buttons {\n  display: none;\n  position: absolute;\n  top: 25px;\n  left: 0;\n  width: 100%;\n  padding: 0 15px;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .sidebar-checkboxes__filter-buttons {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; } }\nbutton.sidebar-checkboxes__filter-button__back, button.sidebar-checkboxes__filter-button__apply {\n  width: 30%;\n  height: 32px;\n  line-height: 32px;\n  background-color: #f3f6f6;\n  border-radius: 3px;\n  text-align: center;\n  font-size: 1rem;\n  letter-spacing: 0.01rem;\n  text-transform: uppercase;\n  border: 1px solid #24c3e0;\n  -webkit-box-shadow: 0 10px 5px -7px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 10px 5px -7px rgba(0, 0, 0, 0.1);\n  padding: 0;\n  -webkit-transition: all linear 0.01s;\n  transition: all linear 0.01s; }\nbutton.sidebar-checkboxes__filter-button__back:focus, button.sidebar-checkboxes__filter-button__apply:focus, button.sidebar-checkboxes__filter-button__back:visited, button.sidebar-checkboxes__filter-button__apply:visited {\n    text-decoration: none; }\nbutton.sidebar-checkboxes__filter-button__back:hover, button.sidebar-checkboxes__filter-button__apply:hover, button.sidebar-checkboxes__filter-button__back:active, button.sidebar-checkboxes__filter-button__apply:active {\n    text-decoration: none;\n    background-color: #24c3e0;\n    color: #fff; }\nbutton.sidebar-checkboxes__filter-button__back i, button.sidebar-checkboxes__filter-button__apply i {\n    margin-right: 10px; }\n.smartphones {\n  margin-top: 25px;\n  width: 100%;\n  height: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n.smartphone {\n  width: 31%;\n  margin-bottom: 3.5%;\n  background-color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px;\n  position: relative;\n  /* Medium Devices, Desktops */ }\n.smartphone::after {\n    opacity: 0;\n    width: 110%;\n    height: 110%;\n    left: -5%;\n    top: -5%;\n    border: 14px solid #fff;\n    -webkit-box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);\n            box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);\n    -webkit-transition: all 0.2s linear;\n    transition: all 0.2s linear;\n    z-index: -10;\n    /* Small Devices, Tablets */ }\n@media only screen and (max-width: 767px) {\n      .smartphone::after {\n        border: 18px solid #fff; } }\n.smartphone:hover .smartphone__p {\n    color: #24c3e0; }\n.smartphone:hover::after {\n    opacity: 1; }\n.smartphone:hover .smartphone--arrow, .smartphone:hover div#arrow-backward, .smartphone:hover div#arrow-forward {\n    display: block; }\n@media only screen and (max-width: 991px) {\n    .smartphone {\n      width: 47%;\n      margin-bottom: 6%; } }\n.smartphone__slider {\n  width: 100%;\n  height: 164px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  position: relative;\n  /* Large Devices, Wide Screens */\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 1199px) {\n    .smartphone__slider {\n      height: 135px; } }\n@media only screen and (max-width: 991px) {\n    .smartphone__slider {\n      height: 133px; } }\n@media only screen and (max-width: 767px) {\n    .smartphone__slider {\n      height: 94px; } }\n@media only screen and (max-width: 575px) {\n    .smartphone__slider {\n      height: 153px; } }\n@media only screen and (max-width: 520px) {\n    .smartphone__slider {\n      height: 125px; } }\n@media only screen and (max-width: 431px) {\n    .smartphone__slider {\n      height: 100px; } }\n.smartphone__slider > div, .smartphone__slider > a {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n.smartphone__slider--img {\n  opacity: 0;\n  z-index: -10;\n  margin: 0 10%;\n  width: 80%;\n  height: auto;\n  overflow: hidden;\n  display: none;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .smartphone__slider--img {\n      height: 153px;\n      width: auto;\n      margin: 0 auto; } }\n@media only screen and (max-width: 520px) {\n    .smartphone__slider--img {\n      height: 125px; } }\n@media only screen and (max-width: 431px) {\n    .smartphone__slider--img {\n      height: 100px; } }\n.smartphone__slide--active {\n  z-index: 20;\n  opacity: 1;\n  display: block; }\n.smartphone--arrow, div#arrow-backward, div#arrow-forward {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  top: calc(50% - 20px);\n  z-index: 30;\n  display: none;\n  color: #aeb2b3;\n  cursor: pointer;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .smartphone--arrow, div#arrow-backward, div#arrow-forward {\n      display: block; } }\n@media only screen and (max-width: 374px) {\n    .smartphone--arrow, div#arrow-backward, div#arrow-forward {\n      color: #24c3e0; } }\n.smartphone--arrow:hover, div#arrow-backward:hover, div#arrow-forward:hover {\n    color: #000; }\n.smartphone--arrow i, div#arrow-backward i, div#arrow-forward i {\n    margin-top: 13px;\n    margin-left: 13px; }\ndiv#arrow-backward {\n  left: -15px; }\ndiv#arrow-forward {\n  right: -15px;\n  left: auto; }\n.smartphone__a-model {\n  -ms-flex-item-align: left;\n      -ms-grid-row-align: left;\n      align-self: left;\n  width: 100%;\n  border-top: 1px solid #e8eeef; }\n.smartphone__a-model:hover, .smartphone__a-model:active, .smartphone__a-model:focus, .smartphone__a-model:visited {\n    text-decoration: none; }\n.smartphone__p {\n  color: #555;\n  padding-top: 10px;\n  font-size: 1.1rem;\n  margin-bottom: 5px;\n  /* Large Devices, Wide Screens */\n  /* Small Devices, Tablets */ }\n@media only screen and (max-width: 1199px) {\n    .smartphone__p {\n      font-size: 1rem; } }\n@media only screen and (max-width: 767px) {\n    .smartphone__p {\n      margin-bottom: 0; } }\n.smartphone__bottom-info {\n  width: 100%;\n  height: 32px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 767px) {\n    .smartphone__bottom-info {\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      height: 63px;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start; } }\n@media only screen and (max-width: 575px) {\n    .smartphone__bottom-info {\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; } }\n@media only screen and (max-width: 512px) {\n    .smartphone__bottom-info {\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start; } }\n.smartphone__bottom-info__rating {\n  height: 32px;\n  justify-self: flex-start;\n  margin: 0;\n  border-radius: 0;\n  padding: 0;\n  text-align: left;\n  cursor: auto; }\n.smartphone__bottom-info__rating:hover > i {\n    color: #14b4d1; }\n.smartphone__bottom-info__star {\n  color: #24c3e0;\n  line-height: 32px;\n  margin: 0;\n  margin-right: 2px;\n  font-size: 0.9rem;\n  /* Large Devices, Wide Screens */ }\n@media only screen and (max-width: 1199px) {\n    .smartphone__bottom-info__star {\n      font-size: 0.8rem; } }\n.smartphone__bottom-info__price {\n  line-height: 32px;\n  margin: 0 -10px 0 10px;\n  font-family: \"PF Din Text Comp Pro M\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  font-size: 1.8rem;\n  /* Large Devices, Wide Screens */\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 1199px) {\n    .smartphone__bottom-info__price {\n      font-size: 1.7rem;\n      margin: 0; } }\n@media only screen and (max-width: 767px) {\n    .smartphone__bottom-info__price {\n      margin-left: auto; } }\n@media only screen and (max-width: 575px) {\n    .smartphone__bottom-info__price {\n      margin-left: auto;\n      margin-right: 15px; } }\nbutton.smartphone__bottom-info__add-to-card {\n  font-size: 1.3rem;\n  padding: 0 10px;\n  height: 32px;\n  border-radius: 0;\n  /* Large Devices, Wide Screens */\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 1199px) {\n    button.smartphone__bottom-info__add-to-card {\n      font-size: 1.1rem; } }\n@media only screen and (max-width: 767px) {\n    button.smartphone__bottom-info__add-to-card {\n      margin: 0 auto;\n      padding: 0 8px; } }\n@media only screen and (max-width: 575px) {\n    button.smartphone__bottom-info__add-to-card {\n      margin: 0; } }\n@media only screen and (max-width: 512px) {\n    button.smartphone__bottom-info__add-to-card {\n      margin-left: calc(50% - 35.5px); } }\n@media only screen and (max-width: 369px) {\n    button.smartphone__bottom-info__add-to-card {\n      font-size: 1rem; } }\n.product {\n  padding: 30px 0;\n  background-color: #f3f6f6; }\n.mobile-blocks__h1 {\n  margin: 14px 0 16px; }\n.product__slider {\n  position: relative;\n  height: 350px;\n  width: 350px;\n  margin-left: 95px;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .product__slider {\n      margin-left: 110px; } }\n@media only screen and (max-width: 505px) {\n    .product__slider {\n      margin: 0 auto; } }\n@media only screen and (max-width: 379px) {\n    .product__slider {\n      height: 345px;\n      width: 345px; } }\n@media only screen and (max-width: 374px) {\n    .product__slider {\n      height: 290px;\n      width: 290px; } }\n.images__for__sliders, .product__slider__img, .product__img-controls__image {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center; }\n.product__slider__img {\n  width: 100%;\n  height: 100%;\n  display: block; }\n.product__side-controls, .to-back, .to-top {\n  top: 5px;\n  right: 0;\n  position: absolute;\n  display: block;\n  background-color: #fff;\n  border: 1px solid #c1cccf;\n  cursor: pointer;\n  z-index: 10; }\n.to-back {\n  right: 39px;\n  width: 30px;\n  height: 30px; }\n.to-back::before {\n    left: -12px;\n    top: 6px;\n    height: 0;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n    border-right: 8px solid #c1cccf; }\n.to-back::after {\n    left: -8px;\n    top: 6px;\n    height: 0;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n    border-right: 8px solid #fff; }\n.to-back:hover::before {\n    border-right: 8px solid #000; }\n.to-top {\n  right: 10px;\n  width: 30px;\n  height: 30px; }\n.to-top::before {\n    left: 12px;\n    top: 6px;\n    height: 0;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n    border-left: 8px solid #c1cccf; }\n.to-top::after {\n    left: 8px;\n    top: 6px;\n    height: 0;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n    border-left: 8px solid #fff; }\n.to-top:hover::before {\n    border-left: 8px solid #000; }\n.product__img-controls {\n  position: absolute;\n  width: 85px;\n  height: calc(100% - 16px);\n  top: 8px;\n  left: -95px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n@media only screen and (max-width: 505px) {\n    .product__img-controls {\n      display: none; } }\n.product__img-controls__image {\n  width: 70px;\n  height: 70px; }\n.product__vertical-controls {\n  top: 0;\n  left: -66px;\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 100%;\n  cursor: pointer;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 505px) {\n    .product__vertical-controls {\n      display: none; } }\n.vert-slides-up {\n  position: absolute;\n  top: 0;\n  border-bottom: 5px solid #c1cccf;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent; }\n.vert-slides-up:hover {\n    border-bottom: 5px solid #000; }\n.vert-slides-down {\n  position: absolute;\n  bottom: 0;\n  border-top: 5px solid #c1cccf;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent; }\n.vert-slides-down:hover {\n    border-top: 5px solid #000; }\n.product__info-block {\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */ }\n@media only screen and (max-width: 991px) {\n    .product__info-block {\n      padding-left: 15px; } }\n@media only screen and (max-width: 767px) {\n    .product__info-block {\n      padding: 0 15px;\n      margin-top: 25px; } }\n.product__info-block__rating-stars {\n  color: #24c3e0;\n  cursor: pointer;\n  position: relative; }\n.product__info-block__rating-stars:hover > .product__info-block__rating-stars__star {\n    color: #14b4d1; }\n.product__info-block__rating-stars--change-rating {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n  width: 100vw;\n  height: 100vh;\n  cursor: auto;\n  opacity: 0; }\n.change-rating--container {\n  position: absolute;\n  left: calc(50vw - 100px);\n  top: calc(50vh - 50px);\n  width: 200px;\n  height: auto;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 3px;\n  padding: 15px 0 20px 0;\n  text-align: center;\n  -webkit-box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1); }\n.change-rating--container i {\n    cursor: pointer; }\n.change-rating--container i:hover ~ i {\n      opacity: 0.15; }\n.change-rating--close {\n  position: absolute;\n  font-size: 1.5rem;\n  color: #888;\n  top: 2px;\n  right: 5px;\n  cursor: pointer; }\n.product__info-block__rating-stars__star {\n  margin-right: 2px; }\n.product__info-block__rating-number {\n  color: #999;\n  margin-left: 3px; }\n.product__info-block__rating-number i {\n    font-style: normal; }\n.product__info-block__stock {\n  margin-left: 19%;\n  color: #62b14f;\n  font-family: \"ArialBold\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */ }\n@media only screen and (max-width: 991px) {\n    .product__info-block__stock {\n      margin-left: 0;\n      float: right; } }\n@media only screen and (max-width: 767px) {\n    .product__info-block__stock {\n      margin-left: 19%;\n      float: none; } }\n.product__info-block__text {\n  margin: 15px 0;\n  color: #333;\n  font-size: 1.1rem; }\n.product__info-block__form {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  font-size: 1rem;\n  color: #999; }\n.product__info-block__form__select-storage-size, .product__info-block__form__price {\n  width: 20%;\n  margin-right: 6.4%;\n  margin-bottom: 25px;\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */ }\n@media only screen and (max-width: 991px) {\n    .product__info-block__form__select-storage-size, .product__info-block__form__price {\n      width: 100%;\n      margin-right: 0;\n      margin-bottom: 15px; } }\n@media only screen and (max-width: 767px) {\n    .product__info-block__form__select-storage-size, .product__info-block__form__price {\n      width: 25.6%;\n      margin-right: 6.4%;\n      margin-bottom: 25px; } }\n.product__info-block__form__select-color, button.product__info-block__form__submit {\n  width: 65%;\n  margin-right: 0;\n  margin-bottom: 25px;\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */ }\n@media only screen and (max-width: 991px) {\n    .product__info-block__form__select-color, button.product__info-block__form__submit {\n      width: 100%;\n      margin-right: 0;\n      margin-bottom: 15px; } }\n@media only screen and (max-width: 767px) {\n    .product__info-block__form__select-color, button.product__info-block__form__submit {\n      width: 68%;\n      margin-right: 0;\n      margin-bottom: 25px; } }\n.product-select {\n  position: relative;\n  width: 100%;\n  border: none;\n  color: #333;\n  padding: 0;\n  margin: 5px 0;\n  cursor: pointer; }\n.product-select::before {\n    top: 14px;\n    right: 6px;\n    left: auto;\n    width: 0;\n    height: 0;\n    border-right: 5px solid transparent;\n    border-top: 5px solid #c1cccf;\n    border-left: 5px solid transparent;\n    cursor: pointer; }\n.product-select:hover {\n    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);\n            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1); }\n.product-select:hover::before {\n      border-bottom: 5px solid #c1cccf;\n      border-top: none; }\n.product-select:hover > .product-select__ul {\n    -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);\n            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1); }\n.product-select__ul {\n  width: 100%;\n  position: absolute;\n  top: 33px;\n  display: none;\n  padding: 1px 0 0 0;\n  z-index: 20;\n  border-top: 1px solid #f3f6f6; }\n.second-select {\n  font-size: 1.1rem;\n  list-style: none;\n  background-color: #fff;\n  padding: 7px;\n  margin: 0;\n  -webkit-transition: color 0.1s linear;\n  transition: color 0.1s linear; }\n.second-select:hover {\n    color: #24c3e0; }\n.first-select {\n  font-size: 1.1rem;\n  display: block;\n  padding: 7px;\n  border-bottom: none;\n  background-color: #fff; }\n.color-select {\n  position: relative; }\n.color-select::before {\n    top: 14px;\n    right: 6px;\n    left: auto;\n    width: 0;\n    height: 0;\n    border-right: 5px solid transparent;\n    border-top: 5px solid #c1cccf;\n    border-left: 5px solid transparent;\n    cursor: pointer; }\n.color-select:hover {\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n.color-select:hover::before {\n      border-bottom: none;\n      border-top: 5px solid #c1cccf; }\n.product__info-block__form__price {\n  font-family: \"PF Din Text Comp Pro M\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  font-size: 2.5rem;\n  color: #000; }\n.product__info-block__form__price::before, .product__info-block__form__price::after {\n    display: none; }\nbutton.product__info-block__form__submit {\n  cursor: pointer;\n  padding: 0;\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */ }\n@media only screen and (max-width: 991px) {\n    button.product__info-block__form__submit {\n      width: 100%;\n      margin-right: 0;\n      margin-bottom: 15px;\n      line-height: 43px; } }\n@media only screen and (max-width: 767px) {\n    button.product__info-block__form__submit {\n      width: 68%;\n      margin-right: 0;\n      margin-bottom: 25px; } }\n.product__sidebar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  /* Large Devices, Wide Screens */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 1199px) {\n    .product__sidebar {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      margin-top: 40px; } }\n@media only screen and (max-width: 575px) {\n    .product__sidebar {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      margin-top: 15px; } }\n.product__sidebar__item {\n  background-color: #fff;\n  padding: 13px;\n  margin-bottom: 8px;\n  /* Large Devices, Wide Screens */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 1199px) {\n    .product__sidebar__item {\n      width: calc((100% - 15px*4)/3); } }\n@media only screen and (max-width: 575px) {\n    .product__sidebar__item {\n      width: 100%; } }\n.product__sidebar__item__title {\n  font-size: 1.7rem;\n  margin-right: 15px;\n  color: white;\n  text-shadow: -1px -1px 0 #24c3e0, 1px -1px 0 #24c3e0, -1px 1px 0 #24c3e0, 1px 1px 0 #24c3e0; }\n.product__sidebar__item__text {\n  color: #555;\n  margin-bottom: 0; }\n.not-found {\n  width: 100%;\n  height: 70vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  text-align: center;\n  background-color: #f3f6f6;\n  min-height: calc(100vh - 30px - 77px - 43px);\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 767px) {\n    .not-found {\n      min-height: calc(100vh - 30px - 164px - 43px); } }\n@media only screen and (max-width: 575px) {\n    .not-found {\n      min-height: calc(100vh - 30px - 296px - 43px); } }\na.not-found-a {\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    a.not-found-a {\n      width: 100%;\n      margin: 10px 0 0 0; } }\n.shopping-list {\n  padding-top: 25px;\n  background-color: #f3f6f6; }\n.shopping-list__table-title {\n  border-bottom: 2px solid #000;\n  margin: 0 15px;\n  padding: 20px 0 8px 0;\n  width: calc(100% - 30px); }\n.shopping-list__table-title__product-name {\n  color: #888;\n  font-size: 1.1rem; }\n.shopping-list__table-title__price {\n  /* Extra Small Devices, Phones */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .shopping-list__table-title__price {\n      padding-left: 7.5px; } }\n@media only screen and (max-width: 479px) {\n    .shopping-list__table-title__price {\n      margin-left: -20px; } }\n.shopping-list__ul__li {\n  position: relative;\n  margin-left: 0;\n  width: 100%;\n  background-color: #fff;\n  border-bottom: 1px solid #c2c5c5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px;\n  color: #555;\n  font-size: 1.1rem;\n  font-family: \"ArialBold\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  -webkit-box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1); }\n.shopping-list__ul__li__index {\n  position: absolute;\n  top: calc(50% - 19px/2);\n  left: 20px;\n  z-index: 10;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .shopping-list__ul__li__index {\n      left: 15px; } }\n.shopping-list__ul__li__info {\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 479px) {\n    .shopping-list__ul__li__info {\n      padding-right: 20px;\n      padding-left: 10px;\n      font-size: 1rem; } }\n.shopping-list__ul__li__price {\n  font-size: 1.3rem;\n  padding-left: 25px;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 479px) {\n    .shopping-list__ul__li__price {\n      margin-left: -20px; } }\nbutton.delete-model-from-shopping-cart {\n  position: absolute;\n  top: calc(50% - 32px/2);\n  right: 20px;\n  z-index: 10;\n  font-family: \"PF Din Text Comp Pro M\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  font-size: 1.2rem;\n  letter-spacing: 0.07rem;\n  padding: 0 15px;\n  height: 32px;\n  border-radius: 0;\n  border: 1px solid #24c3e0;\n  /* Large Devices, Wide Screens */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 1199px) {\n    button.delete-model-from-shopping-cart {\n      font-size: 1.1rem; } }\n@media only screen and (max-width: 575px) {\n    button.delete-model-from-shopping-cart {\n      display: none; } }\nbutton.delete-model-from-shopping-cart-xs {\n  display: none;\n  position: absolute;\n  top: calc(50% - 20px/2);\n  right: 20px;\n  padding: 0 5px;\n  font-size: 1.5rem;\n  height: 20px;\n  width: 20px;\n  line-height: 0;\n  z-index: 20;\n  background-color: #fff;\n  color: #24c3e0;\n  font-family: \"PF Din Text Comp Pro M\", \"Arial\", \"Helvetica Neue\", \"Helvetica\", serif;\n  border-radius: 50%;\n  border: 1px solid #24c3e0;\n  /* Extra Small Devices, Phones */\n  /* Extra Small Devices, Phones */ }\nbutton.delete-model-from-shopping-cart-xs:before {\n    top: 4px;\n    left: 8.5px;\n    right: auto;\n    width: 1px;\n    height: 10px;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    background-color: #24c3e0; }\nbutton.delete-model-from-shopping-cart-xs:after {\n    top: 4px;\n    right: 8.5px;\n    left: auto;\n    width: 1px;\n    height: 10px;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    background-color: #24c3e0; }\nbutton.delete-model-from-shopping-cart-xs:hover, button.delete-model-from-shopping-cart-xs:active, button.delete-model-from-shopping-cart-xs:focus {\n    background-color: #24c3e0;\n    color: #fff; }\n@media only screen and (max-width: 575px) {\n    button.delete-model-from-shopping-cart-xs {\n      display: block; } }\n@media only screen and (max-width: 480px) {\n    button.delete-model-from-shopping-cart-xs {\n      right: 10px; } }\nh3.shopping-list__total-price {\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\nh3.shopping-list__total-price span {\n    color: #24c3e0; }\n@media only screen and (max-width: 991px) {\n    h3.shopping-list__total-price {\n      font-size: 1.8rem; } }\n@media only screen and (max-width: 767px) {\n    h3.shopping-list__total-price {\n      font-size: 1.5rem; } }\n@media only screen and (max-width: 575px) {\n    h3.shopping-list__total-price {\n      text-align: right; } }\n.shopping-list__buttons {\n  margin: 30px 15px 50px 0;\n  width: 100%;\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .shopping-list__buttons {\n      margin: 10px 15px 30px 0; } }\n.shopping-list__buttons__checkout, .shopping-list__buttons__continue {\n  /* Extra Small Devices, Phones */\n  /* Extra Small Devices, Phones */\n  /* Extra Small Devices, Phones */ }\n@media only screen and (max-width: 575px) {\n    .shopping-list__buttons__checkout, .shopping-list__buttons__continue {\n      font-size: 1.2rem; } }\n@media only screen and (max-width: 479px) {\n    .shopping-list__buttons__checkout, .shopping-list__buttons__continue {\n      font-size: 1.1rem; } }\n@media only screen and (max-width: 374px) {\n    .shopping-list__buttons__checkout, .shopping-list__buttons__continue {\n      font-size: 0.9rem; } }\n.search-results {\n  padding: 30px 0;\n  background-color: #f3f6f6; }\n.container-search-results {\n  padding-right: 0; }\na.breadcrumb-item--search-result {\n  color: #888; }\n.search-results--h1 {\n  margin-top: 0; }\n.search-results--h1 span {\n    color: #24c3e0; }\n.smartphones-search-result {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n.smartphone--search-result {\n  width: 22.75%;\n  margin-bottom: 2.25%;\n  margin-right: 2.25%;\n  /* Medium Devices, Desktops */\n  /* Small Devices, Tablets */\n  /* Extra Small Devices, Phones */ }\n.smartphone--search-result::after {\n    z-index: 0; }\n.smartphone--search-result .smartphone__slider, .smartphone--search-result button {\n    z-index: 10; }\n.smartphone--search-result #arrow-backward, .smartphone--search-result #arrow-forward {\n    z-index: 20; }\n.smartphone--search-result a.smartphone__a-model {\n    z-index: 30; }\n@media only screen and (max-width: 991px) {\n    .smartphone--search-result {\n      width: 30%;\n      margin-right: 3.25%;\n      margin-bottom: 3.25%; } }\n@media only screen and (max-width: 767px) {\n    .smartphone--search-result {\n      width: 29.5%;\n      margin-right: 3%;\n      margin-bottom: 3%; } }\n@media only screen and (max-width: 575px) {\n    .smartphone--search-result {\n      width: 47%;\n      margin-bottom: 6%; } }\n.info--search-result {\n  font-size: 1.5rem; }\n.info--search-result span {\n    font-weight: bold; }\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDeqQmjNE0cjhrz6-lZhPBsad9fxWqeHng",
        authDomain: "techshop-12812.firebaseapp.com",
        databaseURL: "https://techshop-12812.firebaseio.com",
        projectId: "techshop-12812",
        storageBucket: "techshop-12812.appspot.com",
        messagingSenderId: "663902461814"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map