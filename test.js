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
        while (_) try {
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
var TicketManager = /** @class */ (function () {
    function TicketManager() {
        var _this = this;
        // -- チケットデータ --
        this.ticket = {
            name: 'musicLive',
            price: 5000,
            day: this.randomDate(20211001, 20211208)
        };
        this.coupon = 'ABCDE'; // クーポンコード入力欄と紐付ける
        // -- 乱数と挑戦回数の保持 --
        this.randomNum = 1000;
        this.tryCount = 0;
        // -- チケット購入チャレンジ --
        this.ticketChallenge = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.lotteryTicket(5, 15)
                            .then(function (a) {
                            if (a) {
                                _this.checkCoupon(_this.ticket.price, _this.coupon)
                                    .then(function (price) {
                                    console.log('チケットが買えた！');
                                    console.log("\u30C1\u30B1\u30C3\u30C8\u4EE3\u306F\u30AF\u30FC\u30DD\u30F3\u9069\u7528\u3067".concat(price, "\u5186, \u65E5\u4ED8\u306F").concat(_this.ticket.day, "\u3067\u3059\uFF01"));
                                })["catch"](function (price) {
                                    console.log('チケットが買えた！');
                                    console.log("\u30C1\u30B1\u30C3\u30C8\u4EE3\u306F".concat(price, "\u5186, \u65E5\u4ED8\u306F").concat(_this.ticket.day, "\u3067\u3059\uFF01"));
                                });
                            }
                            else {
                                _this.reTryTicket();
                            }
                        })["catch"](function (reason) { return console.log(reason); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
    }
    // -- チケットの抽選 --
    TicketManager.prototype.lotteryTicket = function (min, max) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
                _this.randomNum < 12 ? resolve(!!(_this.randomNum % 2)) : reject('エラーにより抽選ができませんでした。しばらく経ってから再度お試しください。');
            }, _this.randomNum);
        });
    };
    ;
    // -- 再挑戦 --
    TicketManager.prototype.reTryTicket = function () {
        console.log('チケットが買えなかった！');
        if (this.tryCount <= 5) {
            console.log('再抽選に挑戦します');
            this.tryCount++;
            this.ticket.price += this.tryCount * 500;
            this.ticketChallenge();
        }
        else {
            console.log('次のチャンスで頑張ろう！！');
        }
    };
    // -- ランダム日付 --
    TicketManager.prototype.randomDate = function (since, to) {
        var start = "".concat(String(since).substring(0, 4), "/").concat(String(since).substring(4, 6), "/").concat(String(since).substring(6, 8));
        var end = "".concat(String(to).substring(0, 4), "/").concat(String(to).substring(4, 6), "/").concat(String(to).substring(6, 8));
        var startDate = new Date(start);
        var endDate = new Date(end);
        var yearRange = ((endDate.getTime() - startDate.getTime()) / 86400000);
        var random = Math.floor(Math.random() * (yearRange + 1));
        // const returnDate = new Date
        startDate.setDate(startDate.getDate() + random);
        var y = startDate.getFullYear();
        var m = ('00' + (startDate.getMonth() + 1)).slice(-2);
        var d = ('00' + startDate.getDate()).slice(-2);
        return y + '/' + m + '/' + d;
    };
    // -- おまけ クーポンコードで半額機能 --
    TicketManager.prototype.checkCoupon = function (price, code) {
        return new Promise(function (resolve, reject) {
            var halfPrice = price / 2;
            code === 'ABCDEF' ? resolve(halfPrice) : reject(price);
        });
    };
    return TicketManager;
}());
var inputTest = function () {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    var str = "";
    var reader = require('readline').createInterface({
        //  入力を受け取る
        input: process.stdin,
        output: process.stdout
    });
    reader.on('line', function (line) {
        // 入力を処理する
        str = line;
    });
    reader.on('close', function () {
        // ここで出力する
        console.log(str); // inputTest が出力される
    });
};
var ticketManager = new TicketManager();
// ticketManager.ticketChallenge();
inputTest();
