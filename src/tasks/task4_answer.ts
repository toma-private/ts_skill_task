class Test {
  private target: string | number;

  constructor(target: string | number) {
    this.target = target;  // Testクラスをインスタンス化する際に引数の値がtargetに代入される
    // this.main();
  }

  public main = (): void => {
    this.test(this.target)  // targetの値を引数に渡してtestを発火
      .then(console.log)  // resolveしたらログ
      .catch(console.log);  // rejectしたらログ
  };

  private test = (_target: string | number): Promise<string> => new Promise((resolve, reject) => {
    if (typeof _target === 'string') {  // 引数の値がstring型だったら引数を返しresolve、違えばreject
      resolve(_target);
    } else {
      reject(_target);  // ここが変更点（reject時にも引数を渡す）
    }
  });  // Promise<string>によって型引数が指定されている(resolve時はstring型しか返せない)

}


const testNum = new Test(0);  // number型の引数を渡してTestをインスタンス化
const testStr = new Test('test');  // string型の引数を渡してTestをインスタンス化

testNum.main();
//  => ??  // 0をログで出力させたかった？（できていない）→ testのreject時にも引数を渡してあげることで出力させる（testは型引数として<string>を指定しているが、reject時は関係ない）
testStr.main();
//  => ??  // testをログで出力させたかった？（できてる）

// Question
// ？？の部分を想像してあってるかチェックしてください。（ここには時間をかけない）
//
// その上で適切な答えになるようコードを修正してください。