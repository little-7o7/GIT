// hive_db.dart
import 'package:hive_flutter/hive_flutter.dart';
import '../models/todo_model.dart';

class HiveDB {
  static late Box<TodoModel> todoBox;
  static late Box themeBox;

  static Future<void> init() async {
    await Hive.initFlutter();
    todoBox = await Hive.openBox<TodoModel>('todos');
    themeBox = await Hive.openBox('theme');
  }

  static addTodo() {}
}
