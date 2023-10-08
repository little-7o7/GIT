import 'dart:io';

void main(List<String> arguments) {
  print('write number');
  final int number = int.parse(stdin.readLineSync()!);
  print(factorialFunc(number));
}

factorialFunc(number) {
  int factorial = 1;
  for (var i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
