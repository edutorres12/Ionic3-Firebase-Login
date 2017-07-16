webpackJsonp([4],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageModule", function() { return InboxPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inbox__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InboxPageModule = (function () {
    function InboxPageModule() {
    }
    return InboxPageModule;
}());
InboxPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__inbox__["a" /* InboxPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inbox__["a" /* InboxPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__inbox__["a" /* InboxPage */]
        ]
    })
], InboxPageModule);

//# sourceMappingURL=inbox.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MESSAGE_LIST; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profiles_profiles__ = __webpack_require__(318);

var userList = __WEBPACK_IMPORTED_MODULE_0__profiles_profiles__["a" /* USER_LIST */];
var messageList = [];
userList.forEach(function (user) {
    messageList.push({ user: user, date: new Date(), lastMessage: 'kasdkas aks' });
});
// const messageList : Message[] = [
//     { user: userList[0], date: new Date() },
//     { user: userList[1], date: new Date() },
//     { user: userList[2], date: new Date() },
//     { user: userList[3], date: new Date() }
// ];
var MESSAGE_LIST = messageList;
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_LIST; });
var userList = [
    { firstName: 'Eduardo', lastName: 'Torres', email: 'eduk_1012@hotmail.com', avatar: 'assets/img/logo.png', dateOfBirth: new Date() },
    { firstName: 'Jio', lastName: 'Krilin', email: 'jio@hotmail.com', avatar: 'assets/img/logo.png', dateOfBirth: new Date() },
    { firstName: 'Damian', lastName: 'Mian', email: 'damian@hotmail.com', avatar: 'assets/img/logo.png', dateOfBirth: new Date() },
    { firstName: 'Edgar', lastName: 'Torres', email: 'blast_edgar@hotmail.com', avatar: 'assets/img/logo.png', dateOfBirth: new Date() },
];
var USER_LIST = userList;
//# sourceMappingURL=profiles.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_messages_messages__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InboxPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InboxPage = (function () {
    function InboxPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messageList = __WEBPACK_IMPORTED_MODULE_2__mocks_messages_messages__["a" /* MESSAGE_LIST */];
    }
    InboxPage.prototype.ionViewDidLoad = function () {
        console.log(this.messageList);
    };
    return InboxPage;
}());
InboxPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-inbox',template:/*ion-inline-start:"C:\Users\Eduardo\Projects\jnixChat\src\pages\inbox\inbox.html"*/'<!--\n  Generated template for the InboxPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Inbox</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let message of messageList">\n      <ion-avatar item-left>\n        <img [src]="message.user.avatar" alt="Avatar">\n      </ion-avatar>\n      <h2> {{message.user.firstName}} {{message.user.lastName}} </h2>\n      <p>{{message.lastMessage}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Eduardo\Projects\jnixChat\src\pages\inbox\inbox.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], InboxPage);

//# sourceMappingURL=inbox.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map