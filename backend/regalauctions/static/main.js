(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'regalauctions';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main/main.component */ "./src/app/main/main/main.component.ts");
/* harmony import */ var _main_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/header/header.component */ "./src/app/main/header/header.component.ts");
/* harmony import */ var _main_content_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/content/content.component */ "./src/app/main/content/content.component.ts");
/* harmony import */ var _main_auctions_new_auction_new_auction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/auctions/new-auction/new-auction.component */ "./src/app/main/auctions/new-auction/new-auction.component.ts");
/* harmony import */ var _main_auctions_list_auction_list_auction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/auctions/list-auction/list-auction.component */ "./src/app/main/auctions/list-auction/list-auction.component.ts");
/* harmony import */ var _main_auctions_detail_auction_detail_auction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/auctions/detail-auction/detail-auction.component */ "./src/app/main/auctions/detail-auction/detail-auction.component.ts");
/* harmony import */ var _main_auctions_bid_list_bid_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/auctions/bid-list/bid-list.component */ "./src/app/main/auctions/bid-list/bid-list.component.ts");
/* harmony import */ var _sing_up_sing_up_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sing-up/sing-up.component */ "./src/app/sing-up/sing-up.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");


















var appRoutes = [
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "signup", component: _sing_up_sing_up_component__WEBPACK_IMPORTED_MODULE_13__["SingUpComponent"] },
    {
        path: "main",
        component: _main_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        children: [
            { path: "newauction", component: _main_auctions_new_auction_new_auction_component__WEBPACK_IMPORTED_MODULE_9__["NewAuctionComponent"] },
            { path: "auctions", component: _main_auctions_list_auction_list_auction_component__WEBPACK_IMPORTED_MODULE_10__["ListAuctionComponent"] },
            { path: "auction/:id", component: _main_auctions_detail_auction_detail_auction_component__WEBPACK_IMPORTED_MODULE_11__["DetailAuctionComponent"] },
            { path: "newauction", component: _main_auctions_new_auction_new_auction_component__WEBPACK_IMPORTED_MODULE_9__["NewAuctionComponent"] },
            { path: "", redirectTo: "/main/auctions", pathMatch: "full" }
        ]
    },
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "**", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _main_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _main_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _main_content_content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"],
                _main_auctions_new_auction_new_auction_component__WEBPACK_IMPORTED_MODULE_9__["NewAuctionComponent"],
                _main_auctions_list_auction_list_auction_component__WEBPACK_IMPORTED_MODULE_10__["ListAuctionComponent"],
                _main_auctions_detail_auction_detail_auction_component__WEBPACK_IMPORTED_MODULE_11__["DetailAuctionComponent"],
                _main_auctions_bid_list_bid_list_component__WEBPACK_IMPORTED_MODULE_12__["BidListComponent"],
                _sing_up_sing_up_component__WEBPACK_IMPORTED_MODULE_13__["SingUpComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true, useHash: true }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_17__["NgxMaskModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cpf-cnpj.validator.ts":
/*!***************************************!*\
  !*** ./src/app/cpf-cnpj.validator.ts ***!
  \***************************************/
/*! exports provided: CpfCnpjValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpfCnpjValidator", function() { return CpfCnpjValidator; });
var CpfCnpjValidator = /** @class */ (function () {
    function CpfCnpjValidator() {
    }
    /**
     * Calcula o dígito verificador do CPF ou CNPJ.
     */
    CpfCnpjValidator.buildDigit = function (arr) {
        var isCpf = arr.length < CpfCnpjValidator.cpfLength;
        var digit = arr
            .map(function (val, idx) { return val * ((!isCpf ? idx % 8 : idx) + 2); })
            .reduce(function (total, current) { return total + current; }) % CpfCnpjValidator.cpfLength;
        if (digit < 2 && isCpf) {
            return 0;
        }
        return CpfCnpjValidator.cpfLength - digit;
    };
    /**
     * Valida um CPF ou CNPJ de acordo com seu dígito verificador.
     */
    CpfCnpjValidator.validate = function (c) {
        var cpfCnpj = c.value.replace(/\D/g, '');
        // Verifica o tamanho da string.
        if ([CpfCnpjValidator.cpfLength, CpfCnpjValidator.cnpjLength].indexOf(cpfCnpj.length) < 0) {
            return { length: true };
        }
        // Verifica se todos os dígitos são iguais.
        if (/^([0-9])\1*$/.test(cpfCnpj)) {
            return { equalDigits: true };
        }
        // A seguir é realizado o cálculo verificador.
        var cpfCnpjArr = cpfCnpj.split('').reverse().slice(2);
        cpfCnpjArr.unshift(CpfCnpjValidator.buildDigit(cpfCnpjArr));
        cpfCnpjArr.unshift(CpfCnpjValidator.buildDigit(cpfCnpjArr));
        if (cpfCnpj !== cpfCnpjArr.reverse().join('')) {
            // Dígito verificador não é válido, resultando em falha.
            return { digit: true };
        }
        return null;
    };
    /**
     * Implementa a interface de um validator.
     */
    CpfCnpjValidator.prototype.validate = function (c) {
        return CpfCnpjValidator.validate(c);
    };
    CpfCnpjValidator.cpfLength = 11;
    CpfCnpjValidator.cnpjLength = 14;
    return CpfCnpjValidator;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    Object.defineProperty(LoginService.prototype, "token", {
        get: function () {
            return getCookie("token");
        },
        set: function (value) {
            setCookie("token", value, 1);
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.auth = function (username, password) {
        var _this = this;
        if (!this.isAuthenticated) {
            return new Promise(function (resolve, reject) {
                _this.http.post("/api-token-auth/?format=json", {
                    username: username,
                    password: password
                }).subscribe(function (data) {
                    _this.token = data.token;
                    resolve(_this.token);
                }, function (error) { return reject(error); });
            });
        }
        else {
            return Promise.resolve(this.token);
        }
    };
    LoginService.prototype.clearToken = function () {
        this.token = "";
    };
    Object.defineProperty(LoginService.prototype, "isAuthenticated", {
        get: function () {
            return this.token != "";
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isAuthenticated) {
                _this.http.get("/api/users/", {
                    headers: {
                        'Authorization': "Token " + _this.token
                    }
                }).subscribe(function (data) { return resolve(data[0]); }, function (error) { return reject(error); });
            }
            else {
                reject(new Error("Not authenticated"));
            }
        });
    };
    LoginService.prototype.register = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var body = {
                user: {
                    username: user.username,
                    password: user.password,
                    email: user.email
                },
                name: user.name,
                active: true,
                is_admin: user.isAdmin,
                cpf: user.cpf,
            };
            _this.http.post("/api/users/", body).subscribe(function () { return resolve(true); }, function (error) { return reject(error); });
        });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\nheight: 100%;\nalign-content: center;\n}\n\n.card{\nmargin-top: auto;\nmargin-bottom: auto;\nwidth: 400px;\n}\n\n.login_btn{\nwidth: 100px;\n}\n\n.links a{\nmargin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGFBQWE7QUFDYixzQkFBc0I7Q0FDckI7O0FBRUQ7QUFDQSxpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLGFBQWE7Q0FDWjs7QUFHRDtBQUNBLGFBQWE7Q0FDWjs7QUFHRDtBQUNBLGlCQUFpQjtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuaGVpZ2h0OiAxMDAlO1xuYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZHtcbm1hcmdpbi10b3A6IGF1dG87XG5tYXJnaW4tYm90dG9tOiBhdXRvO1xud2lkdGg6IDQwMHB4O1xufVxuXG5cbi5sb2dpbl9idG57XG53aWR0aDogMTAwcHg7XG59XG5cblxuLmxpbmtzIGF7XG5tYXJnaW4tbGVmdDogNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"d-flex justify-content-center h-100\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h3>Sign In</h3>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<div *ngIf=\"error\" class=\"alert alert-danger\" role=\"alert\">\n                  Login/Password invalid. Try again.\n\t\t\t\t</div>\n\t\t\t\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input formControlName=\"username\" type=\"text\" class=\"form-control\" placeholder=\"username\" required>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"password\" required>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn float-right login_btn\">Login</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"card-footer\">\n\t\t\t\t<div class=\"d-flex justify-content-center links\">\n\t\t\t\t\tDon't have an account?<a routerLink=\"/signup\">Sign Up</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginService, router) {
        this.fb = fb;
        this.loginService = loginService;
        this.router = router;
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.error = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var token, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.loginForm.valid) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.loginService.clearToken();
                        return [4 /*yield*/, this.loginService
                                .auth(this.loginForm.value.username, this.loginForm.value.password)];
                    case 2:
                        token = _a.sent();
                        this.router.navigate(['main']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.error = true;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/auctions/bid-list/bid-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/main/auctions/bid-list/bid-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXVjdGlvbnMvYmlkLWxpc3QvYmlkLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/auctions/bid-list/bid-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/main/auctions/bid-list/bid-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bid-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/auctions/bid-list/bid-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/auctions/bid-list/bid-list.component.ts ***!
  \**************************************************************/
/*! exports provided: BidListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidListComponent", function() { return BidListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BidListComponent = /** @class */ (function () {
    function BidListComponent() {
    }
    BidListComponent.prototype.ngOnInit = function () {
    };
    BidListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bid-list',
            template: __webpack_require__(/*! ./bid-list.component.html */ "./src/app/main/auctions/bid-list/bid-list.component.html"),
            styles: [__webpack_require__(/*! ./bid-list.component.css */ "./src/app/main/auctions/bid-list/bid-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BidListComponent);
    return BidListComponent;
}());



/***/ }),

/***/ "./src/app/main/auctions/detail-auction/detail-auction.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/main/auctions/detail-auction/detail-auction.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXVjdGlvbnMvZGV0YWlsLWF1Y3Rpb24vZGV0YWlsLWF1Y3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/auctions/detail-auction/detail-auction.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/auctions/detail-auction/detail-auction.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h3>{{auction.name}}</h3>\n  </div>\n  <div class=\"card-body\">\n    <div>\n      <p><b>Name:</b> {{auction.name}}</p>\n    </div>\n    <div>\n      <p><b>User:</b> {{auction.user}}</p>\n    </div>\n    <div>\n      <p><b>Initial Value:</b> {{auction.initial_value}}</p>\n    </div>\n    <div>\n      <p><b>Opening Date:</b> {{auction.opening_date}}</p>\n    </div>\n    <div>\n      <p><b>Ending Date:</b> {{auction.ending_date}}</p>\n    </div>\n    <div>\n      <button [disabled]=\"ended\" class=\"btn btn-primary\" (click)=\"end()\">End Auction</button>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"!ended\" class=\"card\">\n  <div class=\"card-header\">\n    <h3>Bid on Auction</h3>\n  </div>\n  <div class=\"card-body\">\n    <div>\n      <div class=\"form-group\">\n        <label for=\"value\">Bid Value</label>\n        <input id=\"value\" [formControl]=\"bidValue\" type=\"number\" class=\"form-control\" placeholder=\"Enter Bid Value\">\n      </div>\n      <div class=\"form-group\">\n        <button [disabled]=\"!bidValue.valid\" class=\"btn btn-primary\" (click)=\"bid()\">Bid</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    <h3>Bids</h3>\n  </div>\n  <div class=\"card-body\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\">User</th>\n          <th scope=\"col\">Value</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"clickable-row\" *ngFor=\"let bid of bids\">\n          <td>{{bid.user}}</td>\n          <td>{{bid.value}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/main/auctions/detail-auction/detail-auction.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/auctions/detail-auction/detail-auction.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetailAuctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailAuctionComponent", function() { return DetailAuctionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_auction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/auction.service */ "./src/auction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var DetailAuctionComponent = /** @class */ (function () {
    function DetailAuctionComponent(loginService, router, auctionService, route) {
        this.loginService = loginService;
        this.router = router;
        this.auctionService = auctionService;
        this.route = route;
        this.bidValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
    }
    DetailAuctionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.getAuction();
            _this.getBids();
        });
    };
    DetailAuctionComponent.prototype.getAuction = function () {
        var _this = this;
        this.auctionService.getRecord(this.id).then(function (auction) {
            _this.auction = auction;
            _this.bidValue.setValue(auction.initial_value);
        }).catch(function (_) {
            _this.router.navigate(['login']);
        });
    };
    DetailAuctionComponent.prototype.getBids = function () {
        var _this = this;
        this.auctionService.getBids(this.id).then(function (bids) {
            _this.bids = bids.reverse();
        }).catch(function (_) {
            _this.router.navigate(['login']);
        });
    };
    Object.defineProperty(DetailAuctionComponent.prototype, "ended", {
        get: function () {
            return this.auction != null && this.auction.ending_date != null;
        },
        enumerable: true,
        configurable: true
    });
    DetailAuctionComponent.prototype.end = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.auctionService.endAuction(this.auction)];
                    case 1:
                        _a.sent();
                        this.getAuction();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.loginService.clearToken();
                        this.router.navigate(['login']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DetailAuctionComponent.prototype.bid = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.bidValue.valid) return [3 /*break*/, 4];
                        if (this.bidValue.value <= this.maxBid || this.bidValue.value < this.auction.initial_value) {
                            alert("It's not possible to bid this value.");
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.auctionService.createBid(this.id, +this.bidValue.value)];
                    case 2:
                        _a.sent();
                        this.getBids();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.router.navigate(['login']);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DetailAuctionComponent.prototype, "maxBid", {
        get: function () {
            var maxValue = 0;
            for (var index = 0; index < this.bids.length; index++) {
                if (this.bids[index].value > maxValue) {
                    maxValue = this.bids[index].value;
                }
            }
            return maxValue;
        },
        enumerable: true,
        configurable: true
    });
    DetailAuctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail-auction',
            template: __webpack_require__(/*! ./detail-auction.component.html */ "./src/app/main/auctions/detail-auction/detail-auction.component.html"),
            styles: [__webpack_require__(/*! ./detail-auction.component.css */ "./src/app/main/auctions/detail-auction/detail-auction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_auction_service__WEBPACK_IMPORTED_MODULE_4__["AuctionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DetailAuctionComponent);
    return DetailAuctionComponent;
}());



