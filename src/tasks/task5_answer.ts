// 取り組み方について
// 【準備】
// ・lotteryTicket関数内のコメントアウトを解除してsetTimeoutを動かす。
// ・今回は基本的ライブラリは使わない。どうしても使いたければ相談。
// ・下記条件を確認の上不明点を黒川に確認する
// 【必須条件】
// ・非同期処理を用いてsetTimeoutで遅延されても問題ないよう実装する。
// ・買えた時と買えなかった時で処理をしっかりと分岐させる。(サンプルコードは書き換えてOK)
// ・チケットの日付を「2020/01/01 ~ 2020/03/31」の間でランダムにする(専用の関数を作成すること)  //引数で設定した範囲でランダムに改良
// 【おまけ】
// ・その他、機能追加しても良い
// （Ex:
// 　・会員だと確率が上がる、割引がかかる。
// 　・チケットの総枚数を決めておく。
// 　・複数枚応募できるようにする。
//  etc...）
// - チケット販売クラス -
class TicketManager {
  // -- チケットデータ --
  private ticket = {
    name: 'musicLive',
    price: 5000,
    day: this.randomDate(20211001, 20211208),
  };

  private coupon: string = 'ABCDE';  // クーポンコード入力欄と紐付ける

  // -- 乱数と挑戦回数の保持 --
  private randomNum: number = 1000;
  private tryCount: number = 0;

  // -- チケットの抽選 --
  private lotteryTicket(min: number, max: number): Promise<boolean | string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        this.randomNum < 12 ? resolve(!!(this.randomNum % 2)) : reject('エラーにより抽選ができませんでした。しばらく経ってから再度お試しください。');
      }, this.randomNum);
    });

  };

  // -- 再挑戦 --
  private reTryTicket() {
    console.log('チケットが買えなかった！');
    if (this.tryCount <= 5) {
      console.log('再抽選に挑戦します');
      this.tryCount++;
      this.ticket.price += this.tryCount * 500;
      this.ticketChallenge();
    } else {
      console.log('次のチャンスで頑張ろう！！');
    }
  }

  // -- チケット購入チャレンジ --
  readonly ticketChallenge = async () => {
    await this.lotteryTicket(5, 15)
      .then((a: boolean | string) => {
        if (a) {
          this.checkCoupon(this.ticket.price, this.coupon)
            .then((price) => {
              console.log('チケットが買えた！');
              console.log(`チケット代はクーポン適用で${price}円, 日付は${this.ticket.day}です！`);
            })
            .catch((price) => {
              console.log('チケットが買えた！');
              console.log(`チケット代は${price}円, 日付は${this.ticket.day}です！`);
            });
        } else {
          this.reTryTicket();
        }
      })
      .catch((reason: string) => console.log(reason));
  };

  // -- ランダム日付 --
  private randomDate(since: number, to: number): string {// 開始日をsinceに数字8桁で入力、終了日をtoに数字8桁で入力
    const start = `${String(since).substring(0, 4)}/${String(since).substring(4, 6)}/${String(since).substring(6, 8)}`;
    const end = `${String(to).substring(0, 4)}/${String(to).substring(4, 6)}/${String(to).substring(6, 8)}`;
    const startDate = new Date(start);
    const endDate = new Date(end);
    const yearRange = ((endDate.getTime() - startDate.getTime()) / 86400000);
    const random = Math.floor(Math.random() * (yearRange + 1));
    // const returnDate = new Date
    startDate.setDate(startDate.getDate() + random);

    const y = startDate.getFullYear();
    const m = ('00' + (startDate.getMonth() + 1)).slice(-2);
    const d = ('00' + startDate.getDate()).slice(-2);

    return y + '/' + m + '/' + d;
  }

  // -- おまけ クーポンコードで半額機能 --
  private checkCoupon (price: number, code: string): Promise<number> {
    return new Promise((resolve, reject) => {
      const halfPrice = price / 2;
      code === 'ABCDEF' ? resolve(halfPrice) : reject(price);
    });
  }
}

const ticketManager = new TicketManager();
ticketManager.ticketChallenge();