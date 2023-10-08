import 'dart:io';

void main(List<String> arguments) {
  print('white farengeyt °F');
  final String? farengeyt = stdin.readLineSync();
  int farengeytInt = int.tryParse(farengeyt!) ?? 0;

  print('${formula(farengeytInt)}°C');
}

formula(farengeyt) {
  return (farengeyt - 32) * 5 / 9;
}