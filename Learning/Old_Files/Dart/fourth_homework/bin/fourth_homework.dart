import 'dart:io';

List<int> filterDivisibleNumbers(List<int> numbers) {
  List<int> divisibleNumbers = [];

  numbers.forEach((number) {
    if (number % 2 == 0) {
      divisibleNumbers.add(number);
    }
  });

  return divisibleNumbers;
}

int calculateBirthYear(int age) {
  int currentYear = DateTime.now().year;
  return currentYear - age;
}

void main(List<String> arguments) {
  print('which homework run? 1, 2');
  final String? number = stdin.readLineSync();
  int numberInt = int.tryParse(number!) ?? 0;

  if (numberInt == 1) {
    List<int> inputList = [1, 2, 3, 4, 5, 6];
    List<int> result = filterDivisibleNumbers(inputList);
    print(result);
  } else if (numberInt == 2) {
    print('how old are you?');
    final String? userAge = stdin.readLineSync();
    int userAgeInt = int.tryParse(userAge!) ?? 0;
    print('Birth Year: ${calculateBirthYear(userAgeInt)}');
  }
}
