webpackJsonp([2],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_form_edit_profile_form_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view_component__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */], __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__["a" /* RegisterFormComponent */], __WEBPACK_IMPORTED_MODULE_4__edit_form_edit_profile_form_component__["a" /* EditProfileFormComponent */], __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view_component__["a" /* ProfileViewComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */], __WEBPACK_IMPORTED_MODULE_3__register_form_register_form_component__["a" /* RegisterFormComponent */], __WEBPACK_IMPORTED_MODULE_4__edit_form_edit_profile_form_component__["a" /* EditProfileFormComponent */], __WEBPACK_IMPORTED_MODULE_5__profile_view_profile_view_component__["a" /* ProfileViewComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data_service__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the EditComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var EditProfileFormComponent = (function () {
    function EditProfileFormComponent(auth, data) {
        var _this = this;
        this.auth = auth;
        this.data = data;
        this.profile = {};
        this.saveProfileResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        this.authenticatedUser$ = this.auth.getAutenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
    }
    EditProfileFormComponent.prototype.ngOnDestroy = function () {
        this.authenticatedUser$.unsubscribe();
    };
    EditProfileFormComponent.prototype.saveProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authenticatedUser) return [3 /*break*/, 2];
                        this.profile.email = this.authenticatedUser.email;
                        return [4 /*yield*/, this.data.saveProfile(this.authenticatedUser, this.profile)];
                    case 1:
                        result = _a.sent();
                        this.saveProfileResult.emit(result);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return EditProfileFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */])
], EditProfileFormComponent.prototype, "saveProfileResult", void 0);
EditProfileFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-edit-profile-form',template:/*ion-inline-start:"C:\Users\Eduardo\Projects\jnixChat\src\components\edit-form\edit-profile-form.component.html"*/'<!-- Generated template for the EditComponent component -->\n<ion-card>    \n  <ion-card-content>\n    <ion-item>\n      <ion-label floating>First Name</ion-label>\n      <ion-input type="text" [(ngModel)]="profile.firstName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Last Name</ion-label>\n      <ion-input type="text" [(ngModel)]="profile.lastName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Date of Birth</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="profile.dateOfBirth"></ion-datetime>\n    </ion-item>\n  </ion-card-content>\n</ion-card>\n<button ion-button (click)="saveProfile()">Save</button>'/*ion-inline-end:"C:\Users\Eduardo\Projects\jnixChat\src\components\edit-form\edit-profile-form.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__providers_data_data_service__["a" /* DataService */]])
], EditProfileFormComponent);

//# sourceMappingURL=edit-profile-form.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var LoginFormComponent = (function () {
    function LoginFormComponent(auth, navCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.account = {};
        this.loginStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
    }
    LoginFormComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.signInWithEmailAndPassword(this.account)];
                    case 1:
                        result = _a.sent();
                        this.loginStatus.emit(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    // navigateToPage(pageName: string){
    //  pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
    // }
    LoginFormComponent.prototype.navigateToRegisterPage = function () {
        this.navCtrl.push('RegisterPage');
    };
    return LoginFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */])
], LoginFormComponent.prototype, "loginStatus", void 0);
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-login-form',template:/*ion-inline-start:"C:\Users\Eduardo\Projects\jnixChat\src\components\login-form\login-form.component.html"*/'<form #loginForm="ngForm" novalidate>\n\n<ion-card>\n  <ion-card-content>\n <ion-item>\n      <ion-label floating>Email Address</ion-label>\n      <ion-input [(ngModel)]="account.email" type="email" name="email" #email="ngModel" required pattern="[a-z0-9!#$%&\'*+/=?^_`{\}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{\}~-]+)*@(?:[a-z0-9](?:[a-z0-9]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"></ion-input>\n    </ion-item>\n    <div padding *ngIf="email.invalid && email.dirty">\n      <span class="global__input-error">Email address is not valid</span>\n    </div>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input [(ngModel)]="account.password" type="password" name="password" #password="ngModel" required pattern="(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,}$"></ion-input>\n    </ion-item>\n    <div padding *ngIf="password.invalid && password.dirty">\n      <span class="global__input-error">Password must be at least 6 characters and have one uppercase letter.</span>\n    </div>\n  </ion-card-content>\n  <ion-row class="login-form__buttons"> \n    <div>\n      <button ion-button (click)="navigateToRegisterPage(\'RegisterPage\')" color="secondary">Register</button>\n      <button ion-button (click)="login()" color="primary" [disabled]="loginForm.invalid">Login</button>\n     </div>\n  </ion-row>\n</ion-card>\n</form>'/*ion-inline-end:"C:\Users\Eduardo\Projects\jnixChat\src\components\login-form\login-form.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], LoginFormComponent);

