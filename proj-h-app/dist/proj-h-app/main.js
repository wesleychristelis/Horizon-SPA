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

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        // Basic Alertify Service
        ,
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/app-logger/log-publishers.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/_services/app-logger/log-publishers.service.ts ***!
  \****************************************************************/
/*! exports provided: LogPublishersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogPublishersService", function() { return LogPublishersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _log_publishers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-publishers */ "./src/app/_services/app-logger/log-publishers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogPublishersService = /** @class */ (function () {
    function LogPublishersService(http) {
        this.http = http;
        this.publishersObject = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].publishers;
        // Public properties
        this.publishers = [];
        // Build publishers arrays
        this.buildPublishers();
    }
    LogPublishersService.prototype.buildPublishers = function () {
        var logPub;
        for (var _i = 0, _a = this.publishersObject.filter(function (p) { return p.isActive; }); _i < _a.length; _i++) {
            var pub = _a[_i];
            switch (pub.loggerName.toLowerCase()) {
                case "console": {
                    logPub = new _log_publishers__WEBPACK_IMPORTED_MODULE_3__["LogConsole"]();
                    break;
                }
                case "localstorage": {
                    logPub = new _log_publishers__WEBPACK_IMPORTED_MODULE_3__["LogLocalStorage"]();
                    break;
                }
                case "webapi": {
                    logPub = new _log_publishers__WEBPACK_IMPORTED_MODULE_3__["LogWebApi"](this.http);
                    break;
                }
            }
            // Set location of logging
            logPub.location = pub.loggerLocation;
            // Add publisher to array
            this.publishers.push(logPub);
        }
    };
    LogPublishersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LogPublishersService);
    return LogPublishersService;
}());



/***/ }),

/***/ "./src/app/_services/app-logger/log-publishers.ts":
/*!********************************************************!*\
  !*** ./src/app/_services/app-logger/log-publishers.ts ***!
  \********************************************************/
/*! exports provided: LogPublisher, LogConsole, LogLocalStorage, LogWebApi, LogPublisherConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogPublisher", function() { return LogPublisher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogConsole", function() { return LogConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLocalStorage", function() { return LogLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogWebApi", function() { return LogWebApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogPublisherConfig", function() { return LogPublisherConfig; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LogPublisher = /** @class */ (function () {
    function LogPublisher() {
    }
    return LogPublisher;
}());

var LogConsole = /** @class */ (function (_super) {
    __extends(LogConsole, _super);
    function LogConsole() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogConsole.prototype.log = function (entry) {
        // Log to console
        console.log(entry.buildLogString());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
    };
    LogConsole.prototype.clear = function () {
        console.clear();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
    };
    return LogConsole;
}(LogPublisher));

var LogLocalStorage = /** @class */ (function (_super) {
    __extends(LogLocalStorage, _super);
    function LogLocalStorage() {
        var _this = 
        // Must call super() from derived classes
        _super.call(this) || this;
        // Set location
        _this.location = "logging";
        return _this;
    }
    // Append log entry to local storage
    LogLocalStorage.prototype.log = function (entry) {
        var ret = false;
        var values;
        try {
            // Get previous values from local storage
            values = JSON.parse(localStorage.getItem(this.location)) || [];
            // Add new log entry to array
            values.push(entry);
            // Store array into local storage
            localStorage.setItem(this.location, JSON.stringify(values));
            // Set return value
            ret = true;
        }
        catch (ex) {
            // Display error in console
            console.log(ex);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(ret);
    };
    // Clear all log entries from local storage
    LogLocalStorage.prototype.clear = function () {
        localStorage.removeItem(this.location);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
    };
    return LogLocalStorage;
}(LogPublisher));

var LogWebApi = /** @class */ (function (_super) {
    __extends(LogWebApi, _super);
    function LogWebApi(http) {
        var _this = 
        // Must call super() from derived classes
        _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    // Add log entry to back end data store
    LogWebApi.prototype.log = function (entry) {
        return this.http.post(this.location, entry);
    };
    // Clear all log entries from local storage
    LogWebApi.prototype.clear = function () {
        // TODO: Call Web API to clear all values
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
    };
    return LogWebApi;
}(LogPublisher));

var LogPublisherConfig = /** @class */ (function () {
    function LogPublisherConfig() {
    }
    return LogPublisherConfig;
}());



/***/ }),

