import 'dart:async';
import 'dart:io';
import 'dart:math';

void main() async {
  print('which homework run? 1, 2, 3, 4, 5');
  final String? number = stdin.readLineSync();
  int numberInt = int.tryParse(number!) ?? 0;

  if (numberInt == 1) {
    print('which method: + - / *');
    final String? method = stdin.readLineSync();
    final enumMethod = getState(method!);
    if (method!.isNotEmpty) {
      print('write first number');
      final String? firstNumber = stdin.readLineSync();

      if (firstNumber!.isNotEmpty) {
        int firstNumberInt = int.tryParse(firstNumber) ?? 0;
        print('write second number');
        final String? secondNumber = stdin.readLineSync();

        if (secondNumber!.isNotEmpty) {
          int secondNumberInt = int.tryParse(secondNumber) ?? 0;

          if (enumMethod == SomeEnum.pilus) {
            int result = firstNumberInt + secondNumberInt;
            print(result);
          } else if (enumMethod == SomeEnum.minus) {
            int result = firstNumberInt - secondNumberInt;
            print(result);
          } else if (enumMethod == SomeEnum.deleniye) {
            if (firstNumberInt != 0) {
              if (secondNumberInt != 0) {
                double result = firstNumberInt / secondNumberInt;
                print(result);
              } else {
                throw CalculatorError("na 0 ne delitsa");
              }
            } else {
              throw CalculatorError("0 ne delitsa");
            }
          } else if (enumMethod == SomeEnum.umnojeniye) {
            int result = firstNumberInt * secondNumberInt;
            print(result);
          } else {
            throw CalculatorError("undefined method");
          }
        } else {
          throw CalculatorError("second number is empty");
        }
      } else {
        throw CalculatorError("first number is empty");
      }
    }
  } else if (numberInt == 2) {
    Future<void> streaming() async {
      stdout.write('(N): ');
      final maxValue = int.parse(stdin.readLineSync()!);

      stdout.write('milliseconds(1second == 1000milliseconds): ');
      final interval = int.parse(stdin.readLineSync()!);

      final controller = StreamController<int>();

      Timer.periodic(Duration(milliseconds: interval), (timer) {
        final count = timer.tick;
        if (count <= maxValue) {
          controller.add(count);
        } else {
          timer.cancel();
          controller.close();
        }
      });

      await for (final number in controller.stream) {
        print('count: $number');
      }

      print('completed.');
    }

    streaming();
  } else if (numberInt == 3) {
    print('how many');
    final howMany = int.parse(stdin.readLineSync()!);

    final random = Random();
    final stream = Stream<int>.periodic(
      Duration(milliseconds: 1000),
      (count) => random.nextInt(100),
    ).take(howMany);

    await for (final number in stream) {
      print('number: $number');
    }

    print('finished');
  } else if (numberInt == 4) {
    final todoList = <String>[];
    final controller = StreamController<String>();

    final todoStream = controller.stream;

    while (true) {
      print('write value (or "q" for exit):');
      final input = readLine();

      if (input?.toLowerCase() == 'q') {
        break;
      }

      todoList.add(input!);

      controller.sink.add(input);
    }

    controller.close();

    print('Todo list:');
    var taskCount = 1;

    todoStream.listen((task) {
      print('$taskCount. $task');
      taskCount++;
    });
  } else if (numberInt == 5) {
    print('radius:');
    double radius = double.parse(stdin.readLineSync()!);

    double S = calc(radius);

    print('radius: $radius; S $S ');
  }
}

// 4
String? readLine() {
  try {
    final input = stdin.readLineSync();
    return input;
  } catch (e) {
    print('Error: $e');
    return null;
  }
}

// 1
enum SomeEnum { pilus, minus, deleniye, umnojeniye, undefined }

getState(String method) {
  switch (method) {
    case '+':
      return SomeEnum.pilus;
    case '-':
      return SomeEnum.minus;
    case '/':
      return SomeEnum.deleniye;
    case '*':
      return SomeEnum.umnojeniye;
    default:
      throw CalculatorError("Invalid operator: $method");
  }
}

class CalculatorError extends Error {
  final String message;

  CalculatorError(this.message);

  @override
  String toString() {
    return message;
  }
}

// 5
double calc(double radius) {
  const double pi = 3.14159265359;
  return pi * radius * radius;
}