/***/ }),

/***/ "./src/app/main/auctions/list-auction/list-auction.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/main/auctions/list-auction/list-auction.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXVjdGlvbnMvbGlzdC1hdWN0aW9uL2xpc3QtYXVjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/auctions/list-auction/list-auction.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/auctions/list-auction/list-auction.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Auctions</h3>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Initial Value</th>\n      <th scope=\"col\">Used Item</th>\n      <th scope=\"col\">Owner\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class=\"clickable-row\" *ngFor=\"let auction of auctions\">\n      <td><a [routerLink]=\"[ '/main/auction', auction.id]\">{{auction.name}}</a></td>\n      <td>{{auction.initial_value}}</td>\n      <td>{{auction.is_used ? 'Yes' : 'No'}}</td>\n      <td>{{auction.user}}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/main/auctions/list-auction/list-auction.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/auctions/list-auction/list-auction.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListAuctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAuctionComponent", function() { return ListAuctionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_auction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/auction.service */ "./src/auction.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");





var ListAuctionComponent = /** @class */ (function () {
    function ListAuctionComponent(auctionService, router, loginService) {
        this.auctionService = auctionService;
        this.router = router;
        this.loginService = loginService;
    }
    ListAuctionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auctionService.listRecords().then(function (auctions) {
            _this.auctions = auctions;
        }).catch(function (_) {
            _this.loginService.clearToken();
            _this.router.navigate(['login']);
        });
    };
    ListAuctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-auction',
            template: __webpack_require__(/*! ./list-auction.component.html */ "./src/app/main/auctions/list-auction/list-auction.component.html"),
            styles: [__webpack_require__(/*! ./list-auction.component.css */ "./src/app/main/auctions/list-auction/list-auction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_auction_service__WEBPACK_IMPORTED_MODULE_2__["AuctionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], ListAuctionComponent);
    return ListAuctionComponent;
}());