/***/ "./src/app/_services/app-logger/log-test.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_services/app-logger/log-test.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"testLog()\">\r\n    Log Test\r\n</button>"

/***/ }),

/***/ "./src/app/_services/app-logger/log-test.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_services/app-logger/log-test.component.ts ***!
  \************************************************************/
/*! exports provided: LogTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogTestComponent", function() { return LogTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.service */ "./src/app/_services/app-logger/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogTestComponent = /** @class */ (function () {
    function LogTestComponent(logger) {
        this.logger = logger;
    }
    LogTestComponent.prototype.ngOnInit = function () { };
    LogTestComponent.prototype.testLog = function () {
        this.logger.info("####### Test the log() Method #######", [1]);
        //this.logger.debug("Test the log() Method", [1]);
        // this.logger.warn("Test the log() Method");
        // this.logger.error("Test the log() Method");
        // this.logger.fatal("Test the log() Method");
        // this.logger.log("Test the log() Method");
        // this.logger.log("Test 2 Parameters",
        //             "Paul", "Smith");
        // this.logger.debug("Test Mixed Parameters",
        //                 true, false, "Paul", "Smith");
        // let values = ["1", "Paul", "Smith"];
        // this.logger.warn("Test String and Array",
        //              "Some log entry", values);  
    };
    LogTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "log-test",
            template: __webpack_require__(/*! ./log-test.component.html */ "./src/app/_services/app-logger/log-test.component.html")
        }),
        __metadata("design:paramtypes", [_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]])
    ], LogTestComponent);
    return LogTestComponent;
}());



/***/ }),

/***/ "./src/app/_services/app-logger/log.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/app-logger/log.service.ts ***!
  \*****************************************************/
/*! exports provided: LogLevel, LogService, LogEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogEntry", function() { return LogEntry; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_publishers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log-publishers.service */ "./src/app/_services/app-logger/log-publishers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["All"] = 0] = "All";
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Warn"] = 3] = "Warn";
    LogLevel[LogLevel["Error"] = 4] = "Error";
    LogLevel[LogLevel["Fatal"] = 5] = "Fatal";
    LogLevel[LogLevel["Off"] = 6] = "Off";
})(LogLevel || (LogLevel = {}));
var LogService = /** @class */ (function () {
    function LogService(logPublishersService) {
        this.logPublishersService = logPublishersService;
        this.level = LogLevel.All;
        this.logWithDate = true;
        this.publishers = [];
        this.publishers = logPublishersService.publishers;
    }
    LogService.prototype.shouldLog = function (level) {
        var ret = false;
        if ((level >= this.level && level !== LogLevel.Off) || this.level === LogLevel.All) {
            ret = true;
        }
        return ret;
    };
    LogService.prototype.debug = function (msg, optionalParams) {
        this.writeToLog(msg, LogLevel.Debug, optionalParams);
    };
    LogService.prototype.info = function (msg, optionalParams) {
        this.writeToLog(msg, LogLevel.Info, optionalParams);
    };
    LogService.prototype.warn = function (msg, optionalParams) {
        this.writeToLog(msg, LogLevel.Warn, optionalParams);
    };
    LogService.prototype.error = function (msg, optionalParams) {
        this.writeToLog(msg, LogLevel.Error, optionalParams);
    };
    LogService.prototype.fatal = function (msg, optionalParams) {
        this.writeToLog(msg, LogLevel.Fatal, optionalParams);
    };
    LogService.prototype.log = function (msg, optionalParams) {
        this.writeToLog(msg, LogLevel.All, optionalParams);
    };
    LogService.prototype.writeToLog = function (msg, level, params) {
        if (this.shouldLog(level)) {
            var entry = new LogEntry();
            entry.message = msg;
            entry.level = level;
            entry.extraInfo = params;
            entry.logWithDate = this.logWithDate;
            for (var _i = 0, _a = this.publishers; _i < _a.length; _i++) {
                var logger = _a[_i];
                logger.log(entry).subscribe(function (response) {
                    console.log(response);
                });
            }
        }
    };
    LogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_log_publishers_service__WEBPACK_IMPORTED_MODULE_1__["LogPublishersService"]])
    ], LogService);
    return LogService;
}());

