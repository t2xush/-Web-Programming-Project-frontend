"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Todos_instances, _Todos_backend_url, _Todos_readJson, _Todos_addToArray;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todos = void 0;
var Task_js_1 = require("./Task.js");
var Todos = /** @class */ (function () {
    function Todos(url) {
        var _this = this;
        _Todos_instances.add(this);
        this.tasks = [];
        _Todos_backend_url.set(this, '');
        this.getTasks = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            fetch(__classPrivateFieldGet(this, _Todos_backend_url, "f"))
                                .then(function (response) { return response.json(); })
                                .then(function (response) {
                                __classPrivateFieldGet(_this, _Todos_instances, "m", _Todos_readJson).call(_this, response);
                                resolve(_this.tasks);
                            }, function (error) {
                                reject(error);
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        }); };
        this.addTask = function (text) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var json;
                        var _this = this;
                        return __generator(this, function (_a) {
                            json = JSON.stringify({ description: text });
                            fetch(__classPrivateFieldGet(this, _Todos_backend_url, "f") + '/new', {
                                method: 'post',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: json
                            })
                                .then(function (response) { return response.json(); })
                                .then(function (response) {
                                resolve(__classPrivateFieldGet(_this, _Todos_instances, "m", _Todos_addToArray).call(_this, response.id, text));
                            }), function (error) {
                                reject(error);
                            };
                            return [2 /*return*/];
                        });
                    }); })];
            });
        }); };
        __classPrivateFieldSet(this, _Todos_backend_url, url, "f");
    }
    return Todos;
}());
exports.Todos = Todos;
_Todos_backend_url = new WeakMap(), _Todos_instances = new WeakSet(), _Todos_readJson = function _Todos_readJson(tasksAsJson) {
    var _this = this;
    tasksAsJson.forEach(function (node) {
        var task = new Task_js_1.Task(node.id, node.description);
        _this.tasks.push(task);
    });
}, _Todos_addToArray = function _Todos_addToArray(id, text) {
    var task = new Task_js_1.Task(id, text);
    this.tasks.push(task);
    return task;
};
