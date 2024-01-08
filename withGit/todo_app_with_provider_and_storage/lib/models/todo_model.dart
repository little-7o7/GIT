// todo_model.dart
import 'package:hive/hive.dart';

part 'todo_model.g.dart';

@HiveType(typeId: 0)
class TodoModel extends HiveObject {
  @HiveField(0)
  late String id;
  @HiveField(1)
  late String title;
  @HiveField(2)
  late String description;
  @HiveField(3)
  late DateTime date;
  @HiveField(4)
  late bool status;

  TodoModel({
    required this.id,
    required this.title,
    required this.description,
    required this.date,
    required this.status
  });
}