var LogEntry = /** @class */ (function () {
    function LogEntry() {
        // Public Properties
        this.entryDate = new Date();
        this.message = "";
        this.level = LogLevel.Debug;
        this.extraInfo = [];
        this.logWithDate = true;
    }
    LogEntry.prototype.buildLogString = function () {
        var ret = "";
        if (this.logWithDate) {
            ret = new Date() + " - ";
        }
        ret += "Type: " + LogLevel[this.level];
        ret += " - Message: " + this.message;
        if (this.extraInfo) {
            ret += " - Extra Info: " + this.formatParams(this.extraInfo);
        }
        return ret;
    };
    LogEntry.prototype.formatParams = function (params) {
        var ret = params.join(",");
        // Is there at least one object in the array?
        if (params.some(function (p) { return typeof p == "object"; })) {
            ret = "";
            // Build comma-delimited string
            for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
                var item = params_1[_i];
                ret += JSON.stringify(item) + ",";
            }
        }
        return ret;
    };
    return LogEntry;
}());



/***/ }),

/***/ "./src/app/_services/client/client-profile/client-profile.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/_services/client/client-profile/client-profile.service.ts ***!
  \***************************************************************************/
/*! exports provided: ClientProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientProfileService", function() { return ClientProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientProfileService = /** @class */ (function () {
    function ClientProfileService() {
    }
    ClientProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ClientProfileService);
    return ClientProfileService;
}());



/***/ }),

/***/ "./src/app/_services/client/client-summary/client-summary.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/_services/client/client-summary/client-summary.service.ts ***!
  \***************************************************************************/
/*! exports provided: ClientSummaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSummaryService", function() { return ClientSummaryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_client_summary_client_summary_mock_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/client-summary/client-summary.mock-data */ "./src/app/core/client-summary/client-summary.mock-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientSummaryService = /** @class */ (function () {
    function ClientSummaryService() {
    }
    ClientSummaryService.prototype.getClient = function () { return _core_client_summary_client_summary_mock_data__WEBPACK_IMPORTED_MODULE_1__["CLIENT"]; };
    ClientSummaryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ClientSummaryService);
    return ClientSummaryService;
}());



/***/ }),

/***/ "./src/app/_services/interceptors/error-interceptor.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/_services/interceptors/error-interceptor.service.ts ***!
  \*********************************************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(
        // Any errors on http calls
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.statusText);
                }
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(applicationError);
                }
                var serverError = error.error;
                var modalStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modalStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(modalStateErrors || serverError || 'Server Error');
            }
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_services/interceptors/timer-interceptor.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/_services/interceptors/timer-interceptor.service.ts ***!
  \*********************************************************************/
/*! exports provided: TimerInterceptor, TimerIntProvidererceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerInterceptor", function() { return TimerInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerIntProvidererceptor", function() { return TimerIntProvidererceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_logger_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-logger/log.service */ "./src/app/_services/app-logger/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimerInterceptor = /** @class */ (function () {
    function TimerInterceptor(logger) {
        this.logger = logger;
    }
    TimerInterceptor.prototype.intercept = function (req, next) {
        var start = performance.now();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            //this.logger.info('Url: '+ req.url + ' took ' + (performance.now() - start) + 'ms',[])
            return response;
        }));
    };
    TimerInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_app_logger_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]])
    ], TimerInterceptor);
    return TimerInterceptor;
}());