//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileViewComponent = (function () {
    function ProfileViewComponent(loading, data, auth) {
        this.loading = loading;
        this.data = data;
        this.auth = auth;
        this.loader = this.loading.create({
            content: 'Loading profile...'
        });
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader.present();
        this.auth.getAutenticatedUser().subscribe(function (user) {
            _this.data.getProfile(user).subscribe(function (profile) {
                _this.userProfile = profile.val();
                _this.loader.dismiss();
            });
        });
    };
    return ProfileViewComponent;
}());
ProfileViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-profile-view',template:/*ion-inline-start:"C:\Users\Eduardo\Projects\jnixChat\src\components\profile-view\profile-view.component.html"*/'<div class="profile-view__image-container">\n\n    \n\n    <img class="profile-view__image" src="assets/img/profile-placeholder.png" alt="">\n\n\n\n</div>\n\n\n\n<div>\n\n    <div *ngIf="userProfile">\n\n        <ion-card-content>\n\n           <ion-item>\n\n               <ion-label floating>First Name</ion-label>\n\n               <ion-input [value]="userProfile.email" [readonly]="true"></ion-input>\n\n           </ion-item>\n\n           <ion-item>\n\n               <ion-label floating>Last Name</ion-label>\n\n               <ion-input [value]="userProfile.firstName" [readonly]="true"></ion-input>\n\n           </ion-item>   \n\n           <ion-item>\n\n               <ion-label floating>Last Name</ion-label>\n\n               <ion-input [value]="userProfile.lastName" [readonly]="true"></ion-input>\n\n           </ion-item>   \n\n           <ion-item>\n\n               <ion-label floating>Last Name</ion-label>\n\n               <ion-input [value]="userProfile.dateOfBirth" [readonly]="true"></ion-input>\n\n           </ion-item>                               \n\n        </ion-card-content>\n\n    </div>\n\n</div>'/*ion-inline-end:"C:\Users\Eduardo\Projects\jnixChat\src\components\profile-view\profile-view.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthService */]])
], ProfileViewComponent);

//# sourceMappingURL=profile-view.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var RegisterFormComponent = (function () {
    function RegisterFormComponent(auth) {
        this.auth = auth;
        this.account = {};
        this.registerStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
    }
    RegisterFormComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.auth.createUserWithEmailAndPassword(this.account)];
                    case 1:
                        result = _a.sent();
                        this.registerStatus.emit(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        this.registerStatus.emit(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return RegisterFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */])
], RegisterFormComponent.prototype, "registerStatus", void 0);
RegisterFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-register-form',template:/*ion-inline-start:"C:\Users\Eduardo\Projects\jnixChat\src\components\register-form\register-form.component.html"*/'\n<form #registerForm="ngForm" action="" novalidate>\n<ion-card>\n  <ion-card-content>\n <ion-item>\n      <ion-label floating>Email Address</ion-label>\n      <ion-input [(ngModel)]="account.email" type="email" name="email" #email="ngModel" required pattern="[a-z0-9!#$%&\'*+/=?^_`{\}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{\}~-]+)*@(?:[a-z0-9](?:[a-z0-9]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"></ion-input>\n    </ion-item>\n    <div padding *ngIf="email.invalid && email.dirty">\n      <span class="global__input-error">Email address is not valid</span>\n    </div>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input [(ngModel)]="account.password" type="password" name="password" #password="ngModel" required pattern="(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,}$"></ion-input>\n    </ion-item>\n    <div padding *ngIf="password.invalid && password.dirty">\n      <span class="global__input-error">Password must be at least 6 characters and have one uppercase letter.</span>\n    </div>\n  </ion-card-content>\n  <ion-row class="login-form__buttons">\n    <button ion-button (click)="register()" [disabled]="registerForm.invalid">Register</button>\n  </ion-row>\n</ion-card>\n</form>'/*ion-inline-end:"C:\Users\Eduardo\Projects\jnixChat\src\components\register-form\register-form.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthService */]])
], RegisterFormComponent);

//# sourceMappingURL=register-form.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__ = __webpack_require__(216);
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
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(data, toast, navCtrl, navParams) {
        this.data = data;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.login = function (event) {
        var _this = this;
        console.log(event);
        if (!event.error) {
            this.toast.create({
                message: "Welcome to Jnix Chat, " + event.result.email + " ",
                duration: 3000
            }).present();
            this.data.getProfile(event.result).subscribe(function (profile) {
                console.log(profile);
                profile.val() ? _this.navCtrl.setRoot('TabsPage') : _this.navCtrl.setRoot('EditProfilePage');
            });
            this.navCtrl.setRoot('EditProfilePage');
        }
        else {
            this.toast.create({
                message: event.error.message,
                duration: 3000
            }).present();
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Eduardo\Projects\jnixChat\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="mainBackground" padding>\n  <img src="assets/img/logo.png" alt="Logo">\n    <app-login-form (loginStatus)="login($event)" ></app-login-form>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Eduardo\Projects\jnixChat\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map