/***/ }),

/***/ "./src/app/main/auctions/new-auction/new-auction.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/main/auctions/new-auction/new-auction.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXVjdGlvbnMvbmV3LWF1Y3Rpb24vbmV3LWF1Y3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main/auctions/new-auction/new-auction.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main/auctions/new-auction/new-auction.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Create an Auction</h3>\n<form [formGroup]=\"regForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter the Auction's Name\"\n      required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"value\">Initial Value</label>\n    <input formControlName=\"initialValue\" type=\"number\" class=\"form-control\" id=\"value\" placeholder=\"Enter the Auction's Initial Value\"\n      required>\n  </div>\n  <div class=\"form-group form-check\">\n    <input formControlName=\"isUsed\" class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"used\">\n    <label class=\"form-check-label\" for=\"used\">\n      Used Product\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" [disabled]=\"!regForm.valid\" class=\"btn float-right login_btn\">Sing Up</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/main/auctions/new-auction/new-auction.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/auctions/new-auction/new-auction.component.ts ***!
  \********************************************************************/
/*! exports provided: NewAuctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAuctionComponent", function() { return NewAuctionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var src_auction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/auction.service */ "./src/auction.service.ts");






var NewAuctionComponent = /** @class */ (function () {
    function NewAuctionComponent(fb, router, loginService, auctionService) {
        this.fb = fb;
        this.router = router;
        this.loginService = loginService;
        this.auctionService = auctionService;
        this.regForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isUsed: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            initialValue: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    NewAuctionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUser().then(function (user) {
            if (!user.is_admin) {
                _this.router.navigate(['main']);
            }
        });
    };
    NewAuctionComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.regForm.valid) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.auctionService.createRecord(this.regForm.value.name, this.regForm.value.initialValue, this.regForm.value.isUsed)];
                    case 2:
                        _a.sent();
                        this.router.navigate(["main"]);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        alert("It was not possible to create an auction at this moment");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    NewAuctionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-auction',
            template: __webpack_require__(/*! ./new-auction.component.html */ "./src/app/main/auctions/new-auction/new-auction.component.html"),
            styles: [__webpack_require__(/*! ./new-auction.component.css */ "./src/app/main/auctions/new-auction/new-auction.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], src_auction_service__WEBPACK_IMPORTED_MODULE_5__["AuctionService"]])
    ], NewAuctionComponent);
    return NewAuctionComponent;
}());



