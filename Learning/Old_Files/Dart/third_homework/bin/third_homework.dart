import 'dart:io';

void main(List<String> arguments) {
  print('which homework run? 1, 2 or 3');
  final String? number = stdin.readLineSync();
  int numberInt = int.tryParse(number!) ?? 0;

  if (numberInt == 1) {
    // !! first homework
    print('write a number!');
    final String? firstNumber = stdin.readLineSync();
    int firstNumberInt = int.tryParse(firstNumber!) ?? 0;

    for (var i = 0; i <= firstNumberInt; i++) {
      print(i);
    }
  } else if (numberInt == 2) {
    // !! second homework
    print('write a number!');
    final String? secondNumber = stdin.readLineSync();
    int secondNumberInt = int.tryParse(secondNumber!) ?? 0;

    for (var i = secondNumberInt; i >= 0; i--) {
      print(i);
    }
  } else if (numberInt == 3) {
    // !! third homework
    String? userInput;

    do {
      print('please enter your answer');
      userInput = stdin.readLineSync();

      if (userInput == null || userInput.isEmpty) {
        print('you did not enter a valid answer, please try again.');
      } else {
        print('input: $userInput');
      }
    } while (userInput == null || userInput.isEmpty);
  }
}
