import 'package:flutter/material.dart';
import '../utils/hive_db.dart';

class ThemeProvider extends ChangeNotifier {
  ThemeData _currentTheme = HiveDB.themeBox.get('theme') == 'dark' ? ThemeData.dark() : ThemeData.light();
  ThemeData get currentTheme => _currentTheme;

  Future<void> toggleTheme() async {
    if (_currentTheme == ThemeData.dark()) {
      await HiveDB.themeBox.put('theme', 'light');
      _currentTheme = ThemeData.light();
    } else {
      await HiveDB.themeBox.put('theme', 'dark');
      _currentTheme = ThemeData.dark();
    }
    notifyListeners();
  }
}
