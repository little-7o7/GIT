final Map mineAnswers = {
  1: 'a',
  2: 'b, d',
  3: 'c',
  4: 'b',
  5: 'b',
  6: 'a',
  7: 'b',
  8: 'c',
  9: 'c',
  10: 'a',
  11: 'c',
  12: 'a',
  13: 'a',
  14: 'c',
  15: 'c',
  16: 'a',
  17: 'b',
  18: 'd',
  19: 'a',
  20: 'c',
  21: 'a',
  22: 'b, d',
  23: 'a',
  24: 'd',
  25: 'b',
  26: 'c, d',
  27: 'c',
  28: 'b',
  29: 'a',
  30: 'b',
  31: 'a',
  32: 'b, d'
};

final Map teachersAnswers = {
  1: "a",
  2: "b, c, d",
  3: "c",
  4: "b",
  5: "b",
  6: "a",
  7: "b",
  8: "c",
  9: "c",
  10: "a, b",
  11: "c",
  12: "a",
  13: "a",
  14: "c",
  15: "c",
  16: "a",
  17: "b",
  18: "c,d",
  19: "a",
  20: "c",
  21: "a",
  22: "b, d",
  23: "a",
  24: "c",
  25: "b",
  26: "b, c",
  27: "c",
  28: "b",
  29: "a",
  30: "b",
  31: "a",
  32: "b, d"
};

correctAswers(Map your, Map teachers) {
  final List correctAns = [];
  final List incorrectAns = [];

  for (var i = 1; i <= your.length; i++) {
    final mine = your[i].replaceAll(' ', '');
    final yours = teachers[i].replaceAll(' ', '');
    if (mine == yours) {
      correctAns.add(yours);
    } else {
      incorrectAns.add(yours);
    }
  }

  print(correctAns);
  print(incorrectAns);
}

void main(List<String> arguments) {
  correctAswers(mineAnswers, teachersAnswers);
}
