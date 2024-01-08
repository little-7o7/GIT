import 'package:flutter/material.dart';

import '../models/counter_model.dart';

class CounterProvider extends ChangeNotifier {
  final CounterModel _counter = CounterModel(0);
  ThemeData _currentTheme = ThemeData.light();

  int get count => _counter.count;
  ThemeData get currentTheme => _currentTheme;

  void toggleTheme() {
    _currentTheme = _currentTheme == ThemeData.light() ? ThemeData.dark() : ThemeData.light();
    notifyListeners();
  }

  void increment() {
    _counter.count++;
    notifyListeners();
  }

  void decrement() {
    _counter.count--;
    notifyListeners();
  }
}
