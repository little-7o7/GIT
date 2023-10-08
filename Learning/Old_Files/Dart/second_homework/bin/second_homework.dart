import 'dart:io';

void main(List<String> arguments) {
  print('which homework run? 1 or 2');
  final String? number = stdin.readLineSync();
  int numberInt = int.tryParse(number!) ?? 0;

  if (numberInt == 1) {
    // !! first homework
    print('what is your name?');
    final String? name = stdin.readLineSync();

    if (name!.isNotEmpty) {
      String last = name.substring(name.length - 1);
      if (last == 'a' || last == 'A') {
        print("how old are you?");
        final age = stdin.readLineSync();

        if (age!.isNotEmpty) {
          int number = int.parse(age);
          if (number >= 18 && number <= 30) {
            print("How much money with you?");
            final money = stdin.readLineSync();

            if (money!.isNotEmpty) {
              int moneyInt = int.parse(money);

              if (moneyInt >= 100) {
                print('$name, you can enter. you have a $money\$');
              } else {
                print('$name, you can\'t enter, you have not a 100\$');
              }
            } else {
              print('you poor!!');
            }
          } else {
            print('$name, you can\'t enter');
          }
        } else {
          print('write your age');
        }
      } else {
        print('your last letter in name not A/a');
      }
    } else {
      print('write your name!');
    }
  } else if (numberInt == 2) {
    // !! second homework
    print("write a number 0-100");
    final number = stdin.readLineSync();

    if (number!.isNotEmpty) {
      int numberInt = int.parse(number);

      if (numberInt > 100) {
        print('0-100');
      } else if (numberInt <= 100 && numberInt >= 90) {
        print('Отлично');
      } else if (numberInt < 90 && numberInt >= 80) {
        print('Хорошо');
      } else if (numberInt < 80 && numberInt >= 70) {
        print('Удовлетворительно');
      } else if (numberInt < 70 && numberInt >= 60) {
        print('Приемлемо');
      } else if (numberInt < 60 && numberInt >= 30) {
        print('Не очень хорошо');
      } else if (numberInt < 30 && numberInt >= 10) {
        print('Плохо');
      } else if (numberInt < 10 && numberInt >= 0) {
        print('Ужасно');
      } else if (numberInt < 0) {
        print('0-100');
      }
    } else {
      print('where is a number');
    }
  } else {
    print('select a homework');
  }
}
