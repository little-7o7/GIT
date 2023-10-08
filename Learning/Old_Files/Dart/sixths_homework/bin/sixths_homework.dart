import 'dart:io';

void main() {
  print('which homework run? 1, 2, 3');
  final String? number = stdin.readLineSync();
  int numberInt = int.tryParse(number!) ?? 0;

  if (numberInt == 1) {
    final todoList = <String>[];

    while (true) {
      print('write value (or "q" for exit):');
      final input = readLine();

      if (input?.toLowerCase() == 'q') {
        break;
      }

      todoList.add(input!);
    }

    print('Todo list:');
    for (var i = 0; i < todoList.length; i++) {
      print('${i + 1}. ${todoList[i]}');
    }
  } else if (numberInt == 2) {
    print('BMI Calculator');
    double weight, height;

    print('weight in kilograms:');
    weight = readDouble();

    print('height in meters:');
    height = readDouble();

    double bmi = calculateBMI(weight, height);

    print('Your BMI: $bmi');
    print(interpretBMI(bmi));
  } else if (numberInt == 3) {
    print('write a string to check for palindrome:');
    String input = stdin.readLineSync()!.toLowerCase();

    if (isPalindrome(input)) {
      print('It\'s a palindrome.');
    } else {
      print('It\'s not a palindrome.');
    }
  }
}

// 1
String? readLine() {
  try {
    final input = stdin.readLineSync();
    return input;
  } catch (e) {
    print('error: $e');
    return null;
  }
}

// 2
double readDouble() {
  try {
    final input = double.parse(stdin.readLineSync()!);
    return input;
  } catch (e) {
    print('Input error: $e');
    exit(1);
  }
}

double calculateBMI(double weight, double height) {
  return weight / (height * height);
}

String interpretBMI(double bmi) {
  if (bmi < 18.5) {
    return 'underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return 'normal weight';
  } else if (bmi >= 24.9 && bmi < 29.9) {
    return 'overweight';
  } else {
    return 'obesity';
  }
}

// 3
bool isPalindrome(String input) {
  input = input.replaceAll(RegExp(r'[^\w\s]'), '');

  input = input.replaceAll(' ', '');

  String reversed = input.split('').reversed.join('');

  return input == reversed;
}
