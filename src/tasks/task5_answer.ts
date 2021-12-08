// 取り組み方について
// 【準備】
// ・lotteryTicket関数内のコメントアウトを解除してsetTimeoutを動かす。
// ・今回は基本的ライブラリは使わない。どうしても使いたければ相談。
// ・下記条件を確認の上不明点を黒川に確認する
// 【必須条件】
// ・非同期処理を用いてsetTimeoutで遅延されても問題ないよう実装する。
// ・買えた時と買えなかった時で処理をしっかりと分岐させる。(サンプルコードは書き換えてOK)
// ・チケットの日付を「2020/01/01 ~ 2020/03/31」の間でランダムにする(専用の関数を作成すること)
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
    day: this.randomDate(),
  };
  // -- 乱数と挑戦回数の保持 --
  private randomNum: number = 1000;
  private tryCount: number = 0;
  // -- チケットの抽選 --
  private lotteryTicket (min: number, max: number): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        this.randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
        if (!!(this.randomNum % 2)) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, this.randomNum);
    })

  };
  // -- 再挑戦 --
  private reTryTicket() {
    console.log('チケットが買えなかった！');
    if (this.tryCount <= 5) {
      console.log('再抽選に挑戦します');
      this.tryCount++;
      this.ticket.price += this.randomNum * 100;
      this.ticketChallenge();
    } else {
      console.log('次のチャンスで頑張ろう！！');
    }
  }
  // -- チケット購入チャレンジ --
  readonly ticketChallenge = async () => {
    const result = await this.lotteryTicket(5, 15);
    if (result) {
      console.log('チケットが買えた！');
      console.log(`チケット代は${this.ticket.price}円, 日付は${this.ticket.day}です！`);
    } else {
      this.reTryTicket();
    }
  };

  // -- ランダム日付 --
  private randomDate(): string {
    // const time = Math.floor(Math.random() * (1585666799 + 1 - 1577804400)) + 1577804400;
    const month = Math.floor(Math.random() * 3) + 1
    const day = (): number => {
      if (month === 2) {
        return Math.floor(Math.random() * 29) + 1
      } else {
        return Math.floor(Math.random() * 31) + 1
      }
    }
    return `2020/${month}/${day()}`
  }
}
const ticketManager = new TicketManager();
ticketManager.ticketChallenge();