var TimerIntProvidererceptor = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: TimerInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\r\n    padding: 12px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Axon';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/banner/banner.component */ "./src/app/shared/banner/banner.component.ts");
/* harmony import */ var _core_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/client-profile/client-profile.component */ "./src/app/core/client-profile/client-profile.component.ts");
/* harmony import */ var _core_client_summary_client_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/client-summary/client-summary.component */ "./src/app/core/client-summary/client-summary.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/home/home.component */ "./src/app/shared/home/home.component.ts");
/* harmony import */ var _core_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/main-menu/main-menu.component */ "./src/app/core/main-menu/main-menu.component.ts");
/* harmony import */ var _core_quick_actions_quick_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/quick-actions/quick-actions.component */ "./src/app/core/quick-actions/quick-actions.component.ts");
/* harmony import */ var _core_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/toolbar/toolbar.component */ "./src/app/core/toolbar/toolbar.component.ts");
/* harmony import */ var _services_app_logger_log_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_services/app-logger/log-test.component */ "./src/app/_services/app-logger/log-test.component.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_client_client_profile_client_profile_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/client/client-profile/client-profile.service */ "./src/app/_services/client/client-profile/client-profile.service.ts");
/* harmony import */ var _services_client_client_summary_client_summary_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/client/client-summary/client-summary.service */ "./src/app/_services/client/client-summary/client-summary.service.ts");
/* harmony import */ var _services_interceptors_error_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_services/interceptors/error-interceptor.service */ "./src/app/_services/interceptors/error-interceptor.service.ts");
/* harmony import */ var _services_interceptors_timer_interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_services/interceptors/timer-interceptor.service */ "./src/app/_services/interceptors/timer-interceptor.service.ts");
/* harmony import */ var _services_app_logger_log_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_services/app-logger/log.service */ "./src/app/_services/app-logger/log.service.ts");
/* harmony import */ var _services_app_logger_log_publishers_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_services/app-logger/log-publishers.service */ "./src/app/_services/app-logger/log-publishers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Angular



// 3rd Party
// App Components










// App Services / Guards / Helpers / Resolvers








// Routes

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"],
                _shared_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _core_client_profile_client_profile_component__WEBPACK_IMPORTED_MODULE_5__["ClientProfileComponent"],
                _core_client_summary_client_summary_component__WEBPACK_IMPORTED_MODULE_6__["ClientSummaryComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _core_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_9__["MainMenuComponent"],
                _core_quick_actions_quick_actions_component__WEBPACK_IMPORTED_MODULE_10__["QuickActionsComponent"],
                _core_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ToolbarComponent"],
                //Testing
                _services_app_logger_log_test_component__WEBPACK_IMPORTED_MODULE_12__["LogTestComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_21__["appRoutes"]),
            ],
            providers: [
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_13__["AlertifyService"],
                _services_client_client_profile_client_profile_service__WEBPACK_IMPORTED_MODULE_14__["ClientProfileService"],
                _services_client_client_summary_client_summary_service__WEBPACK_IMPORTED_MODULE_15__["ClientSummaryService"],
                _services_interceptors_error_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptorProvider"],
                _services_app_logger_log_service__WEBPACK_IMPORTED_MODULE_18__["LogService"],
                _services_app_logger_log_publishers_service__WEBPACK_IMPORTED_MODULE_19__["LogPublishersService"],
                _services_interceptors_timer_interceptor_service__WEBPACK_IMPORTED_MODULE_17__["TimerIntProvidererceptor"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/client-profile/client-profile.component.css":
/*!******************************************************************!*\
  !*** ./src/app/core/client-profile/client-profile.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/client-profile/client-profile.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/client-profile/client-profile.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  client-profile works!\r\n</p>"

/***/ }),

/***/ "./src/app/core/client-profile/client-profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/client-profile/client-profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClientProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientProfileComponent", function() { return ClientProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientProfileComponent = /** @class */ (function () {
    function ClientProfileComponent() {
    }
    ClientProfileComponent.prototype.ngOnInit = function () { };
    ClientProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-profile',
            template: __webpack_require__(/*! ./client-profile.component.html */ "./src/app/core/client-profile/client-profile.component.html"),
            styles: [__webpack_require__(/*! ./client-profile.component.css */ "./src/app/core/client-profile/client-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientProfileComponent);
    return ClientProfileComponent;
}());



/***/ }),

/***/ "./src/app/core/client-summary/client-summary.component.css":
/*!******************************************************************!*\
  !*** ./src/app/core/client-summary/client-summary.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client-summary-container {\t\r\n    margin: 10px 0px 0px 10px;\r\n    height: 342px;\t\r\n    width: 500px;\t\r\n    border-radius: 2px;\t\r\n    background-color: #FFFFFF;\t\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n.client-summary-picture {\t\r\n    height: 190px;\t\r\n    width: 170px;\t\r\n    box-shadow: 0 0 3px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n.client-summary-details {\r\n    height: 32px;\r\n    width: 206px;\r\n    color: #4B585C;\r\n    font-family: Flama;\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    letter-spacing: 1.47px;\r\n    line-height: 32px;\r\n}\r\n\r\n.client-summary-status {\r\n    height: 32px;\r\n    width: 206px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/core/client-summary/client-summary.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/client-summary/client-summary.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"client-summary-container\">\r\n  <div class=\"summary-img\"></div>\r\n  <div class=\"summary-details\">\r\n      Mr. Voyu Makatini\r\n  </div>\r\n  <div class=\"summary-status\">\r\n      Mr. Voyu Makatini\r\n  </div>\r\n  <app-quick-actions></app-quick-actions>\r\n</div>"

/***/ }),

