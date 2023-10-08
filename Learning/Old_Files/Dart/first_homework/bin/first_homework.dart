import 'dart:io';

void main() {
  print('which homework run? 1 or 2');
  final String? number = stdin.readLineSync();
  int numberInt = int.tryParse(number!) ?? 0;

  if (numberInt == 1) {
    // !! first homework
    print('write a first number: ');
    final String? input1 = stdin.readLineSync();

    print('write a second number: ');
    final String? input2 = stdin.readLineSync();

    if (input1 == null || input2 == null) {
      print('error, where is a number');
      return;
    }

    int number1 = int.tryParse(input1) ?? 0;
    int number2 = int.tryParse(input2) ?? 0;

    if (number1 > number2) {
      print('$number1 > $number2');
    } else if (number1 < number2) {
      print('$number1 < $number2');
    } else {
      print('$number1 = $number2');
    }
  } else if (numberInt == 2) {
    // !! second homework with array
    List<int> numbers = [];

    for (int i = 1; i <= 2; i++) {
      print('write a $i number: ');
      final String? input = stdin.readLineSync();

      if (input == null) {
        print('error, where is a number');
        return;
      }

      int number = int.tryParse(input) ?? 0;
      numbers.add(number);
    }

    if (numbers[0] > numbers[1]) {
      print('${numbers[0]} > ${numbers[1]}');
    } else if (numbers[0] < numbers[1]) {
      print('${numbers[0]} < ${numbers[1]}');
    } else {
      print('${numbers[0]} = ${numbers[1]}');
    }
  } else {
    print('select a homework');
  }
}
