import Person from './person';
// TODO 20: 在这里写实现代码
export default class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    if (this.klass === undefined) {
      return `${super.introduce()} I am a Teacher. I teach No Class.`;
    }
    return `${super.introduce()} I am a Teacher. I teach Class ${this.klass}.`;
  }
}