/***/ "./src/app/core/client-summary/client-summary.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/client-summary/client-summary.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClientSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientSummaryComponent", function() { return ClientSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientSummaryComponent = /** @class */ (function () {
    function ClientSummaryComponent() {
    }
    ClientSummaryComponent.prototype.ngOnInit = function () {
    };
    ClientSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-summary',
            template: __webpack_require__(/*! ./client-summary.component.html */ "./src/app/core/client-summary/client-summary.component.html"),
            styles: [__webpack_require__(/*! ./client-summary.component.css */ "./src/app/core/client-summary/client-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientSummaryComponent);
    return ClientSummaryComponent;
}());



/***/ }),

/***/ "./src/app/core/client-summary/client-summary.mock-data.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/client-summary/client-summary.mock-data.ts ***!
  \*****************************************************************/
/*! exports provided: CLIENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT", function() { return CLIENT; });
var CLIENT = {
    id: 11,
    name: "Mr. Voyu Makatini",
    location: "Stellenbosch",
    occupation: "Cashier at Pick 'n Pay",
    birthDate: new Date("27/09/1984"),
    score: 2
};


/***/ }),

/***/ "./src/app/core/main-menu/main-menu.component.css":
/*!********************************************************!*\
  !*** ./src/app/core/main-menu/main-menu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    float: left;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .menu-button{\r\n    font-size: 40px;\r\n  }"

/***/ }),

/***/ "./src/app/core/main-menu/main-menu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/main-menu/main-menu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-1\">\r\n    <i class=\"fa fa-bars menu-button pointer\"></i>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/core/main-menu/main-menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/main-menu/main-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent() {
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/core/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/core/main-menu/main-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/core/quick-actions/quick-actions.component.css":
/*!****************************************************************!*\
  !*** ./src/app/core/quick-actions/quick-actions.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/quick-actions/quick-actions.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/core/quick-actions/quick-actions.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  quick-actions works!\r\n  <i class=\"icon-camera-retro\"></i> icon-camera-retro\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/core/quick-actions/quick-actions.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/quick-actions/quick-actions.component.ts ***!
  \***************************************************************/
