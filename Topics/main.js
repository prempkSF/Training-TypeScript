"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UserRegister = /** @class */ (function () {
    function UserRegister(id, name) {
        this.id = id;
        this.name = name;
    }
    UserRegister.prototype.register = function () {
        return 'Hello ' + this.name + ' your id is ' + this.id;
    };
    return UserRegister;
}());
var UserPosition = /** @class */ (function (_super) {
    __extends(UserPosition, _super);
    function UserPosition(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.id = id;
        _this.name = name;
        _this.position = position;
        return _this;
    }
    UserPosition.prototype.userPosition = function () {
        return 'Hello ' + this.name + ' your id is ' + this.id + ' your position is ' + this.position;
    };
    return UserPosition;
}(UserRegister));
var userDetails = new UserPosition(1, "Prem", "Software Engineer");
console.log(userDetails.userPosition());
