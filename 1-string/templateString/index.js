function getScore(id) {
  if (id === '1234') {
    return 60;
  }
  return 59;
}

export default function getScoreOutput(person) {
  // TODO 8: 在这里写实现代码
  const score = getScore(person.id);
  const name = person.lastName + person.firstName;
  return `你好，${name}！你的考试成绩为${score}分`;
}