/***/ }),

/***/ "./src/app/main/content/content.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/content/content.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/content/content.component.html":
/*!*****************************************************!*\
  !*** ./src/app/main/content/content.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  content works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/content/content.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/content/content.component.ts ***!
  \***************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/main/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/main/content/content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/main/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/main/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/main/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/main\">Regal Auctions</a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"buton\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"javascript:void(0)\">\n          Home <span class=\"sr-only\">(current)</span></a\n        >\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/main/auctions\">Auctions</a>\n      </li>\n      <li *ngIf=\"user.is_admin\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/main/newauction\">Create Auction</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"logOff()\"\n          >Sign Out</a\n        >\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/main/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUser().then(function (user) {
            _this.user = user;
        });
    };
    HeaderComponent.prototype.logOff = function () {
        if (this.loginService.isAuthenticated) {
            this.loginService.clearToken();
            this.router.navigate(["login"]);
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/main/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/main/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main/main.component.css":
/*!**********************************************!*\
  !*** ./src/app/main/main/main.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/main/main/main.component.html":
/*!***********************************************!*\
  !*** ./src/app/main/main/main.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div> <!-- /container -->"

/***/ }),

/***/ "./src/app/main/main/main.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main/main.component.ts ***!
  \*********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/login.service */ "./src/app/login.service.ts");




