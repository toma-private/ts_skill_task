class Test {
  private target: string | number;
  constructor(target: string | number) {
    this.target = target;
    // this.main();
  }
  public main = (): void => {
    this.test(this.target)
      .then(console.log)
      .catch(console.log)
  }
  private test = (_target: string | number): Promise<string> => new Promise((resolve, reject) => {
    if (typeof _target === 'string') {
      resolve(_target);
    } else {
      reject();
    }
  })
}


const testNum = new Test(0);
const testStr = new Test('test');
testNum.main();
//  => ??
testStr.main();
//  => ??

// Question
// ？？の部分を想像してあってるかチェックしてください。（ここには時間をかけない）
//
// その上で適切な答えになるようコードを修正してください。