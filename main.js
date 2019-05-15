class Dog {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log('woof!')
  }

  run() {
    console.log('the dog ran very fast')
  }
}

class PitBull extends Dog {
  constructor(name) {
    super(name)
  }

  speak() {
    console.log('the dog bit someones arm off')
  }
}

class Pug {
  constructor(name) {
    this.name = name
  }

  speak() {
    console.log('squeak')
  }
}

fido = new Dog('Fido')
fabio = new Dog('Fabio')
bruce = new PitBull('Bruce')
thatDog = new Pug('thatDog')