var MainComponent = /** @class */ (function () {
    function MainComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
        if (!this.loginService.isAuthenticated) {
            this.router.navigate(['login']);
        }
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/sing-up/sing-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sing-up/sing-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\nheight: 100%;\nalign-content: center;\n}\n\n.card{\nmargin-top: auto;\nmargin-bottom: auto;\nwidth: 400px;\n}\n\n.login_btn{\nwidth: 100px;\n}\n\n.links a{\nmargin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZy11cC9zaW5nLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxhQUFhO0FBQ2Isc0JBQXNCO0NBQ3JCOztBQUVEO0FBQ0EsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixhQUFhO0NBQ1o7O0FBR0Q7QUFDQSxhQUFhO0NBQ1o7O0FBR0Q7QUFDQSxpQkFBaUI7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9zaW5nLXVwL3NpbmctdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG5oZWlnaHQ6IDEwMCU7XG5hbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJke1xubWFyZ2luLXRvcDogYXV0bztcbm1hcmdpbi1ib3R0b206IGF1dG87XG53aWR0aDogNDAwcHg7XG59XG5cblxuLmxvZ2luX2J0bntcbndpZHRoOiAxMDBweDtcbn1cblxuXG4ubGlua3MgYXtcbm1hcmdpbi1sZWZ0OiA0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/sing-up/sing-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sing-up/sing-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center h-100\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3>Sign In</h3>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          Login/Password invalid. Try again.\n        </div>\n        <form [formGroup]=\"regForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter Your Name\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input formControlName=\"username\" type=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Preferred Username\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter Preferred Password\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input [class.is-invalid]=\"regForm.controls['email'].touched && !regForm.controls['email'].valid\" formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter Your Email\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"cpf\">CPF</label>\n            <input [class.is-invalid]=\"regForm.controls['cpf'].touched && !regForm.controls['cpf'].valid\" formControlName=\"cpf\" type=\"text\" class=\"form-control\" id=\"cpf\" placeholder=\"Enter Your CPF\" mask=\"000.000.000-00\" required>\n          </div>\n          <div class=\"form-check\">\n            <input formControlName=\"isAdmin\" class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"admin\">\n            <label class=\"form-check-label\" for=\"admin\">\n              Administrator\n            </label>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"!regForm.valid\" class=\"btn float-right login_btn\">Sing Up</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sing-up/sing-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sing-up/sing-up.component.ts ***!
  \**********************************************/
/*! exports provided: SingUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingUpComponent", function() { return SingUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cpf_cnpj_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cpf-cnpj.validator */ "./src/app/cpf-cnpj.validator.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");






var SingUpComponent = /** @class */ (function () {
    function SingUpComponent(fb, router, loginService) {
        this.fb = fb;
        this.router = router;
        this.loginService = loginService;
        this.regForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isAdmin: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cpf: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11),
                    _cpf_cnpj_validator__WEBPACK_IMPORTED_MODULE_4__["CpfCnpjValidator"].validate
                ]
            ],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    SingUpComponent.prototype.ngOnInit = function () { };
    SingUpComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.regForm.valid) return [3 /*break*/, 5];
                        user = this.regForm.value;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        this.loginService.clearToken();
                        return [4 /*yield*/, this.loginService.register(user)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loginService.auth(user.username, user.password)];
                    case 3:
                        _a.sent();
                        this.router.navigate(["main"]);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        alert("Erro ao criar o usuário.");
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SingUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sing-up",
            template: __webpack_require__(/*! ./sing-up.component.html */ "./src/app/sing-up/sing-up.component.html"),
            styles: [__webpack_require__(/*! ./sing-up.component.css */ "./src/app/sing-up/sing-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]])
    ], SingUpComponent);
    return SingUpComponent;
}());



