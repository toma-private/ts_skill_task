var Test = /** @class */ (function () {
    function Test(target) {
        var _this = this;
        this.main = function () {
            _this.test(_this.target)
                .then(console.log)["catch"](console.log);
        };
        this.test = function (_target) { return new Promise(function (resolve, reject) {
            if (typeof _target === 'string') {
                resolve(_target);
            }
            else {
                reject();
            }
        }); };
        this.target = target;
        // this.main();
    }
    return Test;
}());
var testNum = new Test(0);
var testStr = new Test('test');
testNum.main();
//  => ??
testStr.main();
//  => ??
// ？？の部分を想像してあってるかチェックしてください。（ここには時間をかけない）
//
// その上で適切な答えになるようコードを修正してください。
