var app;
(function (app) {
    var models;
    (function (models) {
        var UserModel = /** @class */ (function () {
            function UserModel() {
            }
            return UserModel;
        }());
        models.UserModel = UserModel;
        var TalkModel = /** @class */ (function () {
            function TalkModel() {
            }
            return TalkModel;
        }());
        models.TalkModel = TalkModel;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
var app;
(function (app) {
    var validation;
    (function (validation) {
        var UserValidator = /** @class */ (function () {
            function UserValidator() {
            }
            return UserValidator;
        }());
        validation.UserValidator = UserValidator;
        var TalkValidator = /** @class */ (function () {
            function TalkValidator() {
            }
            return TalkValidator;
        }());
        validation.TalkValidator = TalkValidator;
    })(validation = app.validation || (app.validation = {}));
})(app || (app = {}));
/// <reference path="models.ts" />
/// <reference path="validation.ts" />
var user = new app.models.UserModel();
var talk = new app.models.TalkModel();
var userValidator = new app.validation.UserValidator();
var talkValidator = new app.validation.TalkValidator();