/***/ }),

/***/ "./src/auction.service.ts":
/*!********************************!*\
  !*** ./src/auction.service.ts ***!
  \********************************/
/*! exports provided: AuctionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionService", function() { return AuctionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuctionService = /** @class */ (function () {
    function AuctionService(loginService, http, router) {
        this.loginService = loginService;
        this.http = http;
        this.router = router;
    }
    AuctionService.prototype.listRecords = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.loginService.isAuthenticated) {
                _this.http.get('/api/auctions/?format=json', {
                    headers: {
                        'Authorization': "Token " + _this.loginService.token
                    }
                }).subscribe(function (data) {
                    resolve(data);
                }, function (error) { return reject(error); });
            }
            else {
                _this.router.navigate(['login']);
                resolve(null);
            }
        });
    };
    AuctionService.prototype.getRecord = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.loginService.isAuthenticated) {
                _this.http.get("/api/auctions/" + id + "/?format.json", {
                    headers: {
                        'Authorization': "Token " + _this.loginService.token
                    }
                }).subscribe(function (data) {
                    resolve(data);
                }, function (error) { return reject(error); });
            }
            else {
                _this.router.navigate(['login']);
                resolve(null);
            }
        });
    };
    AuctionService.prototype.endAuction = function (auction) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.loginService.isAuthenticated) {
                var body = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, auction);
                var now = new Date();
                body.ending_date = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate();
                _this.http.put("/api/auctions/" + auction.id + "/?format=json", body, {
                    headers: {
                        'Authorization': "Token " + _this.loginService.token
                    }
                }).subscribe(function (_) { return resolve(true); }, function (error) { return reject(error); });
            }
            else {
                _this.router.navigate(['login']);
                resolve(false);
            }
        });
    };
    AuctionService.prototype.getBids = function (auctionId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.loginService.isAuthenticated) {
                _this.http.get("/api/bids/?format=json&auction=" + auctionId, {
                    headers: {
                        'Authorization': "Token " + _this.loginService.token
                    }
                }).subscribe(function (data) { return resolve(data); }, function (error) { return reject(error); });
            }
            else {
                resolve(null);
                _this.router.navigate(['login']);
            }
        });
    };
    AuctionService.prototype.createBid = function (auctionId, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.loginService.isAuthenticated) {
                _this.http.post('/api/bids/?format=json', {
                    auction: auctionId,
                    value: value
                }, {
                    headers: {
                        'Authorization': "Token " + _this.loginService.token
                    }
                }).subscribe(function (_) { return resolve(true); }, function (_) { return reject(false); });
            }
            else {
                resolve(false);
                _this.router.navigate(['login']);
            }
        });
    };
    AuctionService.prototype.createRecord = function (name, initialValue, isUsed) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.loginService.isAuthenticated) {
                _this.http.post('/api/auctions/?format=json', {
                    name: name,
                    initial_value: initialValue,
                    is_used: isUsed
                }, {
                    headers: {
                        'Authorization': "Token " + _this.loginService.token
                    }
                }).subscribe(function (_) { return resolve(true); }, function (_) { return reject(false); });
            }
            else {
                resolve(false);
                _this.router.navigate(['login']);
            }
        });
    };
    AuctionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuctionService);
    return AuctionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/hao/Neon Pedro/programming/python/regalauctions-bug/frontend/regalauctions/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map