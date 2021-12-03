class Animal {
  private dog: Dog;
  private cat: Cat;
  public body: {
    ear: 2,
    eye: 2,
    nose: 1,
    mouth: 1,
    leg: 4,
    tail: 1;
  };

  public voice: string;

  constructor() {
    this.dog = new Dog();
    this.cat = new Cat();
  }

  public introduction(name: string, body: {}, voice: string) {
    console.log(name, 'の鳴き声は', voice, 'で、体の構造は', body, 'です。');
  }

}

class Dog extends Animal {
  constructor() {
    super();
    this.voice = 'wow';

    this.introduction('Dog', this.body, this.voice);
  }

}


class Cat extends Animal {
  constructor() {
    super();
    this.voice = 'nya';

    this.introduction('Cat', this.body, this.voice);
  }

}