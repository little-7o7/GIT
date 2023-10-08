import 'dart:io';

void main(List<String> arguments) {
  print("what is your name?");
  final name = stdin.readLineSync();

  if (name!.isNotEmpty) {
    print("how old are you?");
    final number = stdin.readLineSync();

    if (number!.isNotEmpty) {
      int age = int.parse(number);
      if (age >= 18) {
        print('you can enter!');
      } else {
        print('$name, you are not 18 years old!');
      }
    } else {
      print('write yout age!!');
    }
  } else {
    print('write yout name!!');
  }
}
