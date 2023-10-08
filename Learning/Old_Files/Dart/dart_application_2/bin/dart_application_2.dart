import 'dart:io';

void main(List<String> arguments) {
  List<String> names = ['Alex', 'Adam', 'Michael'];

  print("what is your name?");
  final name = stdin.readLineSync();

  if (name!.isNotEmpty) {
    if (names.contains(name)) {
      print("how old are you?");
      final number = stdin.readLineSync();

      if (number!.isNotEmpty) {
        int age = int.parse(number);

        if (age >= 18) {
          print('$name, you can enter');
        } else {
          print('$name, you can\'t enter');
        }
      } else {
        print('write your age');
      }
    } else {
      print('$name, your name haven\'t in list');
    }
  } else {
    print('write your name');
  }
}
