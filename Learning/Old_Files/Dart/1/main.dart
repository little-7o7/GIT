import 'dart:io';

void main(List<String> args) {
  print("write yout name");

  final name = stdin.readLineSync();

  print("hello $name");
}