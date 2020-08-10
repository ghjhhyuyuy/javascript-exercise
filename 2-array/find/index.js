export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const person = collection.find(man => man.age <= 20);
  return person.name;
}