/*! exports provided: QuickActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickActionsComponent", function() { return QuickActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuickActionsComponent = /** @class */ (function () {
    function QuickActionsComponent() {
    }
    QuickActionsComponent.prototype.ngOnInit = function () {
    };
    QuickActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quick-actions',
            template: __webpack_require__(/*! ./quick-actions.component.html */ "./src/app/core/quick-actions/quick-actions.component.html"),
            styles: [__webpack_require__(/*! ./quick-actions.component.css */ "./src/app/core/quick-actions/quick-actions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuickActionsComponent);
    return QuickActionsComponent;
}());



/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    float: right;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .strack {\r\n    height: 13px;\r\n    width: 40px;\r\n    color: #FFFFFF;\r\n    font-family: Flama;\r\n    font-size: 12px;\r\n    letter-spacing: 0.8px;\r\n    line-height: 18px;\r\n    text-align: center;\r\n  }\r\n\r\n  .c-net {\r\n    height: 13px;\r\n    width: 40px;\r\n    color: #FFFFFF;\r\n    font-family: Flama;\r\n    font-size: 13px;\r\n    letter-spacing: 0.87px;\r\n    line-height: 18px;\r\n    text-align: center;\r\n  }"

/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-4 mr-3\">\r\n    <img class=\"pointer\" src=\"../../../assets/STrack.svg\" alt=\"STrack\">\r\n    <p class=\"text-center strack\">STrack</p>\r\n  </div>\r\n  <div class=\"col-md-4 mr-3\">\r\n    <img class=\"pointer\" src=\"../../../assets/Cnet.svg\" alt=\"CNet\">\r\n    <p class=\"text-center c-net\">CNet</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.ts ***!
  \***************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/core/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/core/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _shared_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/home/home.component */ "./src/app/shared/home/home.component.ts");

var appRoutes = [
    { path: 'home', component: _shared_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];


/***/ }),

/***/ "./src/app/shared/banner/banner.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/banner/banner.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-banner {\r\n    height: 60px;\r\n    width: 1920px;\r\n}\r\n\r\n.mask {\r\n    height: 81px;\r\n    width: 1920px;\r\n    background-color: #009DE0;\t\r\n    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.15);\r\n}\r\n\r\n.app-banner-left {\r\n    height: inherit;\r\n    width: 960px;\r\n    background: #00486D;\r\n    float: left;\r\n}\r\n\r\n.app-banner-right {\r\n    height: inherit;\r\n    width: 960px;\r\n    background: linear-gradient(270deg, rgba(0,126,166,0) 0%, #00486D 100%);\r\n    float: right;\r\n    padding-right:100px;\r\n}\r\n\r\n.banner-date {\r\n    height: inherit;\r\n    width: 321px;\r\n    color: #FFFFFF;\r\n    font-family: Flama;\r\n    font-size: medium;\r\n    font-weight: medium;\r\n    letter-spacing: 1.33px;\r\n    line-height: 29px;\r\n    text-align: right;\r\n    float: right;\r\n}\r\n\r\n.rectangle-2 {\r\n    height: 81px;\r\n    width: 1920px;\r\n    background: linear-gradient(270deg, rgba(0,126,166,0) 0%, #00486D 100%);\r\n  }\r\n"

/***/ }),

/***/ "./src/app/shared/banner/banner.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/banner/banner.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-banner\">\r\n    <div class=\"app-banner-left\">\r\n      <div class=\"banner-date\"></div>\r\n    </div>\r\n    <div class=\"app-banner-right\">\r\n      <div class=\"banner-date\" >\r\n        <p>{{today | date:'medium'}}</p>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/shared/banner/banner.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/banner/banner.component.ts ***!
  \***************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        this.today = Date.now();
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/shared/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/shared/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-footer {\r\n    position: fixed; \r\n    bottom: 0px;\r\n    height: 81px;\r\n    width: 1920px;\r\n    background-color: #383633;\r\n    box-shadow: 0 -1px 4px 0 rgba(0,0,0,0.15);\r\n}"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-footer\">\r\n    <div class=\"m-3\">\r\n        <app-main-menu></app-main-menu>\r\n        <app-toolbar></app-toolbar> \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/home/home.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/home/home.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-banner {\t\r\n    height: 81px;\r\n    width: 1920px;\r\n    background: linear-gradient(270deg, rgba(0,126,166,0) 0%, #00486D 100%);\r\n}\r\n\r\n.home-footer {\r\n    height: 100px;\r\n    width: 1920px;\r\n    background-color: #383633;\r\n    box-shadow: 0 -1px 4px 0 rgba(0,0,0,0.15);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\r\n\r\n<div class=\"main-container\">\r\n    <app-client-summary></app-client-summary>\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n\r\n<log-test></log-test>\r\n"

/***/ }),

/***/ "./src/app/shared/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/shared/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/shared/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:52015/api/',
    publishers: [
        {
            "loggerName": "console",
            "loggerLocation": "",
            "isActive": true
        },
        {
            "loggerName": "localstorage",
            "loggerLocation": "logging",
            "isActive": true
        },
        {
            "loggerName": "webapi",
            "loggerLocation": "http://localhost:52015/api/values/logtestcontract",
            "isActive": true
        }
    ]
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code Source\Horizon\Horizon-SPA\proj-h-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map